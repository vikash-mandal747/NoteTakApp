const mongoose = require("mongoose");
require("dotenv").config()

const DBConnection = ()=>{
  mongoose.connect(process.env.MONGO_URI);
  console.log("DB connected");
  

}

module.exports = DBConnection