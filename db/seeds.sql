INSERT INTO Users (username, password, createdAt) VALUES ("bugtesteradmin", "1234", current_timestamp());

INSERT INTO Posts (username, post_title, post_body, post_link,createdAt) VALUES ("bugtesteradmin", "First Post!", "Yippie!", "It works!", current_timestamp());

INSERT INTO Comments (username, post_id, comment_body, createdAt) VALUES ("bugtesteradmin", 1, "First Comment!", current_timestamp()); 