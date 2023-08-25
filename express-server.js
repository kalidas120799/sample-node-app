const express = require("express");
const PORT = 8765;
const app = express();

app.get("/", (req, res) => res.send("okay"));

app.listen((PORT), () => console.log(`App running in http://localhost:${PORT}`));