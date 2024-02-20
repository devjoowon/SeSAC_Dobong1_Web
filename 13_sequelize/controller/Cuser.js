// TODO: 컨트롤러 코드
// const models = require("../models/index");
const models = require("../models"); // index 생략 가능

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
  // [before sequelize]
  //   console.log("controller", req.body); // form에 있는 {userid, pw, name} 의 객체 형태가 들어올 것임
  //   User.post_signup(req.body, () => {
  //     res.end(); // 뷰로 아무것도 안보내줌
  //   });
  // [after sequelize]
  // `INSERT INTO user(userid, name, pw) VALUES("${req.body.userid}", "${req.body.name}", "${req.body.pw}")`
  models.User.create({
    userid: req.body.userid,
    name: req.body.name,
    pw: req.body.pw,
  }).then((result) => {
    console.log("회원가입 요청", result);
    res.end();
  });
};

// POST /user/signin
// 로그인 요청
exports.post_signin = (req, res) => {
  // [before sequelize]
  //   console.log("controller", req.body); // {userid, pw} 이 두개만 들어올 것임
  //   User.post_signin(req.body, (result) => {
  //     console.log("controller", result);
  //     // 로그인 성공시, true
  //     // 로그인 실패시 (=빈배열), false
  //     if (result.length > 0) {
  //       // res.send(isLogin: true, userInfo: result[0]);
  //       res.send(true);
  //     } else {
  //       res.send(false);
  //     }
  //   });
  // [after sequelize]
  // `SELECT * FROM user WHERE userid = "${req.body.userid}" and pw = "${req.body.pw}" LIMIT 1`
  // findOne은 LIMIT 없어도 ok
  models.User.findOne({
    where: {
      userid: req.body.userid,
      pw: req.body.pw,
    },
  }).then((result) => {
    console.log("로그인 요청", result);

    // result: findOne을 이용해서 찾은 결과를 반환 or 데이터를 못찾았다면 null 반환
    // 따라서 result는 객체{} 아니면 null
    if (result) {
      res.send(true);
    } else {
      res.send(false);
    }
  });
};

// POST /user/profile
// 프로필 페이지 요청
exports.post_profile = (req, res) => {
  // [before sequelize]
  //   console.log("req.body", req.body); // {userid}
  //   User.post_profile(req.body.userid, (result) => {
  //     console.log(result); // {id, userid, name, pw} model에서 배열의 0번째만 보냈기 때문에 객체로 들어올 것임
  //     res.render("profile", { data: result });
  //   });
  // [after sequelize]
  // `SELECT * FROM user WHERE userid= "${req.body.id}" LIMIT 1 `
  models.User.findOne({
    where: {
      userid: req.body.userid,
    },
  }).then((result) => {
    console.log("프로필 페이지 요청", result);
    res.render("profile", { data: result });
  });
};

// POST /user/profile/edit
exports.edit_profile = (req, res) => {
  // [before sequelize]
  //   console.log("controller", req.body); // {id, pw, name}

  //   User.edit_profile(req.body, () => {
  //     res.end();
  //   });
  // [after sequelize]
  // `UPDATE user set pw = "${req.body.pw}", name = "${req.body.name}" WHERE id = "${req.body.id}"`
  models.User.update(
    {
      name: req.body.name,
      pw: req.body.pw,
    },
    {
      where: {
        id: req.body.id,
      },
    }
  ).then((result) => {
    console.log("프로필 수정 요청", result); // 1: 수정 성공, 2: 수정 실패(where 조건에 해당하는 레코드를 못찾았을 때)
    res.end();
  });
};

// POST /user/profile/delete
exports.delete_profile = (req, res) => {
  // [before sequelize]
  //   console.log("controller", req.body); // {id}

  //   User.delete_profile(req.body.id, () => {
  //     res.end();
  //   });

  // [after sequelize]
  // `DELETE FROM user WHERE id = "${req.body.id}"`
  models.User.destroy({
    where: {
      id: req.body.id,
    },
  }).then((result) => {
    console.log("프로필 삭제 요청", result);
    res.end();
  });
};
