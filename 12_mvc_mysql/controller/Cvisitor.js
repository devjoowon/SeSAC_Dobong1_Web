const Visitor = require("../model/Visitor");

exports.main = (req, res) => {
  res.render("index");
};

// DB 연결 전
// exports.getVisitors = (req, res) => {
//   res.render("visitor", { getVisitors: Visitor.getVisitors() });
// };

// DB 연결 후
// GET /visitors
exports.getVisitors = (req, res) => {
  Visitor.getVisitors((result) => {
    console.log("Cvisitor.js 전체목록 ::", result);
    res.render("visitor", { data: result });
  });
};

// GET /visitor/:id
exports.getVisitor = (req, res) => {
  console.log(req.params);
  console.log(req.params.id);

  Visitor.getVisitor(req.params.id, (result) => {
    console.log("Cvisitor.js 데이터 하나 조회", result); // result는 객체 하나 형태임 (model에서 rows[0]으로 넘겼으므로) {}
    res.send(result);
  });
};

// POST /visitor
exports.postVisitor = (req, res) => {
  console.log(req.body); // {id, name, comment}
  Visitor.postVisitor(req.body, (result) => {
    console.log("Cvisitor.js post", result);
    res.send({ id: result, name: req.body.name, comment: req.body.comment });
  });
};

// DELETE /visitor
exports.deleteVisitor = (req, res) => {
  console.log(req.body);
  console.log(req.body.id);
  Visitor.deleteVisitor(req.body.id, (result) => {
    console.log("Cvisitor.js delete", result);
    res.send("몇 번 방명록 삭제 완료!");
  });
};

// PATCH /visitor
exports.patchVisitor = (req, res) => {
  console.log(req.body); // {id, name, comment}
  Visitor.patchVisitor(req.body, (result) => {
    console.log("Cvisitor.js patch", result);
    res.send("수정 완료");
  });
};
