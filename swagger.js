const swaggerJsdoc = require('swagger-jsdoc');

const options = {
  swaggerDefinition: {
    openapi: '3.0.0', // Use the appropriate version (3.0.0 for Swagger 3.0)
    info: {
      title: 'Ecommerce-API with Routes',
      version: '1.0.0',
      description: 'Ecommerce-API',
    },
  },
  apis: ['./routes/*.js'], // Update with the path to your route files
};

const specs = swaggerJsdoc(options);

module.exports = specs;
