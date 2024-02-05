-- ---------database 관련 명령어

-- DB 목록 확인
SHOW DATABASES;


-- DATABASE 삭제
DROP DATABASE sesac;
DROP DATABASE mydatabase;
DROP DATABASE dobong;

-- CREATE : DATABASE 생성
create database sesac DEFAULT CHARACTER set utf8 COLLATE utf8_general_ci;
/* 
dobong 이라는 데이터 베이스를 생성하는데,
문자열셋으로 utf8mb4를, 콜레이션으로 utf8mb4_unicode_ci를 사용!
utf8mb4 는 utf8보다 더많은 문자 지원(이모지 저장 가능)
>>이모지를 저장하는 DB라면 utf8mb4, 이모지를 저장하지 않아도 된다면 utf8
 */
create database dobong character set utf8mb4 COLLATE utf8mb4_unicode_ci;

-- 이 데이터 베이스를 사용하겠다!(use 명령어, 데이터 베이스 사용 선언)
USE sesac;

-- ---------table 관련 명령어
-- 1. 테이블 생성
/* 
create table products(
    속성1 값형식 제약조건,
    속성2 값형식 제약조건
)
 */

--  제약조건
-- NOT NULL: NULL 허용 X
-- AUTO_INCREMENT: 자동 숫자 증가
-- PRIMARY KEY: 기본키(중복 허용x, null값 허용 x)
-- DEFAULT: 기본값
-- UNIQUE: 중복허용 x, null값 허용
create table products(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    model_model VARCHAR(15) NOT NULL,
    series VARCHAR(30) NOT NULL
);

-- 테이블 목록 확인
show tables;

-- products 테이블에 어떤 컬럼이 있는지 확인(테이블 구조 확인)
desc products;

-- 테이블 삭제
drop table products;
TRUNCATE TABLE products;

-- 테이블 변경(수정) ALTER
-- 1. 컬럼 추가
ALTER TABLE products ADD new_column VARCHAR(20);
-- 2. 특정 컬럼 수정 (varchar 를 int 로 수정)
ALTER TABLE products MODIFY new_column INT;
-- 3. 특정 컬럼 삭제
ALTER TABLE products DROP new_column;

-- -----------------DML
-- Data manipulation language (데이터 조작어)
-- user TABLE
-- id: int not null AUTO_INCREMENT PRIMARY KEY, 
-- name: VARCHAR(10) not null, 
-- age:int not null, 
-- address: varchar(100))

create table user(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(10) NOT NULL,
    age INT NOT NULL,
    address varchar(100)
);

show tables;
desc user;

-- CREATE(데이터 추가) >>INSERT INTO
-- INSERT INTO 테이블이름 (컬럼1, 컬럼2 ,..) VALUES(값1, 값2, ..);
insert into user (name, age, address) VALUES('김민정',20,'서울특별시 마포구');
insert into user (name, age, address) VALUES('이한이',30,'서울특별시 강남구');
insert into user (name, age, address) VALUES('이지은',22,'대구광역시 동구');
insert into user (name, age, address) VALUES('윤세희',25,'부산광역시 관악구');
insert into user (name, age, address) VALUES('박수진',19,'서울특별시 노원구');
insert into user (name, age, address) VALUES('박찬희',23,'서울특별시 강서구');
insert into user (name, age, address) VALUES('이지수',32,'부산광역시 동구');
insert into user (name, age, address) VALUES('최솔희',37,'강원도 강릉시');
insert into user (name, age, address) VALUES('한소희',26,'충청남도 공주시');
insert into user (name, age, address) VALUES('권희수',4,'강원도 속초시');


select * from user; -- 테이블 전체 조회

-- 2. 데이터 수정
-- UPDATE 테이블이름 SET 데이터 어떻게 수정할건지 where 어떤 데이터를;
update user set name="김민지" where id=1;

-- 3. 데이터 삭제
-- DELETE FROM 테이블이름 where 삭제 조건;
DELETE FROM user WHERE id=1; -- where이후 조건에 따른 데이터 삭제
DELETE FROM user; -- 전체 데이터 삭제

-- 4. 데이터 조회(READ) select ~from ~
-- * : 전체
select * from user; -- user 테이블에서 전체 컬럼 조회
select name from user; -- 이름 컬럼만 조회
select name, age from user; -- 이름과 나이 컬럼 조회

-- where 절로 조건 적용
select * from user where age >=25;
select * from user where id=3;
select name from user where id=3;
select id, age from user where name ='이지은';

-- order by: 데이터 정렬
-- desc: 내림차순
-- asc: 오름차순(default)
select * from user ORDER BY age DESC;

select * from user where id>6 order by age;

-- LIKE: 문자열 패턴 조회(where와 함께 쓰임)
--'서울로 시작하는 주소 찾기'
select * from user where address LIKE '서울%';

-- 이름의 마지막 글자가 '희'인 사람
select * from user where name LIKE '__희';

-- 주소에 광역시가 들어가는 사람
select * from user where address LIKE '%광역%';

-- 이름에 희가 들어가는 사람 이름컬럼만 조회, age 기준 내림차순 정렬
select name from user where name LIKE '%희%';

-- LIMIT: 데이터의 개수 제한
select * from user LIMIT 3;
select * from user where address LIKE '서울%' LIMIT 2;

-- BETWEEN A AND B: A와 B의 사이값 조회(A, B는 포함)
select * from user where age BETWEEN 25 AND 30;

--IN(리스트) : 리스트의 요소와 일치하면 참
select * from user where age IN(20,21,22,23);

-- IS NULL /IS NOT NULL
INSERT INTO user (name, age) VALUES('서현승',28);
select * from user where address is null;
select name, address from user where address is not null;

-- 논리 연산자: AND, OR, NOT
-- 주소가 null이 아니면서 age가 25보다 큰 전체 속성 검색
select * from user where address is not null AND age > 25;
select * from user where address is not null OR age > 25;

-- 이씨 이면서 나이가 22살인 사람 (이름 속성만 출력)
select name from user where name LIKE '이%' and age=22;

-- distinct(중복 튜플 제거)
select age from user;
select distinct age from user;