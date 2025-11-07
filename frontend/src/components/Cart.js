import './Cart.css';

function Cart({ cart, onRemove, onCheckout, onContinueShopping }) {
  if (cart.items.length === 0) {
    return (
      <div className="cart-container">
        <h2 className="cart-title">Your Cart</h2>
        <div className="empty-cart">
          <p>Your cart is empty</p>
          <button className="continue-btn" onClick={onContinueShopping}>
            Continue Shopping
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-container">
      <h2 className="cart-title">Your Cart</h2>
      <div className="cart-items">
        {cart.items.map(item => (
          <div key={item._id} className="cart-item">
            <img src={item.product.image} alt={item.product.name} />
            <div className="item-details">
              <h3>{item.product.name}</h3>
              <p className="item-price">${item.product.price} x {item.quantity}</p>
              <p className="item-subtotal">Subtotal: ${item.subtotal}</p>
            </div>
            <button 
              className="remove-btn"
              onClick={() => onRemove(item._id)}
            >
              Remove
            </button>
          </div>
        ))}
      </div>
      
      <div className="cart-summary">
        <h3>Total: ${cart.total}</h3>
        <div className="cart-actions">
          <button className="continue-btn" onClick={onContinueShopping}>
            Continue Shopping
          </button>
          <button className="checkout-btn" onClick={onCheckout}>
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
