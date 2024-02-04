USE `portfolio-db`;

CREATE TABLE IF NOT EXISTS users (
                                     id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
                                     user_id VARCHAR(255) NOT NULL,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    age VARCHAR(50) NOT NULL,
    email VARCHAR(255) NOT NULL
    );


CREATE TABLE IF NOT EXISTS works (
                                     id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
                                     work_id VARCHAR(255) NOT NULL,
    work_title VARCHAR(50) NOT NULL,
    work_place_name VARCHAR(50) NOT NULL,
    location VARCHAR(255) NOT NULL,
    type VARCHAR(255) NOT NULL,
    duration VARCHAR(50) NOT NULL,
    status VARCHAR(255) NOT NULL,
    description VARCHAR(255) NOT NULL
    );

CREATE TABLE IF NOT EXISTS projects (
                                        id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
                                        project_id VARCHAR(255) NOT NULL,
    project_name VARCHAR(255) NOT NULL,
    project_description VARCHAR(255) NOT NULL,
    project_duration VARCHAR(255) NOT NULL,
    project_type VARCHAR(255) NOT NULL,
    project_skill VARCHAR(255) NOT NULL,
    github_link VARCHAR(255) NOT NULL

    );

CREATE TABLE IF NOT EXISTS classes (
                                       id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
                                       class_id VARCHAR(255) NOT NULL,
    semester VARCHAR(50) NOT NULL,
    class_name VARCHAR(50) NOT NULL,
    teacher_name VARCHAR(50) NOT NULL,
    skills VARCHAR(255) NOT NULL,
    description TEXT NOT NULL
    );


