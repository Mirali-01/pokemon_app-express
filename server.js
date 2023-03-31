// Initialize
const express = require("express");
const pokemon = require("./models/pokemon");
const app = express();
const PORT = 3000;

// Set up engine, if rendering from views folder
app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());

// Get Routes
app.get("/", (req, res) => {
  res.send("Welcome to the Pokemon App!");
});

// Index Route
app.get("/pokemon", (req, res) => {
  res.render("Index", { pokemon: pokemon });
});

// Show Route
app.get("/pokemon/:id", (req, res) => {
  res.send(req.params.id);
});

// Listen
app.listen(PORT, () => {
  console.log(`Listening on PORT ${PORT}`);
});
