/* Date 객체 */
// 현재 시간, 날짜에 대한 정보를 얻기 위해 사용
// 원하는 값으로 초기화 가능
let now = new Date();
console.log(now);

// new Date('날짜 문자열')
console.log(new Date('September 30, 2000 13:00:00'));
console.log(new Date(2002,3,2));
console.log(now.getFullYear(), '년');
console.log(now.getMonth() + 1, '월'); // 0~11
console.log(now.getDate(), '일');
console.log(now.getHours(), '시'); // 0~23
console.log(now.getMinutes(), '분'); // 0~59
console.log(now.getSeconds(), '초'); // 0~59
console.log(now.getMilliseconds(), '밀리초'); // 0~999
console.log(now.getDay(), '요일'); // 0(일)~6(토)

/* Math 객체 */
console.log(Math.PI); // 파이
console.log(Math.E); // 자연로그 e
console.log(Math.SQRT2); // 루트2

/* 메소드 */
console.log(Math.min(1,2,-4,-3,5));
console.log(Math.max(1,2,-4,-3,5));
console.log(Math.ceil(5.35)); // 올림
console.log(Math.floor(5.35)); // 내림
console.log(Math.round(5.35)); // 반올림
// 0 <= x < 1 사이의 랜덤수
console.log(Math.random());

// 0 <= x < 3
console.log(Math.random() * 3);
// 1<= x < 46
console.log(Math.floor(Math.random() * 45) + 1);

// object 관련 객체
const areaNum = {
    Seoul:'02',
    Incheon:'032',
    Busan:'051',
    Ulsan:'052',
    Gwangju:'062',
    Jeju:'064'
}
// 각각 key와 value를 뽑아서 "배열"로 반환하는 객체의 메소드
const area = Object.keys(areaNum);
const number = Object.values(areaNum);
console.log(area);
console.log(number);