const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const otpService = require('../services/otpService');

exports.registerUser = async (req, res) => {
    const { mobile, name, email, state } = req.body;
    const otp = otpService.generateOTP();
    await otpService.sendOTP(mobile, otp);
    res.status(200).json({ message: 'OTP sent' });
};

exports.verifyOTP = async (req, res) => {
    const { mobile, otp, password } = req.body;
    if (!otpService.verifyOTP(mobile, otp)) return res.status(400).send('Invalid OTP');
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ mobile, password: hashedPassword });
    await newUser.save();
    res.status(201).send('User registered');
};

exports.loginUser = async (req, res) => {
    const { mobile, password } = req.body;
    const user = await User.findOne({ mobile });
    if (!user || !await bcrypt.compare(password, user.password)) return res.status(400).send('Invalid credentials');
    const token = jwt.sign({ userId: user._id }, 'secret_key');
    res.json({ token });
};
