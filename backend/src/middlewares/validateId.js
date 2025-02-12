const { param, validationResult } = require("express-validator");

const validateId = [
  param("id")
    .exists()
    .withMessage("ID is required")
    .isInt()
    .withMessage("ID must be a number"),

  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];

module.exports = { validateId };
