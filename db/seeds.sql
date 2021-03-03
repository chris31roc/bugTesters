INSERT INTO Users (username, password, createdAt, updatedAt) VALUES ("bugtestersadmin", "1234", current_timestamp(), current_timestamp());

INSERT INTO Posts (username, post_title, createdAt) VALUES ("bugtestersadmin", "First Post!", current_timestamp());

INSERT INTO Comments (username, post_title, comment_body, createdAt) VALUES ("bugtestersadmin", "First Comment!", current_timestamp());