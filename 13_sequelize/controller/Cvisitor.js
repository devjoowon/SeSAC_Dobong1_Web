const models = require("../models");

exports.main = (req, res) => {
  res.render("index");
};

// GET /visitors
// 1. DB 연결 전
// exports.getVisitors = (req, res) => {
//   res.render("visitor", { getVisitors: Visitor.getVisitors() });
// };

// 2. DB 연결 후
// exports.getVisitors = (req, res) => {
//   Visitor.getVisitors((result) => {
//     console.log("Cvisitor.js 전체목록 ::", result);
//     res.render("visitor", { data: result });
//   });
// };

// 3. sequelize 연결!
exports.getVisitors = (req, res) => {
  models.Visitor.findAll().then((result) => {
    console.log("findAll >> ", result);
    res.render("visitor", { data: result });
  });
};

// GET /visitor/:id
exports.getVisitor = (req, res) => {
  console.log(req.params);
  console.log(req.params.id);

  // [before sequelize]
  // Visitor.getVisitor(req.params.id, (result) => {
  //   console.log("Cvisitor.js 데이터 하나 조회", result); // result는 객체 하나 형태임 (model에서 rows[0]으로 넘겼으므로) {}
  //   res.send(result);
  // });

  // [after sequelize]
  // `SELECT * FROM visitor WHERE id = ${id}`
  models.Visitor.findOne({
    where: { id: req.params.id },
  }).then((result) => {
    console.log(result);
    res.send(result);
  });
};

// POST /visitor
exports.postVisitor = (req, res) => {
  console.log(req.body); // {id, name, comment}

  // [before sequelize]
  // Visitor.postVisitor(req.body, (result) => {
  //   console.log("Cvisitor.js post", result);
  //   res.send({ id: result, name: req.body.name, comment: req.body.comment });
  // });

  // [after sequelize]
  // `INSERT INTO visitor VALUE(null, "${data.name}", "${data.comment}")`
  models.Visitor.create({
    name: req.body.name,
    comment: req.body.comment,
  }).then((result) => {
    console.log("등록 result", result);
    // res.send({ id: result.id, name: req.body.name, comment: req.body.comment });
    res.send(result);
  });
};

// DELETE /visitor
exports.deleteVisitor = (req, res) => {
  console.log(req.body);
  console.log(req.body.id);

  // [before sequelize]
  // Visitor.deleteVisitor(req.body.id, (result) => {
  //   console.log("Cvisitor.js delete", result);
  //   res.send("몇 번 방명록 삭제 완료!");
  // });

  // [after sequelize]
  // `DELETE FROM visitor WHERE id = ${id}`
  models.Visitor.destroy({
    where: { id: req.body.id },
  }).then((result) => {
    console.log("sequelize destroy result", result); // 1: true, 0: false
    res.send(req.body.id + "번 방명록 삭제 완료!");
  });
};

// PATCH /visitor
exports.patchVisitor = (req, res) => {
  console.log(req.body); // {id, name, comment}

  // [before sequelize]
  // Visitor.patchVisitor(req.body, (result) => {
  //   console.log("Cvisitor.js patch", result);
  //   res.send("수정 완료");
  // });

  // [after sequelize]
  // `UPDATE visitor SET name = "${data.name}", comment = "${data.comment}" WHERE id = ${data.id}`
  models.Visitor.update(
    {
      name: req.body.name,
      comment: req.body.comment,
    },
    {
      where: {
        id: req.body.id,
      },
    }
  ).then((result) => {
    console.log(result);
    res.send("수정 완료");
  });
};
