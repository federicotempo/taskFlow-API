const { Router } = require("express");
const { authUser, registerUser } = require("../controllers/authController");
const { validateRegister } = require("../middlewares/validateRegister");

const authRouter = Router();

authRouter.post("/login", authUser);

authRouter.post("/register", validateRegister, registerUser);

module.exports = authRouter;
