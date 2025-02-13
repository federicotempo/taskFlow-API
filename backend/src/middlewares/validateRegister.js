const { body, validationResult } = require("express-validator");

const validateRegister = [
  body("name").notEmpty().withMessage("Name is required"),
  body("email")
  .notEmpty().withMessage("Email is required")
  .isEmail().withMessage("Invalid email format").normalizeEmail(),
  body("password")
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 characters long"),
  body("role")
    .optional()
    .isIn(["USER", "ADMIN"])
    .withMessage('Role must be either "USER" or "ADMIN"'),

  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];

module.exports = { validateRegister };
