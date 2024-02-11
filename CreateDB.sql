------------------------------------Create Table in psql

CREATE TABLE users (
  ID SERIAL PRIMARY KEY,
  name VARCHAR(30),
  email VARCHAR(30)
);

------------------------------------Insert records--------


INSERT INTO users (name, email)
  VALUES ('Indrajit', 'indrajitransing@gmail.com'), ('George', 'george@example.com');

INSERT INTO users (name, email)
  VALUES ('Jerry', 'jerry788@gmail.com'),('Mike','mike8898@gmail.com');