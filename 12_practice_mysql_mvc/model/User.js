// TODO: DB(mysql) 연결
// TODO: 모델 코드

// 0. mysql 연결
const mysql = require("mysql");
const conn = mysql.createConnection({
  host: "localhost",
  user: "sesac",
  password: "1234",
  database: "sesac",
});

/*
1. 뷰에서 요청
2. 컨트롤러에서 정보를 받음(req.body안에 있을수도 있고, req.query, req.params,...) 그리고 모델로 줌(전체 다 줄수도 있고, 필요한 것만 줄수도 있고)
3. 모델에서 DB로 요청
4. 데이터 삽입/삭제/조회/.. 결과값을 컨트롤러로 응답
5. 컨트롤러에서 그 결과를 res라는 객체를 사용해서 뷰로 응답

(정리) 뷰 > 컨트롤러 > 모델 > DB > 모델 > 컨트롤러 > 뷰
*/
// POST /user/signup
// 특정 회원정보 "등록"
exports.post_signup = (data, cb) => {
  console.log("model", data); // {userid, pw, name}

  const sql = `INSERT INTO user(userid, name, pw) VALUES("${data.userid}", "${data.name}", "${data.pw}")`;
  conn.query(sql, (err, rows) => {
    if (err) throw err;

    console.log("rows", rows);
    cb();
  });
};

// POST /user/signin
// 특정 회원정보 "조회"
exports.post_signin = (data, cb) => {
  console.log("model", data); // {userid, pw}

  const sql = `SELECT * FROM user WHERE userid = "${data.userid}" and pw = "${data.pw}" LIMIT 1`;
  // 위의 sql에서 LIMIT 1 걸어준 이유 - 회원가입 시 중복id 검사하지 않아서 select결과가 여러 개일 수 있음

  conn.query(sql, (err, rows) => {
    if (err) throw err;

    console.log("model", rows); // [{id, userid, name, pw}], 로그인할때 만약 없는 값이면 빈배열[] 넘어감
    cb(rows); // 모델에서 보내준 rows를 컨트롤러에서 result로 받겠음
  });
};

// POST /user/profile
// 특정 회원정보 조회
exports.post_profile = (id, cb) => {
  console.log("model userid", id); // id="cocoa" 형태로 올것임

  const sql = `SELECT * FROM user WHERE userid= "${id}" LIMIT 1 `;
  conn.query(sql, (err, rows) => {
    if (err) throw err;

    console.log("model", rows); // [{id, userid, name, pw}]
    cb(rows[0]);
  });
};

// POST /user/profile/edit
exports.edit_profile = (data, cb) => {
  console.log("model", data);

  const sql = `UPDATE user set pw = "${data.pw}", name = "${data.name}" WHERE id = "${data.id}"`;

  conn.query(sql, (err, rows) => {
    if (err) throw err;

    console.log("model", rows);
    cb();
  });
};

// POST /user/profile/delete
exports.delete_profile = (id, cb) => {
  console.log("model", id);

  const sql = `DELETE FROM user WHERE id = "${id}"`;

  conn.query(sql, (err, rows) => {
    if (err) throw err;

    console.log("model", rows);
    cb();
  });
};
