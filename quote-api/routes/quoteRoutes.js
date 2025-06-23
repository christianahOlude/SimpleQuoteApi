const express = require('express');
const router = express.Router();
const quoteController = require('../controller/quoteController');

router.get('/quotes', quoteController.getAllQuotes);
router.post('/quotes', quoteController.addQuote);

module.exports = router;

