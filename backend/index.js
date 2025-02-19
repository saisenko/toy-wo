const express = require('express');
const app = express();
const PORT = 5000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Backend started');
});

const productsRouter = require('./routes/products');
app.use('/api/products', productsRouter);

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});