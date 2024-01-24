const http = require("http");
const fs = require("fs"); // html 파일로 전송

const PORT = 8080;
const server = http.createServer(function (request, response) {
  // console.log(request.url);
  /* response.writeHead(상태코드, 헤더정보)
        - text/html : 응답의 콘텐트 형식이 HTML 이라는 의미
        - charset=utf-8 : 인코딩 방식이 utf-8
    */

  // response.write('응답완료!');
  // response.end('<h3>진짜 완료!</h3>');

  // nodejs는 싱글스레드이기 때문에 에러나면 서버가 죽어서 예외처리 해줘야 함!
  // 예외처리 try ~ catch(err){}문
  // try 스코프 내부 문장에서 오류가 났을 때 catch문으로 error를 보냄
  try {
    const data = fs.readFileSync("./inex.html");
    response.writeHead(200, { "content-type": "text/html; charset=utf-8" }); // html로 인식하게 해주고, 한글 안깨지게 utf-8로 인코딩
    response.write(data);
    response.end();
  } catch (error) {
    console.log(error);
    // 404.html 나오게 하기
    const data = fs.readFileSync("./404.html");
    response.writeHead(200, { "content-type": "text/html; charset=utf-8" });
    response.write(data);
    response.end();
  } finally {
    // 예외 발생과 상관없이 모두 실행시키고 싶은 경우 작성
    console.log("성공, 실패 모두 실행됨");
  }
});

// 1. request 이벤트: 클라이언트 요청
server.on("request", function (request, response) {
  console.log("request 이벤트 실행!");
});

// 2. connection 이벤트: 클라이언트 접속했을 때 발생
server.on("connection", (request, response) => {
  console.log("connection 이벤트 발생!");
});

server.listen(8080, function () {
  console.log("Server is open !");
  console.log(`http://localhost:${PORT}`);
});
