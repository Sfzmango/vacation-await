DROP DATABASE IF EXISTS vacation_db;

CREATE DATABASE vacation_db;

USE vacation_db;

-- creates the user table
CREATE TABLE user (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR NOT NULL,
  password STRING NOT NULL
);

-- creates the comment table
CREATE TABLE comment (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    plan_id INT,
    FOREIGN KEY (user_id)
    REFERENCES user(id),
    FOREIGN KEY (plan_id)
    REFERENCES plan(id)
);

-- creates the plan table
CREATE TABLE plan (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  user_id INT,
  location_id INT,
  location_name VARCHAR NOT NULL,
  restaurant_id INT,
  activity_id INT,
  hotel_id INT,
  FOREIGN KEY (user_id)
  REFERENCES user(id),
  FOREIGN KEY (location_id)
  REFERENCES location(id),
  FOREIGN KEY (restaurant_id)
  REFERENCES restaurant(id),
  FOREIGN KEY (activity_id)
  REFERENCES activity(id),
  FOREIGN KEY (hotel_id)
  REFERENCES hotel(id)
);

-- create the restaurant table
CREATE TABLE restaurant (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR NOT NULL,
  description TEXT NOT NULL,
  price DECIMAL,
  rating INT,
  address STRING NOT NULL,
  contact_number INT,
  reviews STRING NOT NULL,
  opening_hour INT,
  image_url VARCHAR NOT NULL
);

-- creates the hotel table
CREATE TABLE hotel (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR,
  price DECIMAL,
  rating INT,
  address STRING,
  contact_number INT,
  reviews STRING,
  image_url VARCHAR,
  web_url VARCHAR
);

-- creates the activity table
CREATE TABLE employee (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR NOT NULL,
  description TEXT NOT NULL,
  price DECIMAL,
  rating INT,
  adress STRING,
  contact_number INT,
  reviews STRING,
  image_url VARCHAR NOT NULL,
  opening_hour INT,
  web_url VARCHAR NOT NULL
);

