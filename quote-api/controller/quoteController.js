let quotes = [];

const getAllQuotes = (req, res) => {
    res.json(quotes);
};


const addQuote = (req, res) => {
    const { text } = req.body;

    if (!text || text.trim() === '') {
          return res.status(400).json({ message: 'Quote text is required' });
    }

    quotes.push({ text });
    res.status(201).json({ message: 'Quote added successfully!' });
};

module.exports = {
    getAllQuotes,
    addQuote
};