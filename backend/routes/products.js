const express = require("express");
const router = express.Router();

const products = [
    {id: 1, name: "Product 1", price: 200, rating: "*****"},
    {id: 2, name: "Product 2", price: 300, rating: "*****"},
    {id: 3, name: "Product 3", price: 500, rating: "*****"},
];

router.get("/", (req, res) => {
    res.json(products);
});

router.get("/:id", (req, res) => {
    const product = products.find(p => p.id == req.params.id);
    if (product) res.json(product);
    else res.status(404).send("Product not found");
})

module.exports = router;