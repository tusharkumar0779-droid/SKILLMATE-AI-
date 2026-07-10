-- Create Users Table
CREATE TABLE IF NOT EXISTS users (

    id SERIAL PRIMARY KEY,

    uid VARCHAR(255) UNIQUE NOT NULL,

    email VARCHAR(255) UNIQUE NOT NULL,

    password TEXT NOT NULL,

    type VARCHAR(50) NOT NULL,

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP

);

-- Create Courses Table
CREATE TABLE IF NOT EXISTS courses (

    id SERIAL PRIMARY KEY,

    title VARCHAR(255) NOT NULL,

    description TEXT,

    category VARCHAR(100),

    duration VARCHAR(100),

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP

);

-- Create Roadmaps Table
CREATE TABLE IF NOT EXISTS roadmaps (

    id SERIAL PRIMARY KEY,

    course_id INTEGER REFERENCES courses(id) ON DELETE CASCADE,

    title VARCHAR(255),

    step_number INTEGER,

    description TEXT

);