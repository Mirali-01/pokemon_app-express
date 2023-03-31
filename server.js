// Initialize
const express = require("express");
const pokemon = require("./models/pokemon");
const app = express();
const PORT = 3000;

// Get
app.get("/", (req, res) => {
  res.send("Welcome to the Pokemon App!");
});

app.get("/pokemon", (req, res) => {
  res.send(pokemon);
});

// Listen
app.listen(PORT, () => {
  console.log(`Listening on PORT ${PORT}`);
});
