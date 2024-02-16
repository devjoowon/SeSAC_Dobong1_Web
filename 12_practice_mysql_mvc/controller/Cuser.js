// TODO: 컨트롤러 코드
const User = require("../model/User");
// GET /user
exports.main = (req, res) => {
  res.render("index");
};
// GET /user/signin
exports.get_signin = (req, res) => {
  res.render("signin");
};
// GET /user/signup
exports.get_signup = (req, res) => {
  res.render("signup");
};

// POST /user/signup
// 회원가입 요청
exports.post_signup = (req, res) => {
  console.log("controller", req.body); // form에 있는 {userid, pw, name} 의 객체 형태가 들어올 것임

  User.post_signup(req.body, () => {
    res.end(); // 뷰로 아무것도 안보내줌
  });
};

// POST /user/signin
// 로그인 요청
exports.post_signin = (req, res) => {
  console.log("controller", req.body); // {userid, pw} 이 두개만 들어올 것임

  User.post_signin(req.body, (result) => {
    console.log("controller", result);
    // 로그인 성공시, true
    // 로그인 실패시 (=빈배열), false
    if (result.length > 0) {
      // res.send(isLogin: true, userInfo: result[0]);
      res.send(true);
    } else {
      res.send(false);
    }
  });
};

// POST /user/profile
// 프로필 페이지 요청
exports.post_profile = (req, res) => {
  console.log("req.body", req.body); // {userid}

  User.post_profile(req.body.userid, (result) => {
    console.log(result); // {id, userid, name, pw} model에서 배열의 0번째만 보냈기 때문에 객체로 들어올 것임
    res.render("profile", { data: result });
  });
};

// POST /user/profile/edit
exports.edit_profile = (req, res) => {
  console.log("controller", req.body); // {id, pw, name}

  User.edit_profile(req.body, () => {
    res.end();
  });
};

// POST /user/profile/delete
exports.delete_profile = (req, res) => {
  console.log("controller", req.body); // {id}

  User.delete_profile(req.body.id, () => {
    res.end();
  });
};
