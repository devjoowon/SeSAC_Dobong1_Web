// DB 연결 전
// exports.getVisitors = () => {
//     return [
//       { id: 1, name: "joowon", comment: "안녕하세요" },
//       { id: 2, name: "jennie", comment: "방가워요" },
//     ];
//   };

const mysql = require("mysql");
// mysql 연결 설정
const conn = mysql.createConnection({
  host: "localhost",
  user: "sesac",
  password: "1234",
  database: "sesac",
});

// DB 연결 후
// 전체 데이터 조회
// GET /visitors
exports.getVisitors = (cb) => {
  conn.query("SELECT * FROM visitor", (err, rows) => {
    if (err) {
      throw err;
    }

    console.log("Visitor.js 전체목록::", rows);
    cb(rows); //콜백의 인자로 rows를 던져줌
  });
};

// 데이터 하나 조회
// GET /visitor/:id
exports.getVisitor = (id, cb) => {
  conn.query(`SELECT * FROM visitor WHERE id = ${id}`, (err, rows) => {
    if (err) throw err;

    console.log("Visitor.js 데이터 하나 조회", rows); // rows는 배열형태임 [{}]
    cb(rows[0]); //하나의 데이터를 찾아도 배열형태로 넘어오므로 0번 인덱스 보내기
  });
};

// 데이터 등록
// POST /visitor
exports.postVisitor = (data, cb) => {
  // data = {name: '주원', comment: '발렌타인데이~'}
  conn.query(
    `INSERT INTO visitor VALUE(null, "${data.name}", "${data.comment}")`,
    (err, rows) => {
      if (err) throw err;
      console.log("Visitor.js post", rows);

      //   OkPacket {
      //     fieldCount: 0,
      //     affectedRows: 1,
      //     insertId: 3,
      //     serverStatus: 2,
      //     warningCount: 0,
      //     message: '',
      //     protocol41: true,
      //     changedRows: 0
      //   }
      cb(rows.insertId);
    }
  );
};

// DELETE /visitor
exports.deleteVisitor = (id, cb) => {
  console.log(id);
  conn.query(`DELETE FROM visitor WHERE id = ${id}`, (err, rows) => {
    if (err) throw err;

    console.log("Visitor.js delete", rows);
    cb(rows);
  });
};

// PATCH /visitor
exports.patchVisitor = (data, cb) => {
  console.log(data);
  conn.query(
    `UPDATE visitor 
    SET name = "${data.name}", comment = "${data.comment}" 
    WHERE id = ${data.id}`,
    (err, rows) => {
      if (err) throw err;

      console.log("Visitor.js patch", rows);
      cb(true);
    }
  );
};
