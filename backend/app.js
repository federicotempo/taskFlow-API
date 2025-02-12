const express = require("express");
require("dotenv").config();
const cors = require("cors");
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");

const app = express();
const PORT = process.env.PORT || 3000;
const limiter = rateLimit({ windowMs: 60 * 1000, max: 100 });

app.use(cors());
app.use(helmet());
app.use(limiter);
app.use(express.json());

app.get("/", (req, res) => {
  return res.send("Hello world");
});

app.listen(PORT, () => {
  console.log(`TaskFlow is running on http://localhost:${PORT}`);
});
