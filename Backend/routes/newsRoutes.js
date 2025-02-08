const express = require('express');
const { getLatestNews } = require('../controllers/newsController');

const router = express.Router();

router.get('/latest', getLatestNews);

module.exports = router;
