#  <h1 align="center">Triveous Ecommerce Backend</h1>


# Overview  [![License](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
This project will deliver a comprehensive e-commerce API set that enables seamless product and category management, user authentication, secure cart management, and order processing. The integration of MongoDB as the database and token management system ensures efficient data storage and user authentication with minimal server-side setup.



## Backend Deploy
https://triveous-4qqx.onrender.com/

## Swagger UI
https://triveous-4qqx.onrender.com/api-docs/

# Video Demonstration
https://drive.google.com/file/d/1-B6a4FcCNC8vKLc0MmpfNY7O4FKURIR1/view?usp=sharing

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
   cd E-commerce
   npm-i
   ```
   
3. Install dependencies:
   ```
   npm install express mongoose bcrypt jsonwebtoken swagger-jsdoc swagger-ui-express
   ```

4. Application Start
   ```
   npm run server
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
 - max: 6, //no. of req users can make within the time
 - windowMs: 10000  // time frame in (ms)

After 10000ms you get the Error: "Too many requests, please try again later" with a 429 status code if you try to make more than 6 requests.
##### So Finally you can make 6 requests in 10 seconds.
## API Documentation
### User-swagger

![users-swagger](https://github.com/Shashwat2104/mock-6fe/assets/115514170/693d7e53-c146-469d-96bb-9a98f2f50cc4)

### Products-swagger

![product-swagger](https://github.com/Shashwat2104/mock-6fe/assets/115514170/86103179-21d3-400a-a5eb-c9c43e516c89)

### Cart-swagger

![cart-swagger](https://github.com/Shashwat2104/mock-6fe/assets/115514170/f34e1e80-7e53-4e81-95e4-b92fedefa447)

### order-swagger
![order-swagger](https://github.com/Shashwat2104/mock-6fe/assets/115514170/881749b4-24c9-49aa-9d56-fc3764f5f4eb)


For detailed API documentation, visit the Swagger Documentation.

## Contributing

We welcome contributions from the community! Check out our [Contributing Guidelines](CONTRIBUTING.md) to get involved.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgements

We'd like to thank all of our contributors and supporters who have helped make Fanztar a reality.

## Contact

For any inquiries or feedback, please contact us at [shashwatmahender2104@gmail.com](mailto:your@email.com).   
---

<h1 align="center">✨Thank You✨</h1>

