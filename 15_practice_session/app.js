const express = require("express");
const session = require("express-session");
const app = express();
const PORT = 8080;

app.set("views", "./views");
app.set("view engine", "ejs");
app.use("/static", express.static(__dirname + "/static"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const userinfo = { userId: "cocoa", userPw: "1234" };

// TODO: 세션 미들웨어 설정
app.use(
  session({
    secret: "secretKey",
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 60 * 1000 * 10, // 10분 뒤 세션 종료
      httpOnly: true,
    },
  })
);

// 2. index에 세션 정보 전달
app.get("/", (req, res) => {
  /*
    index.ejs에 전달
    로그인 된 유저라면 {isLogin: true, user: user}
    로그인 안 된 유저라면 {isLogin: false}
    */
  // TODO: user session 불러오는 부분
  const user = req.session.user; // cocoa
  /* req.session에 들어있는 값
  cookie: {
    path: '/',
    _expires: 2024-02-21T06:39:09.306Z,
    originalMaxAge: 600000,
    httpOnly: true
  },
  user: 'cocoa'
  */
  // 로그인 된 유저라면 user에 cocoa가 담겨져 있음, 로그인이 안된 유저라면 user는 undefined
  // user에 값이 들어있는지 없는지에 따라서
  console.log("user: ", user);
  // TODO: user가 로그인 됐는지 안됐는지 검사하는 부분
  if (user) {
    // 세션에 user라는 키가 있다면 로그인 된 상태
    res.render("index", { isLogin: true, user: user });
  } else {
    res.render("index", { isLogin: false });
  }
});

app.get("/login", (req, res) => {
  res.render("login");
});

// TODO: 로그인 기능
// 1. 세션 설정하는 부분임 (여기 먼저 하기!)
app.post("/login", (req, res) => {
  // user라는 session 설정
  console.log(req.body); // {id:'', pw:''}
  if (req.body.id === userinfo.userId && req.body.pw === userinfo.userPw) {
    req.session.user = req.body.id;
    console.log(req.session);
    /*
    Session {
  cookie: {
    path: '/',
    _expires: 2024-02-21T06:39:09.306Z,
    originalMaxAge: 600000,
    httpOnly: true
  },
  user: 'cocoa'
}
    */
    console.log(req.sessionID); //lqB2qvJc3PAWZkVe3GAcg-yWzWQNK-uR
    res.redirect("/");
  } else {
    res.send(`
    <script>
        alert('아이디 또는 비밀번호가 일치하지 않습니다. 다시 시도해주세요.');
        document.location.href = '/login';
    <script>
    `);
  }
});

// TODO: 로그아웃 기능
// 3. 세션 삭제
app.get("/logout", (req, res) => {
  // 로그아웃 진행
  const user = req.session.user;
  if (user) {
    // 로그인 된 회원 >> logout 시켜주기
    req.session.destroy((err) => {
      if (err) {
        res.status(500).send("server error");
        throw err;
      }
      // 메인페이지 랜더
      res.redirect("/");
    });
  } else {
    // 세션 만료된 회원
    res.send(`
        <script>
            alert('이미 세션이 만료되었습니다.');
            document.location.href = '/';
        <script>
    `);
  }
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});

/* req 객체
req.session.키 = 값 // 세션 설정 -> 로그인 할 때
req.session.키 // 세션 사용 -> 로그인 된 사람인지 확인할 때
req.session.destroy(콜백) // 세션 삭제 -> 로그아웃 할 때
키 이름은 user로 하기
*/
