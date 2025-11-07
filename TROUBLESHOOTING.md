# 🔧 Troubleshooting Guide

## Current Issue: 500 Internal Server Error

This error means the backend server is running but can't connect to MongoDB properly.

## Quick Fixes:

### ✅ Step 1: Restart Backend Server

**Stop the current backend server** (Ctrl+C in the terminal)

Then restart it:
```cmd
cd backend
npm start
```

**Look for this message:**
```
✅ MongoDB Connected Successfully
🚀 Server running on port 5000
```

If you see `❌ MongoDB Connection Error`, continue to Step 2.

---

### ✅ Step 2: Check MongoDB Atlas Settings

Your MongoDB Atlas connection might need these checks:

1. **Network Access (IP Whitelist):**
   - Go to MongoDB Atlas Dashboard
   - Click "Network Access" in left sidebar
   - Add your current IP or use `0.0.0.0/0` (allow all - for development only)

2. **Database User Credentials:**
   - Go to "Database Access"
   - Verify user `adhavrohit37_db_user` exists
   - Password should be `testing1234`

3. **Cluster Status:**
   - Make sure your cluster is running (not paused)

---

### ✅ Step 3: Test Backend Directly

Open a browser and go to:
```
http://localhost:5000/api/products
```

**Expected Result:** You should see JSON data with products

**If you see an error:** The MongoDB connection is failing

---

### ✅ Step 4: Check Backend Terminal Output

Look at your backend terminal for these messages:

**Good Signs ✅:**
```
✅ MongoDB Connected Successfully
🚀 Server running on port 5000
```

**Bad Signs ❌:**
```
❌ MongoDB Connection Error
MongoServerError: bad auth
MongoNetworkError
```

---

## Common MongoDB Atlas Errors:

### Error: "bad auth" or "Authentication failed"
**Fix:** Wrong username/password in `.env` file

### Error: "connection timed out" or "ECONNREFUSED"
**Fix:** IP address not whitelisted in MongoDB Atlas Network Access

### Error: "MongoServerError"
**Fix:** Database cluster might be paused - check Atlas dashboard

---

## Alternative: Use Local MongoDB

If Atlas isn't working, you can use local MongoDB:

1. **Install MongoDB** (if not installed): https://www.mongodb.com/try/download/community

2. **Start MongoDB:**
```cmd
mongod
```

3. **Update backend/.env:**
```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/mock-ecom
```

4. **Restart backend server**

---

## Still Not Working?

Check these:

1. ✅ Backend server is running on port 5000
2. ✅ Frontend is running on port 3000
3. ✅ No firewall blocking connections
4. ✅ MongoDB Atlas cluster is active (not paused)
5. ✅ IP whitelisted in Atlas Network Access

---

## Quick Test Command

Run this in a new terminal to test the backend:
```cmd
curl http://localhost:5000/api/products
```

Or open in browser:
```
http://localhost:5000/api/products
```

If this works, backend is fine. If not, it's a MongoDB connection issue.

---

## Need Help?

1. Check backend terminal for error messages
2. Verify MongoDB Atlas dashboard shows cluster as "Active"
3. Make sure IP address is whitelisted
4. Try using local MongoDB as alternative
