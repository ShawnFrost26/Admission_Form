const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
// const routes = require("./routes");

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Connect to MongoDB
const mongo_uri = mongoose.connect(
  "mongodb+srv://sb262202:Admission_Form@admissionform.kacovjn.mongodb.net/candidates?retryWrites=true&w=majority"
);

// Routes
// app.use('/api', routes);

module.exports = app;
