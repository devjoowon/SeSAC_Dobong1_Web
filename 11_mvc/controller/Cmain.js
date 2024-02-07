const Comment = require("../model/Comment"); // <- model에서 데이터 가져오는 것
// controller에서는 model에서 받은 데이터를 가공해서 view에 전달할 수 있음

// GET /
exports.main = (req, res) => {
  res.render("index");
};
// router.get("/", (req, res) => {
//     res.render("index");
// });

// GET /comments
exports.comments = (req, res) => {
  console.log(Comment.commentsInfo());
  res.render("comments", { commentInfo: Comment.commentsInfo() });
};
// router.get("/comments", (req, res) => {
//   console.log(comments);
//   res.render("comments", { commentInfo: comments });
// });

// GET /comment/:id (params 사용) >> comment.ejs
exports.comment = (req, res) => {
  console.log(req.params);
  const commentId = req.params.id; // 1,2,3,4와 같은 형식으로 들어옴

  if (!Comment.commentsInfo()[commentId - 1]) {
    return res.render("404");
  }
  res.render("comment", { commentInfo: Comment.commentsInfo()[commentId - 1] });
};

// router.get("/comment/:id", (req, res) => {
//   console.log(req.params);
//   const commentId = req.params.id; // 1,2,3,4와 같은 형식으로 들어옴

//   // if (commentId < 1 || commentId > comments.length) {
//   //   return res.render("404");
//   // }

//   // if (isNaN(commentId)) {
//   //   return res.render("404");
//   // }

//   // 위의 if문을 한번에 처리하기. undefined나 null이 뜨면 404페이지
//   if (!comments[commentId - 1]) {
//     return res.render("404");
//   }

//   res.render("comment", { commentInfo: comments[commentId - 1] });
// });
