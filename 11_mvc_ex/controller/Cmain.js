const Login = require("../model/Login");

// GET /
exports.main = (req, res) => {
  res.render("index");
};

// POST /login
exports.login = (req, res) => {
  console.log(Login.loginInfo());
  // 서버의 계정정보와, 클라이언트의 계정정보가 일치하는지
  const { id: clientId, password: clientPw } = req.body;
  if (clientId === Login.loginInfo().id && clientPw === Login.loginInfo().pw) {
    res.send({
      userInfo: req.body,
      isSuccess: true,
    });
  } else {
    res.send({ isSuccess: false });
  }
};
