--Database creation

DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;

--Use database
USE burgers;

-- Create the table 
CREATE TABLE burgers (
  id int NOT NULL AUTO_INCREMENT,
  burger_name varchar(255) NOT NULL,
  devoured TINYINT NOT NULL DEFAULT 0,
  PRIMARY KEY (id)
);



