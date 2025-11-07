const Cart = require('../models/Cart');
const Product = require('../models/Product');

// @desc    Get all cart items with total
// @route   GET /api/cart
exports.getCart = async (req, res) => {
  try {
    const cartItems = await Cart.find().populate('productId');
    
    let total = 0;
    const items = cartItems.map(item => {
      const subtotal = item.productId.price * item.quantity;
      total += subtotal;
      return {
        _id: item._id,
        product: item.productId,
        quantity: item.quantity,
        subtotal: subtotal.toFixed(2)
      };
    });
    
    res.json({ items, total: total.toFixed(2) });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Add item to cart or update quantity
// @route   POST /api/cart
exports.addToCart = async (req, res) => {
  try {
    const { productId, quantity } = req.body;
    
    if (!productId || !quantity) {
      return res.status(400).json({ message: 'Product ID and quantity required' });
    }
    
    // Check if product exists
    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    
    // Check if item already in cart
    let cartItem = await Cart.findOne({ productId });
    
    if (cartItem) {
      // Update existing quantity
      cartItem.quantity += quantity;
      await cartItem.save();
    } else {
      // Create new cart item
      cartItem = await Cart.create({ productId, quantity });
    }
    
    await cartItem.populate('productId');
    res.status(201).json(cartItem);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Remove item from cart
// @route   DELETE /api/cart/:id
exports.removeFromCart = async (req, res) => {
  try {
    const cartItem = await Cart.findByIdAndDelete(req.params.id);
    
    if (!cartItem) {
      return res.status(404).json({ message: 'Cart item not found' });
    }
    
    res.json({ message: 'Item removed from cart' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
