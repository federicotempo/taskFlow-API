const { body, validationResult } = require("express-validator");

const validateComment = [
  body("text")
    .trim()
    .isLength({ min: 1 })
    .withMessage("Comment text must be at least 1 character long"),
  body("userId").isInt().withMessage("User ID must be a valid number"),
  body("taskId").isInt().withMessage("Task id must be a valid number"),

  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];

module.exports = { validateComment };
