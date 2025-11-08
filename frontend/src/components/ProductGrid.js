import './ProductGrid.css';

function ProductGrid({ products, onAddToCart, loading }) {
  return (
    <div>
      <h2 className="section-title">🛍️ Our Products</h2>
      <div className="product-grid">
        {products.map(product => (
          <div key={product._id} className="product-card">
            <img src={product.image} alt={product.name} />
            <div className="product-info">
              <h3>{product.name}</h3>
              <p className="description">{product.description}</p>
              <p className="price">${product.price.toFixed(2)}</p>
              <button 
                className="add-btn"
                onClick={() => onAddToCart(product._id)}
                disabled={loading}
              >
                🛒 Add to Cart
              </button>
            </div>
          </div>
        ))}
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
