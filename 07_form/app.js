/* 1. 초기 설정 */
const express = require("express");
const app = express();
const PORT = 8080;

// 뷰 엔진 ejs로 쓸 것임
app.set("view engine", "ejs");

// views 폴더 안에 뷰들 모아뒀음
app.set("views", "./views");

/* 3. POST 요청 */
// body-parser 미들웨어 등록 (body-parser는 post 요청으로 body에 들어온 데이터를 가공할 수 있도록 하는 것)
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); // json형식으로 데이터를 주고받음

// -------------------------------------------------------
/* 1. 초기 설정 */
// 루트경로로 get요청이 들어왔을 때, index.ejs 렌더 시킬 것임
app.get("/", function (req, res) {
  res.render("index");
});

/* 2. GET 요청 */
// get 요청이 들어왔을 때 getForm
app.get("/getForm", function (req, res) {
  // 어떤 동작을 할지 여기에 적기
  console.log(req.query); // 요청은 query에 담겨서 옴, ex) { id: '', email: '', password: '' }
  // res.send("데이터 잘 받았습니다.");
  res.render("result", {
    title: "GET",
    userInfo: req.query,
  });
  // res.render("뷰", {보내줄 데이터})
});

/* 3. POST 요청 */
app.post("/postForm", function (req, res) {
  console.log(req.body); // post요청은 request.body에 담겨서 옴
  //   res.send("post 요청 성공!");
  res.render("result", {
    title: "POST",
    userInfo: req.body, //{ id2: '', pw: '', agree: [ ] }
  });
});

/* 1. 초기 설정 */
// 포트 열기
app.listen(PORT, function () {
  // 포트가 열린 이후 실행될 문장
  console.log(`http://localhost:${PORT}`);
});

// ----------------------------------------------------------
/* 실습 */
app.get("/practice", function (req, res) {
  res.render("practice.ejs");
});

app.get("/getPractice", function (req, res) {
  console.log(req.query);
  res.render("practice_result.ejs", {
    title: "GET",
    userInfo: req.query,
    addInfo: false,
  });
});

app.post("/postPractice", function (req, res) {
  console.log(req.body);
  const postInfo = req.body;
  res.render("practice_result.ejs", {
    title: "POST",
    userInfo: postInfo,
    addInfo: true,
  });
});

// ---------------------------------------------------------------
// validation
app.post("/js-form-check", (req, res) => {
  console.log(req.body);
  res.send("validation 응답");
});
