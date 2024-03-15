-- Active: 1707102382888@@127.0.0.1@3306@sesac

desc user;

show TABLES

ALTER Table user CHANGE userid user_id VARCHAR(20) NOT NULL;

CREATE TABLE post(
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(50) NOT NULL,
    content TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT NOW(),
    user_id INT NOT NULL,
    Foreign Key (user_id) REFERENCES user(id)
);

desc post;

CREATE Table comment(
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    comment TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT NOW(),
    user_id INT NOT NULL,
    post_id INT NOT NULL,
    Foreign Key (user_id) REFERENCES user(id),
    Foreign Key (post_id) REFERENCES post(id)
);

desc comment;

SELECT * FROM `user`;
SELECT * FROM `post`;
SELECT * FROM `comment`;

INSERT INTO post (title, content, user_id) VALUES
('First Post', 'This is the content of the first post.', 2),
('Second Post', 'This is the content of the second post.', 3),
('Third Post', 'This is the content of the third post.', 4);


INSERT INTO comment (comment, user_id, post_id) VALUES
('This is a comment on the first post.', 3, 1),
('This is another comment on the first post.', 4, 1),
('Comment on the second post.', 2, 2),
('Comment on the third post.', 3, 3);
