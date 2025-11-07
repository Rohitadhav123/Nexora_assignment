const Cart = require('../models/Cart');

// @desc    Process checkout and return receipt
// @route   POST /api/checkout
exports.processCheckout = async (req, res) => {
  try {
    const { name, email } = req.body;
    
    if (!name || !email) {
      return res.status(400).json({ message: 'Name and email required' });
    }
    
    // Get cart items from server
    const serverCart = await Cart.find().populate('productId');
    
    if (serverCart.length === 0) {
      return res.status(400).json({ message: 'Cart is empty' });
    }
    
    // Calculate total
    let total = 0;
    const items = serverCart.map(item => {
      const subtotal = item.productId.price * item.quantity;
      total += subtotal;
      return {
        name: item.productId.name,
        price: item.productId.price,
        quantity: item.quantity,
        subtotal: subtotal.toFixed(2)
      };
    });
    
    // Create receipt
    const receipt = {
      orderId: 'ORD-' + Date.now(),
      customerName: name,
      customerEmail: email,
      items: items,
      total: total.toFixed(2),
      timestamp: new Date().toISOString(),
      status: 'success'
    };
    
    // Clear cart after successful checkout
    await Cart.deleteMany({});
    
    res.json(receipt);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
