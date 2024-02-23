const crypto = require("crypto"); // nodejs 내장 모듈, 설치 필요x
/*
1. crypto를 이용한 단방향 암호화 구현 - 복호화 불가능
- createHash(알고리즘)
- pbkdf2Sync(비밀번호, 솔트, 반복횟수, 키의 길이, 알고리즘)
*/

// 1-1. createHash(알고리즘).update(암호화할 값).digest(인코딩방식)
// 인코딩으로는 base64, hex, ascii, binary 등을 쓸 수 있음

// 비밀번호를 받아서 암호화 시켜주는 함수
const createHashPw = (pw) => {
  return crypto.createHash("sha512").update(pw).digest("base64");
};

// node crypto 해보기
console.log("1st hashing", createHashPw("1234"));
console.log("2nd hashing", createHashPw("1234"));
console.log("3rd hashing", createHashPw("1234"));
// ^^^ 전부 다 똑같은 값
console.log("another val", createHashPw("1234.")); // 달라짐

// 1-2. pbkdf2Sync (암호화할 값, 솔트, 반복횟수, 키 길이, 알고리즘).toString(인코딩방식)
/*
- 솔트를 이용해서 해싱하는 함수
- salt 생성: crypto.randomBytes(바이트수)
- randomBytes와 pbkdf2Sync 함수는 버퍼 형식의 데이터를 리턴
*/

/* const str = "hello";
const buffer = Buffer.from(str); // 100 001 형태의 버퍼가 16진수로 표현
console.log(buffer); */
// 회원가입 과정
// 새로운 hash와 salt를 만드는 과정 >> db에 hash와 salt를 저장해야 함
function saltAndHashPw(pw) {
  const salt = crypto.randomBytes(16).toString("base64");
  const iterations = 100; // 반복횟수
  const keylen = 64; // 생성할 키의 길이
  const algorithm = "sha512";

  const hash = crypto
    .pbkdf2Sync(pw, salt, iterations, keylen, algorithm) // buffer
    .toString("base64"); // buffer to string

  return { hash, salt }; // {hash: hash, salt: salt} - 키 값 같아서 생략한 것
}

console.log("1st hashing", saltAndHashPw("1234"));
console.log("2nd hashing", saltAndHashPw("1234"));
console.log("3rd hashing", saltAndHashPw("1234"));
// ^^^ 전부 다 다른값 -> salt값이 랜덤으로 다 다르기 때문
// salt값은 db에 저장해야 함

// 로그인 과정
// DB에 있는 hash와 salt를 이용해서 input password의 hash값 검증
function checkPw(inputPw, savedSalt, savedHash) {
  // 회원가입 했을 때의 반복횟수와 키의 길이와 알고리즘이 모두 같아야 함
  const iterations = 100; // saltAndPw와 같아야 함
  const keylen = 64; // saltAndPw와 같아야 함
  const algorithm = "sha512"; // saltAndPw와 같아야 함

  // inputPw를 해시 시켜주는 작업 (들어오는 값도 해시를 시켜서 비교해줘야 함)
  const hash = crypto
    .pbkdf2Sync(inputPw, savedSalt, iterations, keylen, algorithm) // inputPw빼고 나머지 네개의 값은 회원가입 때와 같아야 함
    .toString("base64"); // 이것도 마찬가지로 회원가입 때와 같아야 함
  console.log("input hash ::", hash);
  return savedHash === hash;
}

const registerPw = "qwer1234";

// 회원가입
const { salt: registerSalt, hash: registerHash } = saltAndHashPw(registerPw); // 구조분해할당
console.log("=====================================================");
console.log("암호화에 쓰인 salt ::", registerSalt);
console.log("암호화 된 hash ::", registerHash);

// 로그인 -> 비밀번호가 db의 hash값과 일치하는지 확인하는 작업
const isMatch = checkPw("qwer1234", registerSalt, registerHash);
const isMatch2 = checkPw("qwer12345", registerSalt, registerHash);
console.log("비밀번호 일치? ::", isMatch);
console.log("비밀번호 일치? ::", isMatch2);

/* 2. 양방향 암호화: 복호화 가능 */
// createCipheriv()
const key = crypto.randomBytes(32);
const iv = crypto.randomBytes(16);

const algorithm = "aes-256-cbc";
const originalMessage = "hello, world !";
console.log(
  "==========================양방향 암호화==========================="
);
// 암호화
function encrypt(text) {
  // 1. 암호화 객체 생성
  // const cipher = crypto.createCipheriv(알고리즘, 키, iv)
  const cipher = crypto.createCipheriv(algorithm, key, iv);

  // 2. 실제 데이터 암호화 작업
  // let encrypted = cipher.update(암호화 할 데이터, 입력 인코딩, 출력 인코딩);
  let encrypted = cipher.update(text, "utf-8", "base64");

  // 3. final을 이용해서 최종 결과 생성
  encrypted += cipher.final("base64");
  return encrypted;
}
console.log(encrypt(originalMessage));

// 복호화
function decrypt(encryptedText) {
  // 1. 복호화 객체 생성
  const decipher = crypto.createDecipheriv(algorithm, key, iv);
  // 2. 실제 데이터 복호화
  let decrypted = decipher.update(encryptedText, "base64", "utf-8");
  // 3. final을 이용해서 최종 결과 생성
  decrypted += decipher.final("utf-8");
  return decrypted;
}

const encryptedMessage = encrypt(originalMessage); // 암호화
console.log("암호화 된 메세지 ::", encryptedMessage);

const decryptedMessage = decrypt(encryptedMessage);
console.log("복호화 된 메세지 ::", decryptedMessage);
