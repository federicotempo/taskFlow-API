const jwt = require("jsonwebtoken");
const { promisify } = require("util");
require("dotenv").config();

const signAsync = promisify(jwt.sign);

const generateToken = async (user) => {
  try {
    return await signAsync(
      { id: user.id, email: user.email, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );
  } catch (error) {
    throw new Error("Error generating the token");
  }
};

module.exports = generateToken;
