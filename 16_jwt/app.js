const express = require("express");
const app = express();
const PORT = 8080;
const jwt = require("jsonwebtoken");
const SECRET = "BeEtFPeUwry1eOCWnUFnBVTD07GsPp"; // random string (프로젝트 할 땐 env에서 관리해야 함)

app.set("views", "./views");
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const userInfo = { id: "cocoa", pw: "1234", name: "코코아", age: 18 };

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/login", (req, res) => {
  res.render("login");
});

// 로그인 요청
// jwt 생성
app.post("/login", (req, res) => {
  try {
    console.log(req.body);

    const { id, pw } = req.body;
    const { id: realId, pw: realPw } = userInfo;
    if (id === realId && pw === realPw) {
      // jwt 인증 토큰 생성
      // const token = jwt.sign(payload, secret/private key, option)
      const token = jwt.sign({ id: id }, SECRET); //{id라는 키: req.body로 넘어오는 id value}
      console.log(token);
      res.send({ result: true, token: token });
    } else {
      res.send({ result: false, message: "로그인 정보가 올바르지 않습니다." });
    }
  } catch (err) {
    console.log("POST /login", err);
    res.status(500).send("server error");
  }
});

// token 정보 확인
app.post("/token", (req, res) => {
  try {
    console.log(req.headers.authorization);
    if (req.headers.authorization) {
      // 인증 정보 들어왔을 때
      const token = req.headers.authorization.split(" ")[1]; // Bearer 글자를 빼고 토큰값만 저장하기 위해 띄어쓰기 기준으로 나눔(참고: [0]은 Bearer)

      // 인증 정보가 유효한지 여부를 판단하기 위한 try-catch문
      try {
        console.log("token ::", token);

        const auth = jwt.verify(token, SECRET);
        console.log("auth ::", auth);
        // verify의 리턴 값 -> { id: 'cocoa', iat: 1708655648 } : payload와 토큰이 발급된 시간
        // iat : issued at (토큰이 발급된지 얼마나 지났는지 확인 가능)

        if (userInfo.id === auth.id) {
          res.send({ result: true, name: userInfo.name });
        }
        res.end();
      } catch (err) {
        // 잘못된 정보가 들어왔을 때
        console.log("토큰 인증 에러 ::", err);
        res.send({ result: false, message: "인증된 회원이 아닙니다." });
      }
    } else {
      // 인증 정보 안 들어왔을 때
      res.redirect("/login");
    }
  } catch (err) {
    console.log("POST /token", err);
    res.status(500).send("server error");
  }
});

app.listen(PORT, () => {
  console.log(`http:localhost:${PORT}`);
});
