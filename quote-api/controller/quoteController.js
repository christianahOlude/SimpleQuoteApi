let quotes = [];

const getAllQuotes = (req, res) => {
    res.status(200).json(quotes);
};

const addQuote = (req, res) => {
    const { text, author } = req.body;

    if (!text || text.trim() === '') {
        return res.status(400).json({ message: 'Quote text is required' });
    }
    if (!author || author.trim() === '') {
        return res.status(400).json({ message: 'Author is required' });
    }

    const newQuote = { text, author };
    quotes.push(newQuote);
    res.status(201).json({ message: 'Quote added successfully!' });
};

module.exports = {
    getAllQuotes,
    addQuote
};