const News = require('../models/news');

exports.getLatestNews = async (req, res) => {
    try {
        const news = await News.find().sort({ date: -1 }).limit(10);
        res.json(news);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
