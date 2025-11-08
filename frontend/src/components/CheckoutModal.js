import axios from 'axios';
import { useState } from 'react';
import { toast } from 'react-toastify';
import './CheckoutModal.css';

function CheckoutModal({ onClose, onSubmit, loading, cartTotal }) {
  const [formData, setFormData] = useState({
    name: '',
    email: ''
  });
  const [processing, setProcessing] = useState(false);

  // Load Razorpay script
  const loadRazorpayScript = () => {
    return new Promise((resolve) => {
      const script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/checkout.js';
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email) {
      toast.error('Please fill all fields');
      return;
    }

    setProcessing(true);

    try {
      // Load Razorpay script
      const scriptLoaded = await loadRazorpayScript();
      
      if (!scriptLoaded) {
        toast.error('Failed to load payment gateway');
        setProcessing(false);
        return;
      }

      // Create Razorpay order
      const orderResponse = await axios.post('/api/payment/create-order', {
        amount: cartTotal,
        currency: 'INR'
      });

      const { orderId, amount, currency, keyId } = orderResponse.data;

      // Razorpay options
      const options = {
        key: keyId,
        amount: amount,
        currency: currency,
        name: 'Vibe Commerce',
        description: 'E-commerce Purchase',
        order_id: orderId,
        prefill: {
          name: formData.name,
          email: formData.email
        },
        theme: {
          color: '#667eea'
        },
        handler: async function (response) {
          try {
            // Verify payment
            const verifyResponse = await axios.post('/api/payment/verify', {
              razorpay_order_id: response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature
            });

            if (verifyResponse.data.success) {
              // Payment successful, proceed with order
              await onSubmit({
                ...formData,
                paymentId: response.razorpay_payment_id,
                orderId: response.razorpay_order_id
              });
            }
          } catch (error) {
            console.error('Payment verification failed:', error);
            toast.error('Payment verification failed');
          } finally {
            setProcessing(false);
          }
        },
        modal: {
          ondismiss: function() {
            setProcessing(false);
            toast.info('Payment cancelled');
          }
        }
      };

      const razorpay = new window.Razorpay(options);
      razorpay.open();

    } catch (error) {
      console.error('Payment error:', error);
      toast.error('Payment initialization failed');
      setProcessing(false);
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
            <button type="button" className="cancel-btn" onClick={onClose} disabled={processing}>
              Cancel
            </button>
            <button type="submit" className="submit-btn" disabled={loading || processing}>
              {processing ? 'Loading Payment...' : 'Proceed to Pay'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CheckoutModal;
