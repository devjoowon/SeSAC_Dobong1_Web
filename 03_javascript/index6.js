for(let i = 0; i < 10; i++) {
    console.log(`안녕 ${i}`);
}

let n = 11;
let sum = 0;
for(let i = 1; i <= n; i++) {
    sum += i;
}
console.log(sum);

// 배열과 함께 사용하는 for문
let fruits = ['사과', '망고', '오렌지', '망고스틴']
console.log(fruits.length); //4
for(i = 0; i < fruits.length; i++) {
    console.log('I like', fruits[i]);
}

// 배열 요소의 함 구하기
let numsArr = [99, 98, 75, 38];
let sum2 = 0;
for(i = 0; i < numsArr.length; i++) {
    sum2 += numsArr[i];
}
console.log(sum2);

// while문
let n2 = 1; // while의 초기화 식
while(n2 <= 5) { //조건식
    console.log(n2); //실행문
    n2++; //증감식
}

n2 = 10;
while(n2 > 4) {
    console.log(n2);
    n2--;
}

n2 = 1;
while(n2 <= 10) {
    if(n2 % 2 == 0) {
        console.log(n2);
    }
    n2++;
}

n2 = 10;
while(n2 >= 1) {
    if(n2 % 2 == 1) {
        console.log(n2);
    }
    n2--;
}

let b = 0;
while(true) {
    console.log(b);
    b++;
    if(b > 10) break;
}

let sum3 = 0;
for(let i = 0; i < 10; i++) {
    if(i % 2 === 0) continue; // 짝수일 때 반복하지 않고 다음 반복으로 넘김
    sum3 += i;
}
console.log(sum3);

let n3 = 0;
while (confirm('계속 진행할까요?')) {
    n3++;
    alert(`${n3}번째 창`)
}