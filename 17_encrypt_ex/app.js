const express = require("express");
const session = require("express-session");
const app = express();
const PORT = 8080;
const db = require("./models");

app.set("view engine", "ejs");
app.set("views", "./views");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
  session({
    secret: "secretKey",
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 1000 * 60 * 10,
      httpOnly: true,
    },
  })
);

const indexRouter = require("./routes/index");
app.use("/", indexRouter);

// user관련 페이지
const userRouter = require("./routes/user");
app.use("/user", userRouter);

// board관련 페이지
const boardRouter = require("./routes/board");
app.use("/board", boardRouter);

// Swagger 연동
// const { swaggerUi, specs } = require("./swagger/swagger");
// app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));

app.get("*", (req, res) => {
  res.render("404");
});

db.sequelize.sync({ force: false }).then((result) => {
  console.log("DB연결 성공");
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
  console.log(`http://101.101.218.5:${PORT}`);
});
