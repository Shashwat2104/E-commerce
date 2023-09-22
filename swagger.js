const swaggerJsdoc = require("swagger-jsdoc");

const options = {
  swaggerDefinition: {
    openapi: "3.0.0", // Use the appropriate version (3.0.0 for Swagger 3.0)
    info: {
      title: "Ecommerce-API",
      version: "1.0.0",
      description:
        "API for managing an e-commerce website, including user registration, product management, shopping cart, and order placement.",
    },
  },
  apis: ["./routes/*.js"], // Update with the path to your route files
};

const specs = swaggerJsdoc(options);

module.exports = specs;
