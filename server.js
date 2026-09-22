const express = require("express");
const path = require("path");

const plants = require("./data/plants");

const app = express();
const PORT = 3000;


app.use(express.static(path.join(__dirname, "public")));

app.get("/api/plants", (req, res) => {
  res.json(plants);
});

app.get("/api/plants/:id", (req, res) => {
  const id = parseInt(req.params.id);

  const plant = plants.find((plant) => plant.id === id);

  if (!plant) {
    return res.status(404).json({ error: "Plant not found" });
  }

  res.json(plant);
});

app.get("/plants/:id", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "plant.html"));
});

app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, "public", "404.html"));
});

app.listen(PORT, () => {
  console.log(`Plantopedia is running at http://localhost:${PORT}`);
});