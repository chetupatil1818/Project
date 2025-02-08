const { spawn } = require('child_process');

exports.predictCrop = (req, res) => {
    const { soil_ph, rainfall, temperature } = req.body;

    const pythonProcess = spawn('python', ['predict_crop.py', soil_ph, rainfall, temperature]);
    pythonProcess.stdout.on('data', (data) => {
        res.json({ prediction: data.toString() });
    });
};
