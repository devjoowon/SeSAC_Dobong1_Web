// 실습1
for(let i = 1; i <= 10000; i++) {
    if(i % 13 === 0 && i % 2 ===1) {
        console.log(i);
    }
}
console.log("=============================");

// 실습2
for(let n = 2; n <= 9; n++) {
    console.log(`---${n}단---`);
    for(let i = 1; i <= 9; i++) {
        console.log(`${n} x ${i} = ${n*i}`);
    }
}
console.log("=============================");

// 실습3
let num = 0;
let sum = 0;
while(num <= 100) {
    if(num % 2 === 0 || num % 5 === 0) {
        sum += num
    }
    num++;
}
console.log(sum);
console.log("=============================");

// 내장메소드와 내장객체 실습1
arr1 = [];
for(let i = 0; i < 100; i++) {
    arr1[i] = i + 1;
}
console.log(arr1);

// arr1의 합 구하기
// 1. for문
let sum1 = 0;
for(let i = 0; i <= arr1.length; i++) {
    sum1 += i;
}
console.log(sum1);

// 2. for of문
let sum2 = 0;
for(let i of arr1) {
    sum2 += i;
}
console.log(sum2);

// 3. forEach문
let sum3 = 0;
arr1.forEach(function(el) {
    sum3 += el;
});
console.log(sum3);

// 내장메소드와 내장객체 실습2
let fruits1 = ["사과", "딸기", "파인애플", "수박", "참외", "오렌지", "자두", "망고"];
let fruits2 = ["수박", "사과", "참외", "오렌지", "파인애플", "망고"];

let same = fruits1.filter(function(fruit){
    return fruits2.includes(fruit)
});

console.log(same);

let diff = fruits1.filter(function(fruit) {
    return !fruits2.includes(fruit);
});

console.log(diff);

// 내장메소드와 내장객체 실습3
let today = new Date().getDay;
console.log(today);
if(today === 0 || today === 6) {
    console.log("주말");
} else {
    console.log("평일");
}

// 내장메소드와 내장객체 실습4
console.log(Math.floor(Math.random()*11));