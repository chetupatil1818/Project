const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    mobile: String,
    password: String,
    state: String
});

module.exports = mongoose.model('User', userSchema);
