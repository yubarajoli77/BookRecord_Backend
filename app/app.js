const express = require("express");
const cors = require('cors');
const app = express();

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

//Error hrndle
app.use((req, res, next)=>{
  const error = new Error("Not Found");
  error.status = 404;
  next(error);
})

app.use((error, req, res, next)=>{
  res.status(error.status || 500).json({message: error.message, status: error.status})
})

module.exports = app;
