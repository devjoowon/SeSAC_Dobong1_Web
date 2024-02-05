-- prac01
use dobong;

create table member(
    id VARCHAR(20) NOT NULL PRIMARY KEY,
    name VARCHAR(5) NOT NULL,
    age INT,
    gender VARCHAR(2) NOT NULL,
    email VARCHAR(50),
    promotion VARCHAR(2) DEFAULT 'x'
);

SHOW TABLES;
DESC MEMBER;

-- prac02
ALTER TABLE member MODIFY id VARCHAR(10);
ALTER TABLE member DROP age;
ALTER TABLE member ADD interest VARCHAR(100);

-- prac03
CREATE TABLE user(
    id VARCHAR(10) NOT NULL PRIMARY KEY,
    pw VARCHAR(20) NOT NULL,
    name VARCHAR(5) NOT NULL,
    gender ENUM('F', 'M', '') DEFAULT '',
    birth DATE NOT NULL,
    age INT(3) NOT NULL DEFAULT 0
);

DESC USER;

-- prac04
SELECT * FROM user;
INSERT INTO user (id, pw, name, gender, birth, age) VALUES('hong1234','8o4bkg','홍길동', 'M', '1990-01-31', 33);
INSERT INTO user (id, pw, name, gender, birth, age) VALUES('sexysung','87awjkdf','성춘향', 'F', '1992-03-31', 31);
INSERT INTO user (id, pw, name, gender, birth, age) VALUES('power70','qxur8sda','변사또', 'M', '1970-05-02', 53);
INSERT INTO user (id, pw, name, gender, birth, age) VALUES('hanjo','jk48fn4','한조', 'M', '1984-10-18', 39);
INSERT INTO user (id, pw, name, gender, birth, age) VALUES('widowmaker','38ewifh3','위도우', 'F', '1976-06-27', 47);
INSERT INTO user (id, pw, name, gender, birth, age) VALUES('dvadva','k3f3ah','송하나', 'F', '2001-06-03', 22);
INSERT INTO user (id, pw, name, gender, birth, age) VALUES('jungkrat','4ifha7f','정크랫', 'M', '1999-11-1', 24);

-- prac05
SELECT *
FROM user
ORDER BY birth ASC;

SELECT *
FROM user
WHERE gender LIKE 'M'
ORDER BY name DESC;

SELECT id, name
FROM user
WHERE birth LIKE '199%';

SELECT *
FROM user
WHERE birth LIKE '%-06-%'
ORDER BY birth ASC;

SELECT *
FROM user
WHERE gender LIKE 'M'
AND birth LIKE '197%';

SELECT *
FROM user
ORDER BY age DESC
LIMIT 3;

SELECT *
FROM user
WHERE age >= 25 && age <= 50;

UPDATE user
SET pw='12345678'
WHERE id = 'hong1234';

DELETE FROM user
WHERE id = 'jungkrat';