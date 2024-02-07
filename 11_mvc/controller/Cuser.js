const User = require("../model/User");

// GET /user
exports.user = (req, res) => {
  res.render("user", { userInfo: User.userInfo() });
};
