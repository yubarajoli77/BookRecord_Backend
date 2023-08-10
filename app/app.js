const express = require("express");
const cors = require('cors');
const app = express();
const user = require('../router/user.js');
const {connect} = require("../db/db.js");

// use middleware to form our contract for incoming json payloads only.
app.use(express.json());

//use middleware for url encoding
app.use(express.urlencoded({extended: true}));

//use middleware to handle CORS policy
app.use(cors());

app.get("/",(req, res, next)=>{
  res.status(200).json({message:"Server is up and running"})
})

//Routers
app.use('/users',user);

//Error hrndle
app.use((req, res, next)=>{
  const error = new Error("Not Found");
  error.status = 404;
  next(error);
})

app.use((error, req, res, next)=>{
  res.status(error.status || 500).json({message: error.message, status: error.status})
})

connect();

module.exports = app;
