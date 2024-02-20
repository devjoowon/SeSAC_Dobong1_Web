const express = require("express");
const app = express();
const PORT = 8080;
const db = require("./models");

app.set("view engine", "ejs");
app.set("views", "./views");
app.use("/static", express.static(__dirname + "/static"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// 라우터 분리
const indexRouter = require("./routes");
app.use("/", indexRouter);

// /user
const userRouter = require("./routes/user");
app.use("/user", userRouter);

app.get("*", (req, res) => {
  res.render("404");
});

db.sequelize.sync({ force: false }).then((result) => {
  console.log(result);
  console.log("DB연결 성공");
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
