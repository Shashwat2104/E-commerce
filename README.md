# Ecommerce API

# Overview
This project will deliver a comprehensive e-commerce API set that enables seamless product and category management, user authentication, secure cart management, and order processing. The integration of MongoDB as the database and token management system ensures efficient data storage and user authentication with minimal server-side setup.

## Backend Deploy
https://triveous-4qqx.onrender.com/

## Swagger UI
https://triveous-4qqx.onrender.com/api-docs/

# Video Demonstration
https://drive.google.com

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
  - [Authentication](#authentication)
  - [Routes](#routes)
- [API Documentation](#api-documentation)

## Features

- User registration and login with JWT authentication.
- Product management: Add, retrieve, and search products by category.
- Cart management: Add, remove, and update product quantities in the cart.
- Order processing: Place orders and retrieve order history.

## Technologies Used

- **Node.js**: A JavaScript runtime for server-side development.
- **Express.js**: A web application framework for Node.js.
- **MongoDB**: A NoSQL database for storing data.
- **JWT**: JSON Web Tokens for authentication.
- **Swagger**: API documentation tool.
- **Other Dependencies**: Various Node.js libraries and modules.

## Getting Started

### Prerequisites

Before getting started, make sure you have the following installed:

- Node.js: [Download Node.js](https://nodejs.org/)
- MongoDB: [Download MongoDB](https://www.mongodb.com/try/download/community)

### Installation

1. Clone the repository:

   ```
   git clone https://github.com/Shashwat2104/E-commerce.git
   ```
   
2. Navigate to the project directory:
   ```
   cd Ecommerce-Api
   npm init -y
   ```
   
3. Install dependencies:
   ```
   npm install express mongoose bcrypt jsonwebtoken swagger-jsdoc swagger-ui-express
   ```

4. Application Start
   ```
   node index.js
   ```


## Usage
### Authentication
To use protected routes, you must authenticate by obtaining a JWT token. Use the /users/login route to log in and get the token.


## Routes
### User Routes
```
User Registration: POST /users/register
User Login: POST /users/login
```
### Product Routes
```
Add a Product: POST /products/addproduct
Get Product Categories: GET /products/productscategory
Get Products: GET /products/allproducts
Get Product by ID: GET /products/product/{id}
```
### Cart Routes
```
Add to Cart: POST /cart/add/{productId}
Remove from Cart: DELETE /cart/remove/{productId}
Get Cart Contents: GET /cart/allcartitems
Increase Product Quantity in Cart: POST /cart/incquantity/{productId}
Decrease Product Quantity in Cart: POST /cart/decquantity/{productId}
```

### Order Routes
```
Place an Order: POST /orders/placeorder
Get Order Details: GET /orders/orderdetails
Get Order by ID: GET /orders/order/{orderId}
```
## NOTE:  API rate limiting to prevent abuse and maintain server stability.

API RATE LIMIT used for the amount of time and no.of req valid for your application.

middleware --> express-rate-limit

##### Example Which I set in this assignment: 
 - max: 2, //no. of req users can make within the time
 - windowMs: 60000  // time frame in (ms)

After 60000ms you got the Error: "Too many requests, please try again later" with a 429 status code if you try to make more than 2 requests.
##### So Finally you can make 2 requests in 1 Minute.
## API Documentation
### User-swagger

![users-swagger](https://github.com/himanshu60/Ecommerce-API/assets/65457075/d9a43f6d-7365-4e43-8404-4f9e8b41ff3e)

### Products-swagger

![product-swagger](https://github.com/himanshu60/Ecommerce-API/assets/65457075/3b2ea569-67e0-47da-960a-f1c4e57e2d9e)

### Cart-swagger

![cart-swagger](https://github.com/himanshu60/Ecommerce-API/assets/65457075/a1516508-8dd2-4a19-a95d-b06a4196c738)

### order-swagger
![order-swagger](https://github.com/himanshu60/Ecommerce-API/assets/65457075/ced3481f-0600-4554-b4f7-1eecc0af0e75)



For detailed API documentation, visit the Swagger Documentation.
