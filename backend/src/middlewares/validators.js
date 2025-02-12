const { body, validationResult } = require("express-validator");

const validateTask = [
  body("title").trim().notEmpty().withMessage("Title is required"),
  body("description")
    .trim()
    .optional(),
  body("dueDate")
    .optional()
    .isISO8601()
    .toDate()
    .withMessage("Due Date must be a valid ISO-8601 date"),
  body("visibility")
    .optional()
    .isIn(["PUBLIC", "PRIVATE"])
    .withMessage('Visibility must be either "PUBLIC" or "PRIVATE"'),

  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];

module.exports = { validateTask };
