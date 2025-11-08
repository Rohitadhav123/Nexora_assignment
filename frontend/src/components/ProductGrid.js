import './ProductGrid.css';

function ProductGrid({ products, cart, onAddToCart, onRemoveFromCart, onUpdateQuantity, loading }) {
  const getProductQuantity = (productId) => {
    const cartItem = cart.items.find(item => item.product._id === productId);
    return cartItem ? cartItem.quantity : 0;
  };

  const getCartItemId = (productId) => {
    const cartItem = cart.items.find(item => item.product._id === productId);
    return cartItem ? cartItem._id : null;
  };

  const handleIncrease = (productId) => {
    onAddToCart(productId, 1);
  };

  const handleDecrease = (productId) => {
    const currentQty = getProductQuantity(productId);
    const cartItemId = getCartItemId(productId);
    
    if (cartItemId) {
      if (currentQty > 1) {
        onUpdateQuantity(cartItemId, currentQty - 1);
      } else {
        onRemoveFromCart(cartItemId);
      }
    }
  };

  return (
    <div>
      <h2 className="section-title">🛍️ Our Products</h2>
      <div className="product-grid">
        {products.map(product => {
          const quantity = getProductQuantity(product._id);
          return (
            <div key={product._id} className="product-card">
              <img src={product.image} alt={product.name} />
              <div className="product-info">
                <h3>{product.name}</h3>
                <p className="description">{product.description}</p>
                <p className="price">₹{product.price.toFixed(2)}</p>
                
                <div className="product-quantity-controls">
                  <button 
                    className="product-qty-btn decrease"
                    onClick={() => handleDecrease(product._id)}
                    disabled={quantity === 0 || loading}
                  >
                    −
                  </button>
                  <span className="product-qty-display">{quantity}</span>
                  <button 
                    className="product-qty-btn increase"
                    onClick={() => handleIncrease(product._id)}
                    disabled={loading}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      
      {products.length === 0 && (
        <div className="no-products">
          <p>Loading products...</p>
        </div>
      )}
    </div>
  );
}

export default ProductGrid;
