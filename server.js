// Initialize
const express = require("express");
const app = express();
const PORT = 3000;

// Get
app.get("/", (req, res) => {
  res.send("Welcome to the Pokemon App!");
});

// Listen
app.listen(PORT, () => {
  console.log(`Listening on PORT ${PORT}`);
});
