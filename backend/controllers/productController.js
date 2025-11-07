const Product = require('../models/Product');

// @desc    Get all products
// @route   GET /api/products
exports.getProducts = async (req, res) => {
  try {
    let products = await Product.find();
    
    // If no products exist, seed some sample data
    if (products.length === 0) {
      const sampleProducts = [
        { name: 'Wireless Headphones', price: 49.99, image: 'https://via.placeholder.com/200?text=Headphones', description: 'Premium sound quality' },
        { name: 'Smart Watch', price: 199.99, image: 'https://via.placeholder.com/200?text=Watch', description: 'Track your fitness' },
        { name: 'Laptop Stand', price: 29.99, image: 'https://via.placeholder.com/200?text=Stand', description: 'Ergonomic design' },
        { name: 'USB-C Cable', price: 12.99, image: 'https://via.placeholder.com/200?text=Cable', description: 'Fast charging' },
        { name: 'Keyboard', price: 79.99, image: 'https://via.placeholder.com/200?text=Keyboard', description: 'Mechanical keys' },
        { name: 'Mouse', price: 39.99, image: 'https://via.placeholder.com/200?text=Mouse', description: 'Wireless precision' },
        { name: 'Monitor', price: 299.99, image: 'https://via.placeholder.com/200?text=Monitor', description: '27-inch 4K display' },
        { name: 'Webcam', price: 69.99, image: 'https://via.placeholder.com/200?text=Webcam', description: '1080p HD video' }
      ];
      products = await Product.insertMany(sampleProducts);
    }
    
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
