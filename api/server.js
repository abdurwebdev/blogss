const express = require('express');
const app = express();
const db = require('./config/db');
const cors = require('cors');
const userModel = require('./models/user');
db();
require('dotenv').config();
app.use(cors({
  origin: 'https://blogss-8yf8.vercel.app',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}));

app.use(express.json());
app.get("/",(req,res)=>{
  res.send("hello")
})

app.post('/api/register',async (req,res)=>{
  let {name} = req.body;
  let createdUser = await userModel.create({
    name
  })
})

app.listen(3000);