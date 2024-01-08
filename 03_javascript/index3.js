/*
var
- 재선언, 재할당 모두 가능
- 재선언: 바람직하지 않음(중복선언)
*/
var name = '홍길동';
var name = '홍길동2';
console.log(name);

/* 
let
- 재선언 불가능
- 재할당 가능
- 초기화 작업 필요 없음(최초 선언시 값 할당 하지 않아도 됨)
*/
let c;
c = 10; // 재할당
console.log(c);

/*
const
- 재선언, 재할당 모두 불가능
- 변하지 않는 값을 변수에 저장할 때 사용
- 최초 선언시 반드시 값 할당 (초기화)
*/
const b = 10;

/*
비교 연산자
([참고] = 은 대입연산자)
1. == (값만 비교하는 연산자)

*/