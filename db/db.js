const mongoose = require('mongoose');
require("dotenv").config();

const connect = ()=>{
  mongoose.connect(process.env.mongo).then(res=>{
    console.log("MongoDB is up and running");
  });
}

module.exports = {connect};
