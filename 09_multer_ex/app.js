const exp = require("constants");
const express = require("express");
const app = express();
const PORT = 8080;

const multer = require("multer");
const path = require("path");

app.set("view engine", "ejs");
app.set("views", "./views");

app.use("/uploads", express.static(__dirname + "/uploads")); // result.ejs에서 이 경로로 파일을 찾을 수 있음
app.use("/static", express.static(__dirname + "/static")); // static이라는 경로를 static이라고 쓸 것임 (앞에가 public이라면 "/public/css/result.css")

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const upload = multer({
  dest: "uploads/",
});

const uploadDetail = multer({
  storage: multer.diskStorage({
    destination: function (req, file, done) {
      done(null, "uploads/");
    },
    filename: function (req, file, done) {
      const extension = path.extname(file.originalname);
      done(
        null,
        path.basename(file.originalname, extension) + Date.now() + extension
      );
    },
  }),
  limits: { fileSize: 5 * 1024 * 1024 },
});

app.get("/", function (req, res) {
  res.render("index");
});

app.post("/upload", uploadDetail.single("profile"), function (req, res) {
  console.log(req.file);
  console.log(req.body);
  const userInfo = req.body;
  res.render("result", {
    name: userInfo.name,
    id: userInfo.id,
    pw: userInfo.pw,
    age: userInfo.age,
    imgsrc: req.file.path,
  });
});

app.listen(PORT, function () {
  console.log(`http://localhost:${PORT}`);
});
