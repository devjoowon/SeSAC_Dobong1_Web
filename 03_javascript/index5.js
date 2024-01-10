// if문
if(5 > 3) {
    console.log("5가 3보다 커요")
}

let number = prompt('숫자 입력');
number = Number(number);
console.log(number);

if(number > 10) {
    console.log("입력받은 숫자가 10보다 큽니다")
}else{
    alert("입력받은 숫자가 10보다 작거나 같습니다")
}


// 실습
let age = 25;
if(age >= 20) {
    console.log("성인")
}else if(age >= 17) {
    console.log("고딩")
}else if(age >= 14) {
    console.log("중딩")
}else if(age >= 8) {
    console.log("초딩")
}else {
    console.log("유아")
}

// switch문
let a = 4;
switch(a) {
    case 3:
        console.log('a는 3입니다.');
        break;
    case 4:
        console.log('a는 4입니다.');
        break;
    case 5:
        console.log('a는 5입니다.');
        break;
    default:
        console.log('a의 값을 모르겠어요.');
        break;
}

let score = 100;
if(score < 0 || score > 100) {
    console.log('잘못된 점수입니다.');
}else if(score >= 90) {
    console.log('A');
}else if(score >= 80) {
    console.log('B');
}else if(score >= 70) {
    console.log('C');
}else if(score >= 60) {
    console.log('D');
}else {
    console.log('F');
}

switch (parseInt(score / 10)) {
    case 10:
    case 9:
        console.log('A');
        break;
    case 8:
        console.log('B');
        break;
    case 7:
        console.log('C');
        break;
    case 6:
        console.log('D');
        break;
    default:
        console.log('F');
        break;
}

// 삼항연산자
let num = 5;
if(num % 2 === 1) {
    console.log('홀수');
}else {
    console.log('짝수');
}

(num % 2 === 1) ? console.log('홀수') : console.log('짝수');

// 실습
let now = new Date().getHours();
console.log(now);
(now >= 0 && now < 12) ? console.log('오전') : console.log('오후');