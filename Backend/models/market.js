const mongoose = require('mongoose');

const MarketSchema = new mongoose.Schema({
    crop: String,
    price: Number,
    location: String,
    date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Market', MarketSchema);
