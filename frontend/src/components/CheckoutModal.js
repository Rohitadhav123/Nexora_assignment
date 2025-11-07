import { useState } from 'react';
import './CheckoutModal.css';

function CheckoutModal({ onClose, onSubmit, loading }) {
  const [formData, setFormData] = useState({
    name: '',
    email: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email) {
      onSubmit(formData);
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>Checkout</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Full Name</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="Enter your name"
              required
            />
          </div>
          
          <div className="form-group">
            <label>Email Address</label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="modal-actions">
            <button type="button" className="cancel-btn" onClick={onClose}>
              Cancel
            </button>
            <button type="submit" className="submit-btn" disabled={loading}>
              {loading ? 'Processing...' : 'Place Order'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CheckoutModal;
