const express = require("express");
const { auth } = require("../Middlewares/auth");
const ProductModel = require("../models/ProductModel");
const ProductRouter = express.Router();

/**
 * @swagger
 * components:
 *   securitySchemes:
 *     bearerAuth:
 *       type: http
 *       scheme: bearer
 *       bearerFormat: JWT
 */

/**
 * @swagger
 * tags:
 *   name: Products
 *   description: Product management endpoints
 */

/**
 * @swagger
 * /products/add-prod:
 *   post:
 *     summary: Add a new product
 *     description: Add a new product with title, image, price, category, and availability.
 *     tags: [Products]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               image:
 *                 type: string
 *               price:
 *                 type: number
 *               category:
 *                 type: string
 *               availablity:
 *                 type: boolean
 *     responses:
 *       201:
 *         description: Product added successfully.
 *       500:
 *         description: Something went wrong.
 *       401:
 *         description: Unauthorized - JWT token required.
 */

// Create a new product
ProductRouter.post("/addproducts", auth, async (req, res) => {
  try {
    const { title, image, price, category, availability } = req.body;

    const newProduct = new ProductModel({
      title,
      image,
      price,
      category,
      availability,
    });

    await newProduct.save();

    res.status(201).json({ message: "Product added successfully" });
  } catch (error) {
    res.status(500).json({ message: "An error occurred" });
  }
});

/**
 * @swagger
 * /products/prod-category:
 *   get:
 *     summary: Get product categories
 *     description: Retrieve distinct product categories.
 *     tags: [Products]
 *     responses:
 *       200:
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 category:
 *                   type: array
 *                   items:
 *                     type: string
 *       500:
 *         description: Something went wrong.
 */

// Get product categories
ProductRouter.get("/productscategory", async (req, res) => {
  try {
    const productCategories = await ProductModel.distinct("category");
    res.status(200).json({ categories: productCategories });
  } catch (error) {
    res.status(500).json({ message: "An error occurred" });
  }
});

/**
 * @swagger
 * /products/products:
 *   get:
 *     summary: Get products
 *     description: Retrieve a list of products. You can filter by category using the `category` query parameter.
 *     tags: [Products]
 *     parameters:
 *       - in: query
 *         name: category
 *         schema:
 *           type: string
 *         description: Optional category filter.
 *     responses:
 *       200:
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Product'
 *       500:
 *         description: Something went wrong.
 */

// Get products with optional category filter
ProductRouter.get("/products", async (req, res) => {
  try {
    const category = req.query.category;
    let query = {};

    if (category) {
      query = { category: category };
    }

    const products = await ProductModel.find(query);
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: "An error occurred" });
  }
});

/**
 * @swagger
 * /products/products/{id}:
 *   get:
 *     summary: Get a product by ID
 *     description: Retrieve a specific product by its ID.
 *     tags: [Products]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Product'
 *       500:
 *         description: Something went wrong.
 */

// Get a product by ID
ProductRouter.get("/products/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const product = await ProductModel.findById(id);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: "An error occurred" });
  }
});

module.exports = ProductRouter;
