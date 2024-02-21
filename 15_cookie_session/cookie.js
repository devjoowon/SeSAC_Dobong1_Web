const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();
const PORT = 8080;

app.set("views", "./views");
app.set("view engine", "ejs");

// 백에서 쿠키 설정
// cookie middleware
// ver1. 암호화 되지 않은 쿠키
// app.use(cookieParser());

// ver2. 암호화 된 쿠키
app.use(cookieParser("secretKey")); // secretKey를 env로 관리하면 됨 (깃헙에 올리지 않고!)

const cookieConfig = {
  /*
    - maxAge: 쿠키의 수명, 1000이 1초인 밀리초 단위
    - expires: 만료 날짜, GNT 시간 설정
    - httpOnly: http 통신만 접근 허용 (true, false)
    - path: '/abc' 라고 쓴다면 쿠키가 해당 경로와 그 하위 경로에서만 활성화 (default: '/')
    - secure: https로 통신하는 경우에만 쿠키 전송 (true, false)
    - signed: 쿠키의 암호화 (true, false)
    */
  maxAge: 60 * 1000,
  httpOnly: true,
  signed: true, //쿠키 암호화
};

app.get("/", (req, res) => {
  res.render("cookie");
});

// 쿠키 설정
// res.cookie(쿠키이름, 쿠키값, 옵션)
app.get("/setCookie", (req, res) => {
  res.cookie("myCookie", "cookie~~~", cookieConfig);
  res.send("set cookie 완료!");
});

// 쿠키값 가져오기
// req.cookies 에 쿠키 정보가 담겨 있음
app.get("/getCookie", (req, res) => {
  // ver1. 암호화 되지 않은 쿠키일 때 여기에 담겨옴
  //   console.log(req.cookies);
  //   res.send(req.cookies);

  // ver2. 암호화 된 쿠키
  console.log(req.signedCookies);
  res.send(req.signedCookies);
});

// 쿠키 삭제
// res.clearCookie(쿠키이름, 쿠키값, 옵션)
app.get("/clearCookie", (req, res) => {
  res.clearCookie("myCookie", "cookie~~~", cookieConfig); // res.cookie로 설정했던 인자와 똑같이 써줘야 함
  res.send("쿠키 삭제!");
});

// path 다르게 설정 후 쿠키 확인
const cookieConfig2 = {
  maxAge: 60 * 1000,
  httpOnly: true,
  path: "/abc",
};

app.get("/abc", (req, res) => {
  res.cookie("abc", "another cookie~", cookieConfig2);
  res.render("abc");
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});

/*
ver1. 암호화 되지 않은 쿠키
- 미들웨어 설정 >> app.use(cookieParser())
- 쿠키 설정 >> res.cookie(이름, 값, 옵션)
- 쿠키 확인 >> req.cookies 객체에서 확인
- 쿠키 삭제 >> res.clearCookie(이름, 값, 옵션)
    - 쿠키 삭제만 하는 것이고 응답 완료까진 하지 않음 (end나 send 처리 따로 해줘야 함)
    - 이름, 값, 옵션이 일치해야 삭제됨 (expires, maxAge 옵션은 일치하지 않아도 됨)
*/

/*
ver2. 암호화 된 쿠키
- 미들웨어 설정 >> app.use(cookieParser("내가 정한 문자열" -> env로 관리))
- 쿠키 설정 >> res.cookie(이름, 값, 옵션)로 설정 & signed: true 옵션으로 설정
- 쿠키 확인 >> req.signedCookies 객체에서 확인
- 쿠키 삭제 >> ver1.과 동일
*/
