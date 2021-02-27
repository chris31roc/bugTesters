-- Drops the chatApp if it exists currently --
DROP DATABASE IF EXISTS chat_app_DB;
-- Creates the "chatApp" database --
CREATE DATABASE chat_app_DB;

-- Make it so all of the following code will affect chat_app_DB --
USE chat_app_DB; 

-- Creates chatroom table within the chat_app_DB -- 
CREATE TABLE chatroom (
    -- Makes a numeric column called "chatroom_ID" which cannot contain null --
    chatroom_ID INTEGER(2) NOT NULL, 
    -- Makes a string column called "chatroom_name" which cannot contain null --
    chatroom_name VARCHAR(10) NOT NULL
); 

-- Creates new row containing data in all named columns -- 
INSERT INTO chatroom (chatroom_ID, chatroom_name)
VALUES (1, "HTML"); 

INSERT INTO chatroom (chatroom_ID, chatroom_name)
VALUES (2, "CSS"); 

INSERT INTO chatroom (chatroom_ID, chatroom_name)
VALUES (3, "JavaScript"); 

-- Create user table within the chat_app_DB -- 
CREATE TABLE user (
    -- Makes a numeric column called "user_ID" which cannot contain null --
    user_ID INTEGER(2) NOT NULL AUTO_INCREMENT, 
    -- Makes a string column called "username" which cannot contain null --
    username VARCHAR(20) NOT NULL,
    -- Makes a numeric column called "chatroom_ID"
    chatroom_ID INTEGER(2) NOT NULL, 
    -- Makes a string column called "chatroom_name" which cannot contain null --
    chat_room VARCHAR(20) NOT NULL,
    -- Identify user_ID as primary key in case of duplicate username --
    PRIMARY KEY(user_ID)
); 

-- Create messages table within the chat_app_DB --
CREATE TABLE messages (
    -- Makes a numberic column called "messages_ID" which cannot contain null --
    messages_ID INTEGER(100) NOT NULL AUTO_INCREMENT, 
    -- Makes a string column called "message_content" which cannot contain null --
    message_content VARCHAR(10000) NOT NULL, 
    -- Makes a numeric column called "user_ID" which cannot contain null --
    user_ID INTEGER(2) NOT NULL, 
    -- Makes a string column called "username" which cannot contain null -- 
    username VARCHAR(20) NOT NULL,
    -- Makes a numeric column called "chatroom_ID"
    chatroom_ID INTEGER(2) NOT NULL, 
    -- Makes a string column called "chatroom_name" which cannot contain null --
    chat_room VARCHAR(20) NOT NULL
);

