const mongoose = require('mongoose');
require("dotenv").config();
const User = require('../model/user.js');

const connect = ()=>{
  mongoose.connect(process.env.mongo).then(res=>{
    console.log("MongoDB is up and running");
  });
}

const disconnect = ()=>{
  mongoose.connection.close().then(res=>{
    console.log('MongoDB is disconnected!!!');
  });
}

const findUser = async (obj) =>{
  return await User.findOne(obj);
};

const saveUser = async (user) =>{
  return await user.save();
};

module.exports = {connect, disconnect, findUser, saveUser};
