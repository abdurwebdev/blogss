const express = require('express');
const app = express();
const db = require('./config/db');
const userModel = require('./models/user');
require('dotenv').config();
const cors = require('cors');

// ✅ Connect to DB
db();

// ✅ Middleware
app.use(cors({
  origin: '*',  // Or replace '*' with your frontend URL for stricter security
  credentials: true
}));
app.use(express.json()); // For parsing application/json

// ✅ Test Routes
app.get("/", (req, res) => {
  res.send("Backend is working ✅");
});

app.get("/home", (req, res) => {
  res.send("Home");
});

app.get("/homes", (req, res) => {
  res.send("Homesssssssss");
});

// ✅ POST /api/register
app.post('/api/register', async (req, res) => {
  try {
    const { name } = req.body;
    if (!name) return res.status(400).json({ message: "Name is required" });

    const createdUser = await userModel.create({ name });

    res.status(201).json({
      message: "User created successfully",
      user: createdUser
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error", error: error.message });
  }
});

// ✅ Required for Vercel deployment
module.exports = app;
