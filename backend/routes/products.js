const express = require('express');
const router = express.Router();
const { getProducts, resetProducts } = require('../controllers/productController');

router.get('/', getProducts);
router.post('/reset', resetProducts);

module.exports = router;
