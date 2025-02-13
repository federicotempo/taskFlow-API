const { Router } = require("express");
const { authUser, registerUser } = require("../controllers/authController");

const authRouter = Router();

authRouter.post("/login", authUser)

authRouter.post("/register", registerUser)

module.exports = authRouter;
