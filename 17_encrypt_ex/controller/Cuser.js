const models = require("../models/index");
const bcrypt = require("bcrypt");
const saltRounds = 10;

// GET /user/register
exports.getRegister = (req, res) => {
  res.render("user/register");
};

// POST /user/register
exports.postRegister = (req, res) => {
  models.User.create({
    name: req.body.name,
    user_id: req.body.id,
    pw: req.body.pw,
  }).then((result) => {
    console.log("회원가입 POST 요청 :", result), res.send(result);
  });
};
