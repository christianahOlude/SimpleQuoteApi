const express = require('express');
const router = express.Router();
const { getAllQuotes, addQuote } = require('../controller/quoteController');

router.get('/quotes', getAllQuotes);
router.post('/quotes', addQuote);

module.exports = router;