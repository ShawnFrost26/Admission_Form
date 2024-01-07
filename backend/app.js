const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const adRoutes = require("./routes/admissionRoutes");

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Connect to MongoDB
const mongo_uri =
  "mongodb+srv://sb262202:Admission_Form@admissionform.kacovjn.mongodb.net/candidates?retryWrites=true&w=majority";
mongoose.connect(mongo_uri);

// Routes
app.use("/api", adRoutes);

module.exports = app;
