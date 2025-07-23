const mongoose = require('mongoose');
require('dotenv').config();
const db = () =>{
  mongoose.connect(process.env.MONGO_URI).then(function(){
    console.log("Connected");
  })
  .catch(function(){
    console.log("Not Connected");
  })
}

module.exports = db;