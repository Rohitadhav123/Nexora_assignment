import axios from 'axios';
import { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Cart from './components/Cart';
import CheckoutModal from './components/CheckoutModal';
import ProductGrid from './components/ProductGrid';
import ReceiptModal from './components/ReceiptModal';

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({ items: [], total: 0 });
  const [showCart, setShowCart] = useState(false);
  const [showCheckout, setShowCheckout] = useState(false);
  const [receipt, setReceipt] = useState(null);
  const [loading, setLoading] = useState(false);

  // Fetch products
  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);

  const fetchProducts = async () => {
    try {
      const res = await axios.get('/api/products');
      setProducts(res.data);
    } catch (error) {
      console.error('Failed to load products:', error);
      toast.error('Failed to load products. Please check if backend is running.');
    }
  };

  const fetchCart = async () => {
    try {
      const res = await axios.get('/api/cart');
      setCart(res.data);
    } catch (error) {
      console.error('Failed to load cart:', error);
      // Don't show toast for cart errors on initial load
    }
  };

  const addToCart = async (productId) => {
    setLoading(true);
    try {
      await axios.post('/api/cart', { productId, quantity: 1 });
      await fetchCart();
      toast.success('Added to cart!');
    } catch (error) {
      toast.error('Failed to add to cart');
    } finally {
      setLoading(false);
    }
  };

  const removeFromCart = async (itemId) => {
    try {
      await axios.delete(`/api/cart/${itemId}`);
      await fetchCart();
      toast.info('Removed from cart');
    } catch (error) {
      toast.error('Failed to remove item');
    }
  };

  const handleCheckout = async (customerData) => {
    setLoading(true);
    try {
      const res = await axios.post('/api/checkout', customerData);
      setReceipt(res.data);
      setShowCheckout(false);
      await fetchCart();
      toast.success('Order placed successfully!');
    } catch (error) {
      toast.error(error.response?.data?.message || 'Checkout failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <header className="header">
        <div className="container">
          <h1>🛒 Vibe Commerce</h1>
          <button 
            className="cart-btn"
            onClick={() => setShowCart(!showCart)}
          >
            Cart ({cart.items.length})
          </button>
        </div>
      </header>

      <main className="container">
        {!showCart ? (
          <ProductGrid 
            products={products} 
            onAddToCart={addToCart}
            loading={loading}
          />
        ) : (
          <Cart 
            cart={cart}
            onRemove={removeFromCart}
            onCheckout={() => setShowCheckout(true)}
            onContinueShopping={() => setShowCart(false)}
          />
        )}
      </main>

      {showCheckout && (
        <CheckoutModal 
          onClose={() => setShowCheckout(false)}
          onSubmit={handleCheckout}
          loading={loading}
        />
      )}

      {receipt && (
        <ReceiptModal 
          receipt={receipt}
          onClose={() => setReceipt(null)}
        />
      )}

      <ToastContainer position="bottom-right" autoClose={3000} />
    </div>
  );
}

export default App;
