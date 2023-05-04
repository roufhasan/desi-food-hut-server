const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;

const chefs = require("./data/chefsData.json");

app.use(cors());

app.get("/", (req, res) => {
  res.send("Desi Food Hut Is Running");
});

app.get("/chefs", (req, res) => {
  res.send(chefs);
});

app.get("/chefs/:id", (req, res) => {
  const id = req.params.id;
  console.log(id);
  const selectedChefs = chefs.find((c) => c.id === id);
  res.send(selectedChefs);
});

app.listen(port, () => {
  console.log(`Desi Food Hut API is running on port ${port}`);
});
