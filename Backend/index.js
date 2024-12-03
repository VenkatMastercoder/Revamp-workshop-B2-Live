const express = require("express");

// Instance of Http Server
const app = express();

// GET : http://localhost:3000/app
app.get("/app", (req, res) => {
  // 1. Data from Frontend

  // 2. DB LOGIC

  // 3. ANY DATA TO FRONTEND
  res.send("Hello world");
});

// GET : http://localhost:3000/
app.get("/", (req, res) => {
  // 1. Data from Frontend

  // 2. DB LOGIC

  // 3. ANY DATA TO FRONTEND
  res.send("API WORKING");
});

app.listen(3000);
