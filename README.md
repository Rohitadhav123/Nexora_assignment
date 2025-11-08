# 🛒 Vibe Commerce - Full-Stack E-Commerce Cart

A modern, full-stack e-commerce shopping cart application built with the **MERN Stack** (MongoDB, Express.js, React, Node.js) featuring **Razorpay payment integration** for seamless online transactions.

---

## 📋 Table of Contents
- [Features](#-features)
- [Screenshots](#-screenshots)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Setup Instructions](#-setup-instructions)
- [API Endpoints](#-api-endpoints)
- [Payment Integration](#-payment-integration)
- [How It Works](#-how-it-works)

---

## ✨ Features

### 🛍️ Shopping Experience
- **Product Grid**: Browse 8 sample products with images, prices, and descriptions
- **Smart Cart Management**: Direct +/− buttons on product cards (no separate "Add to Cart" button)
- **Real-time Updates**: Cart count updates instantly in the header
- **Quantity Controls**: Increase or decrease quantities directly from product cards or cart view
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices

### � Payment & Checkout
- **Razorpay Integration**: Secure payment gateway (Test Mode)
- **Payment Verification**: Server-side signature verification for security
- **Order Receipt**: Detailed receipt with payment ID and order details
- **Print Receipt**: Print-friendly order confirmation

### 🎨 User Interface
- **Beautiful Gradients**: Modern purple gradient theme throughout
- **Smooth Animations**: Hover effects, transitions, and loading states
- **Toast Notifications**: Real-time feedback for user actions
- **Modal Dialogs**: Elegant checkout and receipt modals

### 💾 Backend Features
- **RESTful APIs**: Clean and organized API structure
- **MongoDB Integration**: Persistent cart and product storage
- **MVC Architecture**: Separated controllers, routes, and models
- **Error Handling**: Comprehensive error handling and validation

---

## 📸 Screenshots

### 1. Product Grid
![Product Grid](frontend/public/Screenshot%202025-11-08%20211348.png)
*Browse products with direct cart controls - click + to add items*

### 2. Shopping Cart
![Shopping Cart](frontend/public/Screenshot%202025-11-08%20211424.png)
*View cart items, adjust quantities, and see real-time totals*

### 3. Checkout Form
![Checkout Form](frontend/public/Screenshot%202025-11-08%20211442.png)
*Enter customer details before proceeding to payment*

### 4. Razorpay Payment
![Payment Gateway](frontend/public/Screenshot%202025-11-08%20211508.png)
*Secure Razorpay payment gateway with multiple payment options*

### 5. Order Receipt
![Order Receipt](frontend/public/Screenshot%202025-11-08%20211542.png)
*Detailed order confirmation with payment ID and receipt*

---

## 🛠 Tech Stack

### Frontend
- **React 18.2.0** - UI library
- **Axios 1.5.0** - HTTP client
- **React Toastify 9.1.3** - Toast notifications
- **CSS3** - Custom styling with gradients and animations

### Backend
- **Node.js 20.17.0** - JavaScript runtime
- **Express 4.18.2** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose 7.5.0** - MongoDB ODM
- **Razorpay SDK** - Payment gateway integration
- **Crypto** - Payment signature verification

### DevOps
- **CORS** - Cross-origin resource sharing
- **dotenv** - Environment variable management

---

## 📁 Project Structure

```
nexora_assignment/
│
├── backend/                          # Backend Node.js application
│   ├── controllers/                  # Business logic
│   │   ├── productController.js      # Product operations
│   │   ├── cartController.js         # Cart CRUD operations
│   │   ├── checkoutController.js     # Order processing
│   │   └── paymentController.js      # Razorpay integration
│   │
│   ├── models/                       # MongoDB schemas
│   │   ├── Product.js                # Product model
│   │   └── Cart.js                   # Cart model
│   │
│   ├── routes/                       # API routes
│   │   ├── products.js               # GET /api/products
│   │   ├── cart.js                   # Cart endpoints
│   │   ├── checkout.js               # POST /api/checkout
│   │   └── payment.js                # Payment endpoints
│   │
│   ├── .env                          # Environment variables
│   ├── server.js                     # Express server entry point
│   └── package.json                  # Backend dependencies
│
├── frontend/                         # React application
│   ├── public/                       # Static assets
│   │   └── screenshots/              # Project screenshots
│   │
│   ├── src/
│   │   ├── components/               # React components
│   │   │   ├── ProductGrid.js        # Product listing
│   │   │   ├── Cart.js               # Cart view
│   │   │   ├── CheckoutModal.js      # Checkout form
│   │   │   └── ReceiptModal.js       # Order receipt
│   │   │
│   │   ├── App.js                    # Main app component
│   │   ├── App.css                   # Global styles
│   │   └── index.js                  # React entry point
│   │
│   └── package.json                  # Frontend dependencies
│
└── README.md                         # This file
```

---

## 🚀 Setup Instructions

### Prerequisites
Before starting, make sure you have:
- **Node.js** (v14 or higher) - [Download](https://nodejs.org/)
- **MongoDB** (Local or Atlas) - [Download](https://www.mongodb.com/try/download/community)
- **Git** - [Download](https://git-scm.com/)

### Step 1: Clone the Repository
```bash
git clone https://github.com/Rohitadhav123/Nexora_assignment.git
cd nexora_assignment
```

### Step 2: Backend Setup

#### Install Dependencies
```bash
cd backend
npm install
```

#### Configure Environment Variables
Create a `.env` file in the `backend` folder:
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/mock-ecom

# Razorpay Test Credentials
RAZORPAY_KEY_ID=rzp_test_RdIARPjQOUAWlI
RAZORPAY_KEY_SECRET=zcKXYwRcEikB459fHVaDTJpq
```

#### Start MongoDB
Make sure MongoDB is running on your machine:
```bash
# For Windows (if installed as service)
net start MongoDB

# For Mac/Linux
mongod
```

#### Start Backend Server
```bash
node server.js
```

You should see:
```
🚀 Server running on port 5000
📡 API available at http://localhost:5000/api
✅ MongoDB Connected Successfully
```

### Step 3: Frontend Setup

Open a new terminal window:

#### Install Dependencies
```bash
cd frontend
npm install
```

#### Start React App
```bash
npm start
```

The app will open at: **http://localhost:3000**

---

## 🔌 API Endpoints

### Products
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/products` | Fetch all products |
| POST | `/api/products/reset` | Reset products with Unsplash images |

### Cart
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/cart` | Get cart items with total |
| POST | `/api/cart` | Add item to cart |
| DELETE | `/api/cart/:id` | Remove item from cart |

### Payment
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/payment/create-order` | Create Razorpay order |
| POST | `/api/payment/verify` | Verify payment signature |

### Checkout
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/checkout` | Process order & clear cart |

---

## 💳 Payment Integration

### Razorpay Test Mode

The application uses **Razorpay Test Mode** for safe payment testing.

#### Test Cards (Always Successful)
```
Card Number: 4111 1111 1111 1111
CVV: Any 3 digits (e.g., 123)
Expiry: Any future date (e.g., 12/25)
```

#### Test UPI
```
UPI ID: success@razorpay  (Success)
UPI ID: failure@razorpay  (Failure)
```

#### How Payment Works
1. User adds items to cart
2. Clicks "Proceed to Checkout"
3. Enters name and email
4. Clicks "Proceed to Pay"
5. Razorpay modal opens
6. User enters test card details
7. Payment is verified on backend
8. Order is confirmed and receipt is displayed

---

## 🎯 How It Works

### 1. **Product Browsing**
- When you open the app, it fetches 8 sample products from MongoDB
- If no products exist, the backend auto-seeds them with Unsplash images
- Each product shows: Image, Name, Description, Price (₹), and +/− buttons

### 2. **Adding to Cart**
- Click **+** button on any product
- Quantity counter appears (starts from 0)
- Cart count in header updates immediately: `Cart (1)`
- Click **+** again to increase quantity: `Cart (2)`
- Cart data is saved to MongoDB

### 3. **Managing Cart**
- Click **−** button to decrease quantity
- When quantity reaches 1, clicking **−** removes the item
- Click **Cart (N)** in header to view full cart
- In cart view: Adjust quantities, remove items, see totals

### 4. **Checkout Process**
- Click **"Proceed to Checkout"** in cart
- Enter your name and email
- Click **"Proceed to Pay"**
- Razorpay payment modal opens

### 5. **Payment**
- Choose payment method (Card/UPI/NetBanking)
- Enter test card: `4111 1111 1111 1111`
- Payment is processed and verified
- Backend checks signature for security

### 6. **Order Confirmation**
- Receipt modal shows:
  - Order ID (from Razorpay)
  - Customer details
  - Items purchased
  - Total amount (₹)
  - Payment ID
- Options: Print Receipt or Close & Continue Shopping
- Cart is automatically cleared

---

## 🎨 Key Features Explained

### Direct Cart Manipulation
Unlike traditional e-commerce sites with "Add to Cart" buttons, this app uses **direct +/− controls**:
- **Benefit**: Faster shopping experience
- **UX**: Counter starts at 0, shows actual cart quantity
- **Smart Logic**: Minus button decreases quantity or removes item when qty = 1

### Real-time Updates
- All cart operations update the header count instantly
- Toast notifications confirm every action
- No page reloads needed

### Responsive Design
- **Desktop**: 4-column product grid
- **Tablet**: 2-3 columns
- **Mobile**: 1 column with full-width cards
- Touch-friendly buttons and controls

### Currency
- All prices displayed in **₹ (Indian Rupees)**
- Consistent throughout: Product cards, Cart, Receipt

---

## 🧪 Testing Guide

### Test the Complete Flow

1. **Start both servers** (Backend on :5000, Frontend on :3000)
2. **Browse products** - See 8 products with images
3. **Add items**: Click + on 2-3 products
4. **Check cart**: Click "Cart (N)" in header
5. **Adjust quantities**: Use +/− in cart view
6. **Proceed to checkout**: Enter test details
7. **Make payment**: Use test card `4111 1111 1111 1111`
8. **View receipt**: See order confirmation with payment ID
9. **Print receipt**: Test print functionality
10. **Continue shopping**: Cart should be empty

---

## � Troubleshooting

### Backend won't start
```bash
# Check if port 5000 is already in use
netstat -ano | findstr :5000

# Kill the process (Windows)
taskkill /F /PID <process-id>
```

### MongoDB connection error
- Make sure MongoDB is running
- Check MONGODB_URI in .env file
- For local MongoDB: `mongodb://localhost:27017/mock-ecom`

### Images not loading
```bash
# Reset products with fresh Unsplash images
curl -X POST http://localhost:5000/api/products/reset
```

### Payment gateway issues
- Verify Razorpay keys in .env
- Check internet connection (Razorpay SDK loads from CDN)
- Use test mode credentials only

---

## 📝 Environment Variables

| Variable | Description | Example |
|----------|-------------|---------|
| PORT | Backend server port | 5000 |
| MONGODB_URI | MongoDB connection string | mongodb://localhost:27017/mock-ecom |
| RAZORPAY_KEY_ID | Razorpay test key ID | rzp_test_xxx |
| RAZORPAY_KEY_SECRET | Razorpay test secret | zcKXYwRcE... |

---

## 🌟 Features Highlights

✅ **MVC Architecture** - Clean separation of concerns  
✅ **Payment Gateway** - Razorpay integration with signature verification  
✅ **Direct Cart Controls** - +/− buttons on product cards  
✅ **Real-time Updates** - Live cart count and totals  
✅ **Responsive UI** - Works on all devices  
✅ **Toast Notifications** - User-friendly feedback  
✅ **Modal Dialogs** - Checkout and receipt modals  
✅ **Print Receipt** - Printer-friendly order confirmation  
✅ **Currency Support** - Indian Rupees (₹)  
✅ **Error Handling** - Comprehensive error management  
✅ **Secure Payments** - HMAC SHA256 signature verification  

---

## 👤 Author

**Rohit Adhav**  
GitHub: [@Rohitadhav123](https://github.com/Rohitadhav123)

---

## 📄 License

This project is created for educational and screening purposes.

---

## 🙏 Acknowledgments

- **Unsplash** - Product images
- **Razorpay** - Payment gateway
- **MongoDB** - Database
- **React** - Frontend framework
- **Express** - Backend framework

---

**Made with ❤️ for Vibe Commerce**
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
