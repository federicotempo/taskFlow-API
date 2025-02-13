const { Router } = require("express");
const { authUser } = require("../controllers/authController");

const authRouter = Router();

authRouter.post("/login", authUser)

module.exports = authRouter;
