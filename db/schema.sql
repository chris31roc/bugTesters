DROP DATABASE IF EXISTS chat_app_db; 
CREATE DATABASE chat_app_db; 
USE chat_app_db; 

CREATE TABLE `rooms` (
    `room_ID` INTEGER(2) NOT NULL, 
    `room_name` VARCHAR(10) NOT NULL
);

INSERT INTO `rooms` (`room_ID`, `room_name`)
VALUES (1, 'HTML'), (2, 'CSS'), (3, 'JavaScript');

CREATE TABLE `users` (
    `user_ID` INTEGER(2) NOT NULL AUTO_INCREMENT, 
    `user_name` VARCHAR(10) NOT NULL, 
    `room` INTEGER(2) NOT NULL, 
    `created at` DATETIME NOT NULL, 
    `deleted at` DATETIME NOT NULL,
    PRIMARY KEY(`user_ID`)
);

SELECT `user_ID`, `user_name`, `room`, `room_ID`
FROM `users`
INNER JOIN `rooms` ON users.room = rooms.room_ID;

CREATE TABLE messages (
    `message_ID` INTEGER(2) NOT NULL AUTO_INCREMENT, 
    `message_content` VARCHAR(10000) NOT NULL, 
    `user` INTEGER(2) NOT NULL, 
    `created at` DATETIME NOT NULL
);

SELECT `message_ID`, `messahe_content`, `user`, `user_ID`
FROM `messages`
INNER JOIN `users` ON messages.user = users.user_ID;