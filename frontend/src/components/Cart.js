import './Cart.css';

function Cart({ cart, onRemove, onUpdateQuantity, onCheckout, onContinueShopping }) {
  if (cart.items.length === 0) {
    return (
      <div className="cart-container">
        <h2 className="cart-title">Your Cart</h2>
        <div className="empty-cart">
          <p>🛒 Your cart is empty</p>
          <button className="continue-btn" onClick={onContinueShopping}>
            Continue Shopping
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-container">
      <h2 className="cart-title">Your Cart ({cart.items.length} {cart.items.length === 1 ? 'item' : 'items'})</h2>
      <div className="cart-items">
        {cart.items.map(item => (
          <div key={item._id} className="cart-item">
            <img src={item.product.image} alt={item.product.name} />
            <div className="item-details">
              <h3>{item.product.name}</h3>
              <p className="item-description">{item.product.description}</p>
              <p className="item-price">${item.product.price.toFixed(2)} each</p>
              
              <div className="quantity-controls">
                <button 
                  className="qty-btn"
                  onClick={() => onUpdateQuantity(item._id, item.quantity - 1)}
                  disabled={item.quantity <= 1}
                >
                  −
                </button>
                <span className="quantity-display">{item.quantity}</span>
                <button 
                  className="qty-btn"
                  onClick={() => onUpdateQuantity(item._id, item.quantity + 1)}
                >
                  +
                </button>
              </div>
              
              <p className="item-subtotal">Subtotal: ${item.subtotal}</p>
            </div>
            <button 
              className="remove-btn"
              onClick={() => onRemove(item._id)}
              title="Remove from cart"
            >
              🗑️ Remove
            </button>
          </div>
        ))}
      </div>
      
      <div className="cart-summary">
        <div className="summary-row">
          <span>Subtotal:</span>
          <span>${cart.total}</span>
        </div>
        <div className="summary-row total-row">
          <span>Total:</span>
          <span>${cart.total}</span>
        </div>
        <div className="cart-actions">
          <button className="continue-btn" onClick={onContinueShopping}>
            ← Continue Shopping
          </button>
          <button className="checkout-btn" onClick={onCheckout}>
            Proceed to Checkout →
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
