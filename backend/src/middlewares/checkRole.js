const checkRole = () => {
  return (req, res, next) => {
    const role = "ADMIN";
    if (req.user && req.user.role === role) {
      return next();
    } else {
      return res.status(403).json({ message: "Forbidden: Insufficient role" });
    }
  };
};

module.exports = { checkRole };
