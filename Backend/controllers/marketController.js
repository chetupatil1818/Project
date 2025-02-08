const Market = require('../models/market');

exports.getMarketPrices = async (req, res) => {
    try {
        const prices = await Market.find();
        res.json(prices);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
