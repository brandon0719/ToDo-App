CREATE DATABASE todo;

--\c todo

CREATE TABLE todo ( -- SCHEMA
    todo_id SERIAL PRIMARY KEY,
    description VARCHAR(255)
);