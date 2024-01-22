// class : 오브젝트를 만들 수 있는 틀!
/*
    속성
     - 만들어진 연도 year
     - 집의 이름 name
     - 창문의 개수 window
    메소드
     - 건물의 나이 출력 getAge()
     - 창문의 개수 출력 getWindow()
*/

class House {
    constructor(year, name, window) {
        this.year = year;
        this.name = name;
        this.window = window;
    }

    // 메소드
    getAge() {
        console.log(`${this.name}은 건축한지 ${2024-this.year}년 됐어요.`);
    }
    getWindow() {
        console.log(`${this.name}의 창문 개수는 ${this.window}개에요.`);
    }
}

// const house1 = {
//     name: 'old',
//     year: 1789,
//     window: 1,
//     함수 ~~~
// };
const house1 = new House(1789, 'old', 1);
house1.getAge();
house1.getWindow();
console.log(house1.name);

const house2 = new House(2015, '자이', 10);
house2.getAge();
house2.getWindow();

console.log("-----------------------");

// extends 키워드를 사용해서 상속
// House 클래스의 함수와 속성을 사용할 수 있음
// House << Apartment
class Apartment extends House {
    constructor(year, name, window, floor, windowMaker) {
        super(year, name, window);
        this.floor = floor;
        this.windowMaker = windowMaker;
    }

    getAptInfo() {
        return `${this.year}년에 지어진 ${this.name}.
        총 층수는 ${this.floor}, 창문의 개수는 ${this.window},`;
    }

    // overriding (덮어쓰기)
    // 부모 클래스(House)의 메소드를 이름은 똑같이 쓰고 싶지만, 내용은 다르게 만들고 싶을 때! (메소드 재정의)
    getWindow() {
        return `${this.name}의 창문은 ${this.windowMaker}에서 만들었고, 개수는 ${this.window}개에요.`
    }

    // getAge() 메소드는 상속받아서 사용 가능
}

const ap1 = new Apartment(2022, '래미안', 19, 50, 'KCC');
console.log(ap1.getWindow()); // overriding으로 메소드 재정의 한 것
console.log(ap1.getAptInfo()); // 새로 만든 것
ap1.getAge(); // 상속 받은 것
console.log(ap1);

console.log("-------------------------------------------")
// 실습. Shape 클래스 만들기
class Shape{
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    getArea() {
        return `${this.width * this.height}`;
    }
}

let rec1 = new Shape(3,4);
console.log(rec1.getArea());

class Rectangle extends Shape{
    constructor(width, height) {
        super(width, height)
    }

    getDiagonal() {
        return `${Math.sqrt((this.width)*(this.width) + (this.height)*(this.height))}`;
    }
}
let rec2 = new Rectangle(3,4);
console.log(rec2.getDiagonal());

class Triangle extends Shape{
    constructor(width, height) {
        super(width, height)
    }

    getArea() {
        return `${this.width * this.height * 0.5}`;
    }
}
let tri = new Triangle(3,4);
console.log(tri.getArea());

class Circle extends Shape{
    constructor(width, height, radius) {
        super(width, height);
        this.radius = radius;
    }

    getArea() {
        return Number(`${this.radius * this.radius * Math.PI}`);
    }
}
let cir = new Circle(3,4,5);
console.log(cir.getArea());