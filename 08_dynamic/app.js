const express = require("express");
const app = express();
const PORT = 8080;

app.set("view engine", "ejs");
app.set("views", "./views");

// body-parser 미들웨어 등록 (이거 없이 post 했을땐 undefined가 뜸, 이거 있어야 body로 주고받는 데이터 읽고 쓸 수 있음)
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); // json형식으로 데이터를 주고받음

app.get("/", (req, res) => {
  res.render("index.ejs");
});

/* 1. ajax */
// ajax 라우팅
app.get("/ajax", (req, res) => {
  console.log(req.query);
  //   res.send("ajax 응답 완료");
  //   res.send({
  //     name: req.query.name,
  //     gender: req.query.gender,
  //   });
  res.send(req.query);
});

app.post("/ajax", (req, res) => {
  console.log(req.body); // 어떤 데이터가 들어오는지 확인하는 용도
  res.send(req.body);
});

/* 2. axios */
app.get("/axios", (req, res) => {
  console.log(req.query);
  res.send(req.query);
});

app.post("/axios", (req, res) => {
  console.log(req.body);
  res.send(req.body);
});

/* 3. fetch */
app.get("/fetch", (req, res) => {
  console.log(req.query);
  res.send(req.query);
});

app.post("/fetch", (req, res) => {
  console.log(req.body);
  res.send(req.body);
});

/* open api 사용 */
app.get("/open-api", (req, res) => {
  res.render("api");
});

/* 실습 1 - axiosGetRegister */
app.get("/axios-get-register", (req, res) => {
  res.render("axios-get-register");
});

app.get("/axiosGetRegister", (req, res) => {
  console.log(req.query);
  res.send(req.query);
});

/* 실습 2 - axiosPostLogin */
app.get("/axios-post-login", (req, res) => {
  res.render("axios-post-login");
});

const ID = "joowon";
const PW = "1234"; // value는 문자열이기 때문에 문자열과 문자열을 비교해줘야 함                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 ㅈ

app.post("/axiosPostLogin", (req, res) => {
  if (ID != req.body.id || PW != req.body.pw) {
    res.send("fail");
  } else {
    res.send(req.body);
  }
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
