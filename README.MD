## Node and Express Tutorial

#### A big thanks to John Smilga for such an amazing tutorial and also to making me a better developer.

#### Contents

1. Node Tutorial
2. Express Tutorial
3. Task Manager (MongoDB, Mongoose)
4. Store API
5. JWT Basics

6. Jobs API
##### Register User
  - Validate - name, email, password - with Mongoose
  - Hash Password (with bcryptjs)
  - Save User
  - Generate Token
  - Send Response with Token

##### Login User
  - Validate - email, password - in controller
  - If email or password is missing, throw BadRequestError
  - Find User
  - Compare Passwords
  - If no user or password does not match, throw UnauthenticatedError
  - If correct, generate Token
  - Send Response with Token

##### Mongoose Errors
  - Validation Errors
  - Duplicate (Email)
  - Cast Error

##### Security
  - helmet
  - cors
  - xss-clean
  - express-rate-limit
