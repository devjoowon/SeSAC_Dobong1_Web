// 문자열에서 사용 가능한 속성/메소드
let str1 = "Strawberry Moon";
let str2 = "    Strawberry Moon  ";

// 문자열 인덱싱
console.log(str1[5]);
console.log('str1 문자열 길이', str1.length);
console.log('str2 문자열 길이', str2.length);

let msg = "Happy Birthday~";
let userId = "     user123   ";
console.log(msg.toLowerCase());
console.log(msg.toUpperCase());
console.log(str2.trim().length);
console.log(userId.trim());

let mango = "applemango";
console.log(mango.indexOf('apple')); // 0
console.log(mango.indexOf('mango')); // 5
console.log(mango.indexOf('x')); // -1 (문자열에 포함되지 않은 문자열이 매개변수로 들어가면 -1 반환)

console.log(mango.slice(5)); // mango
console.log(mango.slice(1,3)); // pp
console.log(mango.slice(-4)); // ango

let msg2 = 'Wow~ It is so amazing!'
console.log(msg2.replace('Wow', 'Hey'));
console.log(msg2.replaceAll('o', 'O'));

let date = '2024.1.10';
console.log(date.replaceAll('.', '-s'));

console.log('abc'.repeat(3));

console.log(date.split('.'));
console.log('============================');
//---------------------------------------

// 배열 관련 메소드
/* 
  - length (속성)
  - push, pop, unshift, shift, indexOf, join, reverse
  - includes, map, forEach, find, filter
  - for ~ of (함수 아님)
*/

/* push, pop, unshift, shift - 배열의 맨뒤/맨앞 값 넣기/빼기 */
let arr1 = [1, 2, 3, 4, 5];
let arr2 = ["quakka", "puppy", "rabbit", "hamster"];

arr1[5] = 6; // 끝 인덱스를 알아야 한다는 번거로움이 있음

arr1 = [1, 2, 3, 4, 5];
arr1.push(6); // 끝 인덱스를 몰라도 넣을 수 있음
arr1.push(7);
arr1.push(10);
arr1.pop();
arr1.pop();
arr1.pop();
console.log(arr1);

arr2.unshift("cat"); // 배열 맨 앞에 cat 넣기
arr2.shift(); // 배열 맨 앞의 값 빼기
console.log(arr2);

/* includes */
// 매개변수로 들어간 요소가 배열에 있으면 true, 없으면 false
console.log(arr2.includes("rabbit"));

/* indexOf - 문자열의 indexOf와 동일 */
console.log(arr2.indexOf("puppy"));

/* reverse - 배열 순서 뒤집어줌 (실제 배열이 변경됨) */
arr1.reverse();
console.log(arr1);

/* join - 문자열의 split 메소드와 반대 (배열을 문자열로 변경) */
//let str1 = "Strawberry Moon";
str1 = str1.split('');
console.log(str1);
str1 = str1.join('+');
console.log(str1);

/* 반복문 - for of & forEach */
let arr3 = [5, 6, 7, 8, 9];
let alphabets = ["a", "b", "c", "d", "e", "f"];
//for
for(let i = 0; i < arr3.length; i++) {
    console.log(arr3[i]);
}

for(let a of arr3) { // a 자체가 arr3의 요소 하나하나를 의미
    console.log(a);
}

for(let alphabet of alphabets) {
    console.log(alphabet);
}

// forEach
/*
배열.forEach(function (element,index,array){

})
*/
arr3.forEach(function(element, index, arr){
    console.log(element, index, arr);
})

/* filter - return 이후 조건을 만족하는 요소들을 모아서 "배열"로 반환 */
//let arr2 = ["quakka", "puppy", "rabbit", "hamster"];
// 1. 함수표현식
let six = arr2.filter(function(word){
    return word.length === 6;
})
// 2. 화살표 함수 & return 있는 ver.
let six2 = arr2.filter((word)=>{
    return word.length === 6;
})
// 3. 화살표 함수 & 중괄호 없는, return 없는 ver.
let six3 = arr2.filter((word) => word.length === 6)

console.log(arr2);
console.log(six);
console.log(six2);
console.log(six3);

/* map - 배열 내의 모든 요소에 대해 함수 호출한 결과를 모아서 "배열"로 반환 */
arr4 = [1, 2, 3, 4, 5];
let multiArr = arr4.map(function(element){
    return element * 3;
})
console.log(multiArr);

/* find - 배열에서 특정 조건을 만족하는 첫번째 "요소" 반환 */
let findResult = multiArr.find(function(element){
    return element > 10;
})
console.log(findResult);