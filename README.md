# 🛒 Mock E-Commerce Cart - Vibe Commerce

A full-stack e-commerce cart application built with the MERN stack (MongoDB, Express, React, Node.js) for screening purposes.

## 📋 Features

✅ **Backend REST APIs:**
- `GET /api/products` - Fetch all products (auto-seeds 8 sample products)
- `POST /api/cart` - Add product to cart (creates or updates quantity)
- `DELETE /api/cart/:id` - Remove item from cart
- `GET /api/cart` - Get cart items with computed total
- `POST /api/checkout` - Process checkout and return receipt

✅ **Frontend Features:**
- Responsive product grid with "Add to Cart" functionality
- Cart view with quantity display and remove option
- Live total calculation
- Checkout form (name & email)
- Receipt modal showing order confirmation
- Toast notifications for user feedback
- Beautiful gradient UI with smooth animations

✅ **Bonus Features:**
- ✅ Cart persisted to MongoDB
- ✅ Error handling with toast notifications
- ✅ Responsive design for mobile/tablet/desktop
- ✅ Clean and beginner-friendly code structure

## 🚀 Quick Start

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (running locally or cloud instance)

### Installation & Setup

1. **Clone the repository**
```bash
git clone <your-repo-url>
cd nexora_assignment
```

2. **Setup Backend**
```bash
cd backend
npm install
```

Create a `.env` file (already included):
```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/mock-ecom
```

Start the backend server:
```bash
npm start
# Or for development with auto-reload:
npm run dev
```

Backend will run on `http://localhost:5000`

3. **Setup Frontend**
```bash
cd frontend
npm install
npm start
```

Frontend will run on `http://localhost:3000`

## 📁 Project Structure

```
nexora_assignment/
├── backend/
│   ├── models/
│   │   ├── Product.js          # Product schema
│   │   └── Cart.js             # Cart schema
│   ├── routes/
│   │   ├── products.js         # Product endpoints
│   │   ├── cart.js             # Cart endpoints
│   │   └── checkout.js         # Checkout endpoint
│   ├── server.js               # Express app setup
│   ├── package.json
│   └── .env
│
├── frontend/
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── components/
│   │   │   ├── ProductGrid.js   # Product listing
│   │   │   ├── Cart.js          # Cart view
│   │   │   ├── CheckoutModal.js # Checkout form
│   │   │   └── ReceiptModal.js  # Order receipt
│   │   ├── App.js               # Main app component
│   │   ├── index.js
│   │   └── *.css                # Component styles
│   └── package.json
│
└── README.md
```

## 🎯 Usage Flow

1. Browse products on the homepage
2. Click "Add to Cart" on any product
3. View cart by clicking "Cart" button in header
4. Adjust quantities or remove items
5. Click "Proceed to Checkout"
6. Enter your name and email
7. Click "Place Order"
8. View your order receipt with order ID and timestamp

## 🛠️ Tech Stack

**Backend:**
- Node.js
- Express.js
- MongoDB with Mongoose
- CORS
- dotenv

**Frontend:**
- React 18
- Axios (API calls)
- React Toastify (notifications)
- CSS3 (with Flexbox & Grid)

## 📝 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/products` | Get all products |
| GET | `/api/cart` | Get cart items with total |
| POST | `/api/cart` | Add/update cart item |
| DELETE | `/api/cart/:id` | Remove cart item |
| POST | `/api/checkout` | Process checkout |

## 🎨 Design Features

- Modern gradient background (purple theme)
- Card-based UI with hover effects
- Smooth animations and transitions
- Responsive grid layout
- Modal overlays for checkout and receipt
- Toast notifications for feedback

## 🔧 Development Notes

- Backend auto-seeds 8 sample products if database is empty
- Frontend uses proxy to connect to backend
- Cart is persisted in MongoDB
- All API errors are handled with user-friendly messages
- No real payment processing (mock checkout only)

## 📱 Responsive Design

The application is fully responsive and works seamlessly on:
- 📱 Mobile devices (320px+)
- 📱 Tablets (768px+)
- 💻 Desktops (1024px+)

## 🙏 Acknowledgments

Built for Vibe Commerce screening assignment with ❤️

---

**Note:** This is a mock application for demonstration purposes. No real payments are processed.
