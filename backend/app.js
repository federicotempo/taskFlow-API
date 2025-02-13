const express = require("express");
require("dotenv").config();
const cors = require("cors");
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");
const jsonErrorHandler = require("./src/middlewares/jsonErrorHandler");
const passport = require("./config/passport")

const app = express();
const PORT = process.env.PORT || 3000;
const limiter = rateLimit({ windowMs: 60 * 1000, max: 100 });

app.use(cors());
app.use(helmet());
app.use(limiter);
app.use(express.json());
app.use(jsonErrorHandler);
app.use(passport.initialize())

const authRoutes = require("./src/routes/authRoutes");
const taskRoutes = require("./src/routes/taskRoutes");
const commentRoutes = require("./src/routes/commentRoutes");

app.use("/api/auth", authRoutes);
app.use("/api/tasks", taskRoutes);
app.use("/api/comments", commentRoutes);

app.listen(PORT, () => {
  console.log(`TaskFlow is running on http://localhost:${PORT}`);
});
