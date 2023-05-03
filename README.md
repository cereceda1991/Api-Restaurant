# Restaurant API 🍴🍝🍔
 <img src="https://img.shields.io/badge/Express.js-v4.17.1-green" alt="Express.js">  <img src="https://img.shields.io/badge/PostgreSQL-v13.3-blue" alt="PostgreSQL"> 
<img src="https://img.shields.io/badge/Sequelize-v6.6.5-yellow" alt="Sequelize"> 
 <img src="https://img.shields.io/badge/JSON%20Web%20Tokens-v8.5.1-orange" alt="JSON Web Tokens"> 
<img src="https://img.shields.io/badge/bcrypt-v5.0.1-red" alt="bcrypt"> 
<img src="https://img.shields.io/badge/CORS-v2.8.5-blueviolet" alt="CORS"> 
<img src="https://img.shields.io/badge/Helmet-v4.6.0-blue" alt="Helmet"> 
 <img src="https://img.shields.io/badge/HPP-v0.2.3-lightgrey" alt="HPP"> 
<img src="https://img.shields.io/badge/Express%20Validator-v6.12.0-green" alt="Express Validator">  
<img src="https://img.shields.io/badge/Dotenv-v10.0.0-yellowgreen" alt="Dotenv"> 
<img src="https://img.shields.io/badge/Morgan-v1.10.0-blue" alt="Morgan">  <img src="https://img.shields.io/badge/Nodemon-v2.0.12-red" alt="Nodemon"><img src="https://img.shields.io/badge/Postman-v9.0.5-orange" alt="Postman"> 


This is a RESTful API built with Node.js, Express.js, and Sequelize for managing meals and orders of a restaurant.

# Technologies Used 💻

<br>🌐 Express.js - Node.js web application framework
<br>🐘 PostgreSQL - relational database management system
<br>🗃️ Sequelize - Node.js ORM for SQL databases
<br>🔒 JSON Web Tokens - standard format for authentication tokens
<br>🔑 bcrypt - hashing algorithm for passwords
<br>🌍 CORS - middleware for enabling cross-origin resource sharing
<br>🔰 Helmet - set of security features for Node.js web applications
<br>🛡️ HPP - middleware for protecting against flooding denial-of-service attacks
<br>📝 Express Validator - middleware for data validation
<br>📦 Dotenv - module for loading environment variables from a .env file
<br>📊 Morgan - middleware for HTTP request logging
<br>🔒 Nodemon - tool for automatically restarting the application in development
<br>🧑‍💻 Postman - platform for testing APIs

## Features ⭐️

- User registration and authentication with JSON Web Tokens 🔑
- CRUD operations for users, restaurants, meals, and orders ✏️
- Rate limiting and validation of incoming requests with Express middleware 🚦
- Secure headers and protection against common web vulnerabilities with helmet and hpp 🛡️
- Error handling and logging with Morgan 📝
- PostgreSQL database with Sequelize ORM 🐘

## Installation 🛠️

To install the dependencies, run:

`npm install`


## Usage 🚀
To start the server, run:
<br>
<br>
`npm run start:dev` (development)<br>
`npm run start:prod` (production)<br>

Then, open your web browser and go to http://localhost:3000.

## Configuration ⚙️
The following environment variables can be set to customize the application:

`DB_DATABASE: the name of the PostgreSQL database to use.`<br>
`DB_USERNAME: the username to connect to the database.`<br>
`DB_PASSWORD: the password to connect to the database.`<br>
`DB_PORT: the port number to use for the database connection.`<br>
`DB_DIALECT: the dialect of the database (default is postgres).`<br>
`DB_HOST: the hostname of the database server (default is localhost).`<br>
<br>
`NODE_ENV: the environment mode of the application (development, production, or test).`<br>
`PORT: the port number to listen to (default is 3000).`<br>
<br>
`SECRET_JWT_SEED: the secret key used to sign JSON Web Tokens.`<br>
`JWT_EXPIRE_IN: the expiration time for JSON Web Tokens (default is 1d).`<br>


API Documentation 📖
Please refer to the API documentation for detailed information about the available routes and their parameters.
[API Documentation 📖](https://documenter.getpostman.com/view/26338219/2s93eVWtYQ)
