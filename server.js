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

app.get("/pokemon", (req, res) => {
  res.render("Index", { pokemon: pokemon });
});

// Listen
app.listen(PORT, () => {
  console.log(`Listening on PORT ${PORT}`);
});
