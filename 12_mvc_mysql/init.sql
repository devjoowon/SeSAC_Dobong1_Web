-- Active: 1707102382888@@127.0.0.1@3306@sesac

SHOW TABLES;

CREATE TABLE visitor (
    id int PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(10) NOT NULL,
    comment MEDIUMTEXT
);

DESC visitor;

INSERT INTO visitor(name, comment) VALUES('joowon', 'hi~');
INSERT INTO visitor(name, comment) VALUES('박주원', '반가워용');


SELECT * FROM visitor;

#########[DCL]#########
-- ----- 새로운 user 만들기1
CREATE USER 'sesac'@'%' IDENTIFIED BY '1234';
ALTER USER 'sesac'@'%' IDENTIFIED WITH mysql_native_password BY '1234';
-- 비밀번호 바꾸고 싶다면!

-- ----- 새로운 user 만들기2
-- 위의 두줄을 한번에 쓰는 법
CREATE USER 'sesac'@'%' IDENTIFIED WITH mysql_native_password BY '1234';

GRANT ALL PRIVILEGES ON *.* TO 'sesac'@'%' WITH GRANT OPTION;
-- 모든 DB에 접근 가능하도록, sesac 계정에 DB접근 권한을 부여

FLUSH PRIVILEGES;
-- 현재 사용 중인 sql 캐시를 지우고 새로운 설정 적용