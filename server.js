// -------------------------- import express
const express = require("express");
const path = require("path");
const cors = require("cors");

require("dotenv").config();

// bring the function "connectDB" from <config/db.js>
const connectDB = require("./config/db");

// connect to database by running function...
connectDB()


// create a port... initially and after .env use process.env
const PORT = process.env.PORT || 5000;

// create a variable "app" and set to "express()"
// -> which is an object and has all kinds of methods on it.
const app = express();

// Static folder to view html page...
app.use(express.static(path.join(__dirname, "public")))

// body-parser-middleware --- Middleware for POST request
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// CORS middleware
app.use(cors({
  origin:["http://localhost:5000", "http://localhost:3000"],
  credentials: true
}))

// to create routes, we use "get", "post", "update", "delete" etc.
// GET request takes "req" and "res" objects as arguments
app.get('/', (req, res)=> {

  // -------------------------- basic home route
  // to send a response
  res.send("Welcome to the RandomIdeas API");

  /*
  - if we change the response to "res.send({ message: 'Hello World })"
  - then automatically the "content-type" changes to "application/json"
  - we do not need to parse it and change it manually that we did with nodeJS- HTTP-Module
  - we have another method on response object that is... .json() which takes only JSON object as an argument
  */
})

const ideasRouter = require('./routes/ideas');

// Insert middlewares
app.use('/api/ideas', ideasRouter);

// -------------------------- create a server and pass the PORT num and pass a callback function
app.listen(PORT, ()=> {
  console.log(`Server is up and running on port: ${PORT}`)
  console.log(`http://localhost:${PORT}`)
});