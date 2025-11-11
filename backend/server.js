// Use require('dotenv').config() to load environment variables from .env
require('dotenv').config();
const express = require('express');
const cors =require('cors');
const { Pool } = require('pg'); // Import the pg Pool

// --- Server Setup ---
const app = express();
const PORT = process.env.PORT || 3001; // Backend runs on a different port

// --- Database Connection ---
// The Pool will use the environment variables (PGHOST, PGUSER, PGDATABASE, PGPASSWORD, PGPORT)
// We loaded from the .env file.
const pool = new Pool();

// --- Middleware ---
// Enable CORS (Cross-Origin Resource Sharing)
// This allows your React app (e.g., on localhost:5173) to make requests to this server (on localhost:3001)
app.use(cors());

// Enable Express to parse JSON in request bodies
app.use(express.json());

// --- API Routes ---

// A simple test route to check database connection
app.get('/api/test-db', async (req, res) => {
  try {
    const result = await pool.query('SELECT NOW()'); // Simple query to check connection
    res.json({
      message: 'Database connection successful!',
      time: result.rows[0].now,
    });
  } catch (error) {
    console.error('Database connection error:', error);
    res.status(500).json({ error: 'Failed to connect to database.' });
  }
});

/**
 * GET /api/products
 * A placeholder for fetching all products.
 * We will implement this fully once you create your 'products' table.
 */
app.get('/api/products', async (req, res) => {
  try {
    // TODO: When your DB is ready, uncomment this and create the 'products' table
    // const result = await pool.query('SELECT * FROM products');
    // res.json(result.rows);

    // For now, send back mock data
    res.json([
      { id: 1, name: 'Mock Product 1', price: 19.99, image_url: 'https://placehold.co/600x400/eeeeee/333333?text=Product+1' },
      { id: 2, name: 'Mock Product 2', price: 29.99, image_url: 'https://placehold.co/600x400/eeeeee/333333?text=Product+2' },
      { id: 3, name: 'Mock Product 3', price: 39.99, image_url: 'https://placehold.co/600x400/eeeeee/333333?text=Product+3' },
    ]);

  } catch (error) {
    console.error('Error fetching products:', error);
    res.status(500).json({ error: 'Failed to fetch products.' });
  }
});

// --- Start the Server ---
app.listen(PORT, () => {
  console.log(`Backend server is running on http://localhost:${PORT}`);
});