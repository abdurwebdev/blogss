const express = require('express');
const app = express();
const db = require('./config/db');
const userModel = require('./models/user');
db();
require('dotenv').config();
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