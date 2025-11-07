const express = require('express');
const router = express.Router();
const { getCart, addToCart, removeFromCart } = require('../controllers/cartController');

// GET /api/cart - Get all cart items with total
router.get('/', getCart);

// POST /api/cart - Add item to cart or update quantity
router.post('/', addToCart);

// DELETE /api/cart/:id - Remove item from cart
router.delete('/:id', removeFromCart);

module.exports = router;
