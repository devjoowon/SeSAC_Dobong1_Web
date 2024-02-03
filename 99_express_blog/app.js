const express = require("express");
const path = require("path");
const multer = require("multer");

const app = express();
const PORT = 8080;

/* temp DB */
// 임시 데이터 배열 형태로 만들어서 화면에 띄워주는 작업
let tempDB = [
  {
    contentID: 1,
    title: "글제목1",
    content: "글내용1",
    img: null, //null or path(string)
  },
  {
    contentID: 2,
    title: "글제목2",
    content: "글내용2",
    img: null, //null or path(string)
  },
  {
    contentID: 3,
    title: "글제목3",
    content: "글내용3",
    img: null, //null or path(string)
  },
  {
    contentID: 4,
    title: "글제목4",
    content: "글내용4",
    img: null, //null or path(string)
  },
];

const userID = "Joowon";

/* 미들웨어 설정 */
// 미들웨어란? 요청(request)과 응답(response) 사이에서 중간다리 역할을 하는 소프트웨어
// ex1) request의 body를 서버에서 읽을 수 있도록 도와주는 "body-parser"
// ex2) request의 file에서 보내는 파일 정보를 확인할 수 있도록 도와주는 "multer"
// ex3) static 파일 설정을 도와주는 app.use(express.static(~~~))

/* 미들웨어 설정 1. views 설정 (set() 이용) */
// view란? 사람들 눈에 보이는 화면, 프론트단 html
/*
    view 설정
    1. html 파일들을 어디서 모아둘건지(views 폴더 설정)
    2. html을 보여주기 위해서 어떻게 할건지 (view engine)

    view engine (ejs)
    - 서버에서 보낸 js변수를 클라이언트에서 사용할 수 있도록 도움
    - pug, ejs, nunjucks 등이 있지만 html과 가장 유사한 것은 ejs
*/
app.set("view engine", "ejs");
app.set("views", "./views");

/* 미들웨어 설정 2. static 폴더 설정 */
// static 폴더란? 외부(브라우저 등의 client)에서 접근 가능한 폴더, (프론트js, css, 이미지, 동영상 등)
app.use("/static", express.static(__dirname + "/public"));
app.use("/uploads", express.static(__dirname + "/uploads"));

/* 미들웨어 설정 3. body-parser 설정 (express 내장 모듈) */
// req.body는 기본적으로 undefined가 찍힘
// body-parser가 req.body를 서버측에서 사용할 수 있도록 파싱해줌
app.use(express.urlencoded({ extended: false })); // true -> queryString 모듈 사용, false -> qs 모듈 사용
app.use(express.json()); // 요청 body에서 json 정보만 가지고 오도록

/* 미들웨어 설정 4. multer 설정 (file업로드 시 필요, npm install multer 설치 필요) */
// 원래 req.body input type="file"의 정보는 string -> 사용 불가
// 따라서 실제 파일 업로드를 하고, 파일 정보를 확인하기 위해 사용
const upload = multer({
  storage: multer.diskStorage({
    destination(req, file, done) {
      done(null, "uploads/");
    },
    filename(req, file, done) {
      // pooh.png
      // extname(파일명): 확장자 추출 (png)
      // basename(파일명, 확장자): 확장자를 제외한 파일명만 추출 (pooh)
      // basename(경로명): 확장자를 포함한 파일명 추출 (pooh.png)
      const ext = path.extname(file.originalname);
      done(null, path.basename(file.originalname, ext) + Date.now() + ext);
    },
  }),
  limits: { fileSize: 5 * 1024 * 1024 },
});

/* 라우팅 */
/*
    라우팅을 한다는 것은 특정 url로 특정 method에 대한 요청을 처리하는 것
    - url: 사용자가 정한 url
    - method: get, post, put, patch, delete (CRUD를 위한 것 - 데이터를 create, read, update, delete)

    1. get: 'R'ead
    - 브라우저의 url에 주소를 입력하는 것은 모두 get요청!
    - localhost:8080/sesac 의 화면을 보기 위해서는 /sesac의 get요청에 대한 응답(response)이 있어야 함
        - res.send() res.end() res.write() res.render() 등
    2. post: 'C'reate 새로운 정보를 '입력', '추가'할 때 - axios등으로 post 할거에요 라고 말해야 함
    3. put(전체수정) & patch(일부수정): 'U'pdate 수정 관련 메소드
    4. delete: 'D'elte 삭제
*/
app.get("/", function (req, res) {
  res.render("index.ejs", {
    user: userID,
    contentData: tempDB, //[{}, {}]
  });
});

// :파라미터
// params vs. query
/*
    - params
        - 서버에서 url 표기 /:params
        - 클라이언트에서 /123 요청시 req.params 에서 정보 확인 가능 {params: '123'}
        - https://blog.naver.com/[joowon]/[212152101] 이면, /:id/:contentID 에 대한 get 요청
        - 네이버 블로그처럼 여러 계정의 글을 "조회"할 때 params 사용
    - query
        - 서버에서 url 표기 /sesac
        - 클라이언트에서 url 표기 /sesac?id=joowon&content=123
        - req.query에서 정보 확인 가능 {id: 'joowon', content='123'}
        - 검색, 필터링 기능을 사용할 때 query 사용
*/
/* 글 상세페이지 */
app.get("/content/:contentID", (req, res) => {
  console.log(req.params); //{ contentID: '1' }
  // 요청으로 들어오는 contentID는 req.params.contentID 안에 있음, 너무 기니까 구조 분해 할당
  const { contentID } = req.params;
  // contentID와 배열의 contentID를 비교해보자!!
  // tempDB의 contentID와 params로 들어오는 contentID 비교
  const isContent = tempDB.filter(
    (obj) => obj.contentID === Number(contentID)
  )[0]; // isContent값은 객체{} 이거나 undefined
  console.log(isContent);
  /*
  isContent에 찍히는 값
  {
    contentID: 1,
    title: "글제목1",
    content: "글내용1",
    img: null,
  },
  */
  if (isContent) {
    res.render("content", isContent);
    // res.render("content", { ...isContent, userName: "joowon" }); // 전개연산자로 이어붙이기 가능
  } else {
    res.render("404");
  }
});

/* 새 글 작성하기 화면 랜더링 */
// /content/write 는 write를 params로 파악할 수 있음
app.get("/write", (req, res) => {
  res.render("writeContent");
});

app.post("/blog/post", upload.single("img"), (req, res) => {
  console.log(req.body);
  console.log(req.file);
  tempDB.push({
    contentID:
      tempDB.length !== 0 ? tempDB[tempDB.length - 1].contentID + 1 : 1,
    title: req.body.title,
    content: req.body.content,
    img: req.file ? req.file.path : null,
  });
  console.log(tempDB);
  res.redirect("/");
});

/* 글 삭제하기 */
app.delete("/blog/delete", (req, res) => {
  console.log(req.query);
  const { contentID } = req.query;
  tempDB = tempDB.filter((obj) => obj.contentID !== Number(contentID));
  console.log(tempDB);

  res.end();
});

// 라우팅을 모두 하고, 마지막에 404페이지 해주면 이상한 url로 왔을 때 404페이지로 처리 가능
app.get("*", (req, res) => {
  res.render("404");
});

/* 포트열기 */
app.listen(PORT, function () {
  console.log(`http://localhost:${PORT}`);
});
