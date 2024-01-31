const express = require("express");
const app = express();
const PORT = 8080;

/* 1. npm install multer 후, multer 모듈 불러오기 */
const multer = require("multer");

const path = require("path"); // 확장자 추출시 path 사용하기 위해 require 하기!

/* 2. 미들웨어 */
// view 관련
app.set("view engine", "ejs");
app.set("views", "./views");

// static 폴더
// app.use('/이 이름으로 사용할 것', express.static(실제 폴더 경로));
app.use("/uploads", express.static(__dirname + "/uploads")); // __dirname : 현재 폴더, express.static(__dirname + "/uploads"): uploads가 어디에 있는지
// console.log("현재 위치한 파일(app.js)의 폴더 경로", __dirname);
app.use("/static", express.static(__dirname + "/public"));

// body-parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// multer
const upload = multer({
  dest: "uploads/",
});

// multer detail 설정
const uploadDetail = multer({
  storage: multer.diskStorage({
    // storage 안에 들어가는 것: 콜백함수 2개
    destination: function (req, file, cb) {
      // 세번째 인자인 cb가 "업로드 경로" 설정
      cb(null, "uploads/");
    },
    filename: function (req, file, done) {
      // "원하는 이름으로 파일 저장"하게끔 설정
      const extension = path.extname(file.originalname); // 확장자를 추출하는 함수
      done(
        null,
        path.basename(file.originalname, extension) + Date.now() + extension
      );
    },
  }),
  limits: { fileSize: 5 * 1024 * 1024 },
});
/*
  - storage: 저장공간의 정보
      diskStorage: 파일을 저장하기 위한 모든 제어기능 제공
        - destination:저장 경로
        - filename: 파일 이름 관련 정보
  - limits: 파일 제한 관련 정보
      fileSize: 파일 사이즈를 바이트 단위로 제한
*/

/* 라우팅 */
app.get("/", function (req, res) {
  res.render("index");
});

// 1. 파일 한 개 업로드
app.post("/upload", uploadDetail.single("userfile"), function (req, res) {
  console.log(req.file);
  console.log(req.body);
  /*
  <req.file의 구조!!!>
  {
  fieldname: 'userfile', // 폼에 정의한 name 값
  originalname: 'gosim.png', // 원본 파일명
  encoding: '7bit', // file encoding type
  mimetype: 'image/png', // 파일 타입
  destination: 'uploads/', // 파일 저장 경로
  filename: 'd18cbc3dfa234d3be37a2354459b1ca2', // 저장된 파일 이름
  path: 'uploads\\d18cbc3dfa234d3be37a2354459b1ca2', // 경로 포함된 파일 이름
  size: 370344 // byte 기준 파일 크기
}
  */
  res.send("파일 업로드 완료!");
});

// 2. 파일 여러 개 업로드 (ver.01)
app.post(
  "/uploads/array",
  uploadDetail.array("multifiles"),
  function (req, res) {
    console.log(req.files); // [{..}, {..}] 배열로 요청됨, 파일을 하나만 업로드 해도 배열로 옴
    console.log(req.body); // 파일 외의 정보
    res.send("파일 여러 개 업로드 완료!");
  }
);

// 2. 파일 여러 개 업로드 (ver.02)
app.post(
  "/uploads/fields",
  uploadDetail.fields([
    { name: "file1" },
    { name: "file2" },
    { name: "file3" },
  ]),
  function (req, res) {
    console.log(req.files); // {file1: [{..}, {..}, {}], file2: [{..}, {}, {}],} 객체로 요청됨, 객체 안에 배열로
    console.log(req.files.file1[0].originalname); // 파일의 이름을 뽑아내고 싶을 때ㅈ
    console.log(req.body); // 파일 외의 정보
    res.send("파일 여러 개 업로드 완료!");
  }
);

// 3. 동적 파일 업로드
app.post("/dynamicUpload", uploadDetail.single("dynamicFile"), (req, res) => {
  console.log(req.file);
  console.log(req.body);
  // res.send({ ...req.file, ...req.body });
  /*
  {
    title: '푸',
    fieldname: 'userfile', // 폼에 정의한 name 값
    originalname: 'gosim.png', // 원본 파일명
    encoding: '7bit', // file encoding type
    mimetype: 'image/png', // 파일 타입
    destination: 'uploads/', // 파일 저장 경로
    filename: 'd18cbc3dfa234d3be37a2354459b1ca2', // 저장된 파일 이름
    path: 'uploads\\d18cbc3dfa234d3be37a2354459b1ca2', // 경로 포함된 파일 이름
    size: 370344 // byte 기준 파일 크기
  }
  */
  res.send({
    title: req.body,
    fileInfo: req.file,
  });

  /*
  {
    title: '푸',
    fileInfo: {
      fieldname: 'userfile', // 폼에 정의한 name 값
      originalname: 'gosim.png', // 원본 파일명
      encoding: '7bit', // file encoding type
      mimetype: 'image/png', // 파일 타입
      destination: 'uploads/', // 파일 저장 경로
      filename: 'd18cbc3dfa234d3be37a2354459b1ca2', // 저장된 파일 이름
      path: 'uploads\\d18cbc3dfa234d3be37a2354459b1ca2', // 경로 포함된 파일 이름
      size: 370344 // byte 기준 파일 크기
    }
  }
  */
});

app.listen(PORT, function () {
  console.log(`http://localhost:${PORT}`);
});
