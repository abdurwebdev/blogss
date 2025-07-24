const express = require('express');
const app = express();
const db = require('./config/db');
const userModel = require('./models/user');
require('dotenv').config();
const cors = require('cors');
app.use(cors({
  origin: 'https://blogss-8722.vercel.app',
  credentials: true
}));

// ✅ Connect to DB
db();

// ✅ Middleware to parse JSON body
app.use(express.json());

// ✅ Basic test route
app.get("/", (req, res) => {
  res.send("hellosssssssss");
});

app.get('/home',(req,res)=>{
  res.send('Home');
})

// ✅ POST /api/register route
app.post('/api/register', async (req, res) => {
  try {
    const { name } = req.body;

    // Optional: basic validation
    if (!name) {
      return res.status(400).json({ message: "Name is required" });
    }

    const createdUser = await userModel.create({ name });

    res.status(201).json({
      message: "User created successfully",
      user: createdUser
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Something went wrong", error: err.message });
  }
});

module.exports = app;
