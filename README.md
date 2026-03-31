# BASIC_FILE_OP_BACKEND
Backend file management system that supports file upload, view, and delete operations using Node.js, Express, and Multer.

# File Upload and Management Backend

## Description

This project is a backend file management system built using Node.js and Express. It allows users to upload files to the server, view uploaded files, and delete files from the server. Files are stored locally in the uploads directory and managed through REST API endpoints.

## Features

* Upload files to server
* View all uploaded files
* Delete files from server
* Files stored in local uploads folder
* REST API for file management

## Technologies Used

* Node.js
* Express.js
* Multer
* File System (fs module)
* Nodemon

## Project Structure

src/
controller/
file.controller.js
routes/
file.routes.js
uploads/
app.js
server.js
package.json

## API Endpoints

| Method | Endpoint                | Description    |
| ------ | ----------------------- | -------------- |
| POST   | /files/upload           | Upload a file  |
| GET    | /files/upload           | View all files |
| DELETE | /files/upload/:filename | Delete a file  |

## How to Run the Project

1. Clone the repository
2. Install dependencies
   npm install
3. Start the server
   npm start
4. Open browser or Postman
   http://localhost:3000/files/upload

## Future Improvements

* Add database integration
* Add authentication
* Upload multiple files
* File size and type validation
* Cloud storage integration (AWS S3)
* File download endpoint

## Author

Jaideep

