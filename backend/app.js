const express = require("express");
require("dotenv").config();

const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  return res.send("Hello world");
});

app.listen(PORT, () => {
  console.log(`TaskFlow is running on http://localhost:${PORT}`);
});
