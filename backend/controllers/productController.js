const Product = require('../models/Product');

// @desc    Get all products
// @route   GET /api/products
exports.getProducts = async (req, res) => {
  try {
    let products = await Product.find();
    
    // If no products exist, seed some sample data
    if (products.length === 0) {
      const sampleProducts = [
        { 
          name: 'Wireless Headphones', 
          price: 49.99, 
          image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=300&fit=crop', 
          description: 'Premium sound quality with noise cancellation' 
        },
        { 
          name: 'Smart Watch', 
          price: 199.99, 
          image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300&h=300&fit=crop', 
          description: 'Track your fitness and stay connected' 
        },
        { 
          name: 'Laptop Stand', 
          price: 29.99, 
          image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=300&h=300&fit=crop', 
          description: 'Ergonomic aluminum design' 
        },
        { 
          name: 'USB-C Cable', 
          price: 12.99, 
          image: 'https://images.unsplash.com/photo-1591290619762-9b5c3d6e9932?w=300&h=300&fit=crop', 
          description: 'Fast charging 6ft cable' 
        },
        { 
          name: 'Mechanical Keyboard', 
          price: 79.99, 
          image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=300&h=300&fit=crop', 
          description: 'RGB backlit mechanical switches' 
        },
        { 
          name: 'Wireless Mouse', 
          price: 39.99, 
          image: 'https://images.unsplash.com/photo-1527814050087-3793815479db?w=300&h=300&fit=crop', 
          description: 'Wireless precision gaming mouse' 
        },
        { 
          name: '4K Monitor', 
          price: 299.99, 
          image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=300&h=300&fit=crop', 
          description: '27-inch 4K Ultra HD display' 
        },
        { 
          name: 'HD Webcam', 
          price: 69.99, 
          image: 'https://images.unsplash.com/photo-1587826080692-f439cd0b70da?w=300&h=300&fit=crop', 
          description: '1080p HD video with autofocus' 
        }
      ];
      products = await Product.insertMany(sampleProducts);
    }
    
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
