// 1. string (문자열)
/*  - 텍스트 정보
    - 숫자, 특수문자도 따옴표 안에 있으면 문자열
    - 따옴표 안에 따옴표가 있다면?
        "안에 '작음따옴표'가 있어요"
        '안에 "큰따옴표"가 있어요'
*/

let myName = "주원";
let number1 = '128';
console.log(myName);
console.log(number1);

// 2. number (숫자)
let number2 = 128;
let opacity = 0.7;
console.log(number2);
console.log(opacity);

// NaN (not a number)
console.log('apple' - 3);

// 3. boolean
// true 나 false
let checked = true;
let isShow = false;
console.log(checked, isShow);

// 4. undefined와 null
// 값도 없고 타입도 지정되어있지 않은 상태
let undef;
console.log(undef);

let empty = null;
console.log(empty);

// 5. array []
let fruits = ["Orange", "Pineapple", "Apple", "Banana"];
console.log(fruits[2]);

let data = [22, '22', false];
console.log(data[2]);

// 2차원 배열
const korean = [
    ["가", "나", "다"],
    ["라", "마", "바"],
    ["사", "아", "자"]
]
console.log(korean[0][1]);

const letters = [
	["사", "스", "자", "크"],
	["진", "안", "리", "이"],
	["가", "수", "림", "나"],
	["아", "으", "차", "운"],
];
console.log(letters[3][0], letters[1][3], letters[0][1], letters[0][3], letters[2][2]);

// 3차원 배열
const nums = [
    [
        [1, 2, 3],
        [4, 5, 6]
    ],
    [
        [7, 8, 9],
        [10, 11, 12]
    ]
]
console.log(nums[1][0][1]); //8

// 6. object {}
// 배열은 순서가 있는 반면, object는 key-value 형태로 저장
// 데이터에 접근 시 key이름을 이용해서 접근
// {키이름:val1, 키이름2:val2}
let cat = {
    name: '나비',
    age: 2,
    isCute: true,
    mew: function(){
        return '냐옹'
    }
}
//점 표기법
console.log(cat.name);
console.log(cat.age);
console.log(cat.isCute);
console.log(cat.mew());
cat.like = 'tuna';
cat.age = 3;
console.log(cat);

//대괄호 표기법 - key에 쌍따옴표 써야 함
let dog = {
    name: 'coco',
    isPoodle: true,
    age: 3,
    sibling: ['max', 'lucy']
}
console.log(dog.name);
console.log(dog["name"]);
console.log(dog["age"]);
console.log(dog["sibling"][1]);

let myInfo = {
    name: '주원',
    age: 24,
    isSmart: true
}
console.log(myInfo);

// let mathScore = prompt("수학 점수를 입력 하세요"); //'50' (문자)
// mathScore = Number(mathScore); //50 (숫자로 변환)
// let engScore = prompt("영어 점수를 입력 하세요");
// engScore = Number(engScore);
// let avg = (mathScore + engScore) / 2;
// console.log(avg);

// typeof 실습
console.log(typeof 10 + " isn't " +  typeof '냐옹' + " data type.");
console.log("typeof 를 boolean 이나 null 에 사용하면, " + typeof null + " 결과를 얻을 수 있습니다");

// 형변환 실습
let mathScore = "77";
let engScore = "88";
mathScore = Number(mathScore);
engScore = Number(engScore);
let avgScore = (mathScore + engScore) / 2;
console.log(avgScore);