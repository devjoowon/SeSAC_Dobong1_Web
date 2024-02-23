const bcrypt = require("bcrypt"); // 강력한 암호화 모듈

const saltRounds = 10; // 솔트의 라운드 수 정의: 해시함수를 몇 번 반복할 것인지 (크면 클수록 안전 but, 서버 성능 저하)

/* 1. 회원가입 >> 해시값 생성 */
function hashPw(pw) {
  // hashSync(암호화할문자=비밀번호, 솔트라운드) -> 리턴값은 암호화된 문자(string)
  return bcrypt.hashSync(pw, saltRounds);
}

/* 2. 로그인 >> 해시값 일치 여부 확인 */
function comparePw(inputPw, hashedPw) {
  // compareSync(원본 비밀번호, 해시된 비밀번호)
  return bcrypt.compareSync(inputPw, hashedPw); // 리턴값은 true or false
}

// 비밀번호에 대한 해시값 생성 -> 회원가입 작업시 활용
const originalPassword = "12345";
const hashedPw = hashPw(originalPassword);
console.log("암호화 된 비밀번호 ::", hashedPw);

// 비밀번호 일치 여부 확인 -> 로그인 작업시 활용
const isMatch = comparePw("12345", hashedPw);
const isMatch2 = comparePw("1234", hashedPw);
console.log("비밀번호 일치? ::", isMatch); // true
console.log("비밀번호 일치? ::", isMatch2); // false
