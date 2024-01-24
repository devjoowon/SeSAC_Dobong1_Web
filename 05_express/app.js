const express = require("express");
const app = express(); //server
const PORT = 8080;

app.set("view engine", "ejs");
app.set("views", "./views"); // ("views(고정)", "폴더경로")
app.use("/static", express.static(__dirname + "/public")); // static한 파일 경로는 이걸로 쓸거야. 라고 알려줘야 함

// 라우팅
// render의 두번째 인자에서 index.ejs에서 사용할 정보 전달
app.get("/", (request, response) => {
  // root 경로 (http://localhost:8080/)
  // response.send("안녕 hello express!");
  response.render("index.ejs", {
    btns: ["apple", "banana"],
    isLogin: true,
    userInfo: {
      name: "joowon",
      msg: "식사는 맛있게 하셨나요?",
    },
  });
});

app.get("/register", (req, res) => {
  // register 경로 (http://localhost:8080/register)
  res.render("register");
});

app.get("/login", (req, res) => {
  res.render("login");
});

app.get("*", (req, res) => {
  // page not found, 404 페이지는 라우팅 맨 마지막에 설정
  res.render("404");
});

app.listen(PORT, function () {
  console.log(`http://localhost:${PORT}`);
});
