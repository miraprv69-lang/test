import 'dotenv/config'; // <-- THIS IS THE FIX
import express from 'express';
import cors from 'cors';
import pg from 'pg';

// --- Configuration ---
const app = express();
const port = process.env.PORT || 3001;
const { Pool } = pg;

// Create a new pool instance for database connections
// It will automatically use the environment variables (PGUSER, PGHOST, PGDATABASE, PGPASSWORD, PGPORT)
const pool = new Pool({
  ssl: process.env.PGHOST !== 'localhost' ? { rejectUnauthorized: false } : false,
});

// Test database connection on startup
const testDbConnection = async () => {
  let client;
  try {
    client = await pool.connect();
    console.log('Database connection successful!');
    const res = await client.query('SELECT NOW()');
    console.log('Database time:', res.rows[0].now);
    client.release();
    return true;
  } catch (err) {
    if (client) client.release();
    console.error('Failed to connect to the database:', err);
    return false;
  }
};

// --- Middleware ---
// Enable Cross-Origin Resource Sharing for all routes
// This allows your React app (on port 5173) to talk to your backend (on port 3001)
app.use(cors()); 
app.use(express.json()); // Parse incoming JSON request bodies

// --- API Routes ---

// Root welcome message
app.get('/api', (req, res) => {
  res.json({ message: 'Welcome to the Box Smart E-Commerce API!' });
});

// 1. Test Database Connection
app.get('/api/test-db', async (req, res) => {
  let client;
  try {
    client = await pool.connect();
    const result = await client.query('SELECT NOW()');
    client.release();
    res.json({
      message: 'Database connection successful!',
      time: result.rows[0].now,
    });
  } catch (err) {
    if (client) client.release();
    console.error('Database connection test failed:', err);
    res.status(500).json({ message: 'Database connection failed', error: err.message });
  }
});

// 2. GET All Products
// This is the new endpoint your React app will call to get product data
app.get('/api/products', async (req, res) => {
  let client;
  try {
    client = await pool.connect();
    // Fetches all products, ordering by the newest ones first
    const result = await client.query('SELECT * FROM products ORDER BY created_at DESC');
    client.release();
    res.json(result.rows); // Send the array of products back as JSON
  } catch (err) {
    if (client) client.release();
    console.error('Error fetching products:', err);
    res.status(500).json({ message: 'Failed to fetch products', error: err.message });
  }
});

// Add more routes here as we build them...
// app.get('/api/products/:id', ...)
// app.post('/api/orders', ...)
// app.get('/api/admin/orders', ...)


// --- Server Startup ---
const startServer = async () => {
  const dbReady = await testDbConnection();
  
  if (!dbReady) {
    console.error('Shutting down server due to database connection failure.');
    process.exit(1); // Exit the process with an error code if DB connection fails
  }
  
  app.listen(port, () => {
    console.log(`Backend server is running on http://localhost:${port}`);
  });
};

startServer();