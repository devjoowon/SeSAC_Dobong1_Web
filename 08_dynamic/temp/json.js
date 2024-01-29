const obj = `{
    "model": "아이오닉",
    "price": 50000000,
    "isElectric": true,
    "option": ["사이드미러", "스마트 스크린"]
}`;

console.log(obj);
console.log(typeof obj); // string
console.log(obj.model); // 문자값(string)이기 때문에 undefined가 뜰 것임, 실제 객체(object)로 변환해주어야 함
console.log("=================================");
// JSON.parse(실제 json 데이터) : json -> object
const carInfo = JSON.parse(obj);
console.log(carInfo);
console.log(typeof carInfo); // object
console.log(carInfo.model);
console.log("=================================");

// JSON.stringify(객체) : object -> json
const carJson = JSON.stringify(carInfo);
console.log("json1", carJson);
const carJson2 = JSON.stringify(carInfo, null, 5); // 숫자는 들여쓰기 칸 수
console.log("json2", carJson2);
console.log(carJson2.model);
