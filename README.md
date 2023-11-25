# TASK MANAGEMENT SYSTEM 
This repository contains the backend code for a task management system. The backend is responsible for handling tasks, including creation, retrieval, updating, and deletion. It exposes APIs that can be consumed by frontend applications or other services.

# Technologies Used
Programming Language: JavaScript
Database: MongoDB Atlas
Framework: Express.js for Node.js

# Install Dependencies
In package.json all dependencies are mentioned like dotenv, mongoose, express and nodemon. User using this project have to install only node modules by npm i command in his/her terminal.

# Configure Environment Variables:
Create a .env file in database url string is mentioned which is generated from a cluster in mongodb atlas and a localhost port.

# Run the Application:
Nodemon to be installed in this project. To run the code write npm run dev command in terminal.

# API Endpoints
1. Create a Task
Endpoint: POST /api/v1/task

2. Get All Tasks
Endpoint: GET /api/v1/task

3. Update a Task
Endpoint: PUT /api/v1/task/:id

4. Delete a Task
Endpoint: DELETE /api/v1/task/:id

5. Get a Task by Id
Endpoint: GET /api/v1/task/:id

# Postman
All above mentioned endpoints have to be tested in postman for their correct operations.