const express = require('express');
const app = express();
const port = 3000;

const quoteRoutes = require('./routes/quoteRoutes');

app.use(express.json());

// Use the routes
app.use('/api', quoteRoutes);

app.listen(port, () => {
    console.log(`Quote API running at http://localhost:${port}/api/quotes`);
});
