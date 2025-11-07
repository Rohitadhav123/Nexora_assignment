import './ReceiptModal.css';

function ReceiptModal({ receipt, onClose }) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content receipt-modal" onClick={(e) => e.stopPropagation()}>
        <div className="receipt-header">
          <h2>✅ Order Confirmed!</h2>
          <p className="order-id">Order ID: {receipt.orderId}</p>
        </div>

        <div className="receipt-body">
          <div className="customer-info">
            <p><strong>Customer:</strong> {receipt.customerName}</p>
            <p><strong>Email:</strong> {receipt.customerEmail}</p>
            <p><strong>Date:</strong> {new Date(receipt.timestamp).toLocaleString()}</p>
          </div>

          <div className="receipt-items">
            <h3>Order Items</h3>
            {receipt.items.map((item, index) => (
              <div key={index} className="receipt-item">
                <span>{item.name} x {item.quantity}</span>
                <span>${item.subtotal}</span>
              </div>
            ))}
          </div>

          <div className="receipt-total">
            <h3>Total: ${receipt.total}</h3>
          </div>
        </div>

        <button className="close-receipt-btn" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
}

export default ReceiptModal;
