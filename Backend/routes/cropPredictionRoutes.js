const express = require('express');
const { predictCropYield } = require('../controllers/cropPredictionController');

const router = express.Router();

router.post('/predict', predictCropYield);

module.exports = router;
