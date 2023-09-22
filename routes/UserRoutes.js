const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const UserModel = require("../models/UserModel");
require("dotenv").config();
const userRouter = express.Router();

/**
 * @swagger
 * tags:
 *   name: Users
 *   description: User management endpoints
 */

/**
 * @swagger
 * /users/register:
 *   post:
 *     summary: Register a new user
 *     description: Register a new user with a name, email, and password.
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *             example:
 *               name: John Doe
 *               email: johndoe@example.com
 *               password: secretPassword
 *     responses:
 *       200:
 *         description: User registered successfully.
 *       409:
 *         description: User already registered with this email.
 *       500:
 *         description: Something went wrong.
 */

/**
 * @swagger
 * /users/login:
 *   post:
 *     summary: User login
 *     description: Authenticate a user with email and password and return a JWT token.
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *             example:
 *               email: johndoe@example.com
 *               password: secretPassword
 *     responses:
 *       200:
 *         description: User login successful.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 msg:
 *                   type: string
 *                 Token:
 *                   type: string
 *       401:
 *         description: User not found or authentication failed.
 *       500:
 *         description: Something went wrong.
 */

userRouter.post("/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const userExist = await UserModel.findOne({ email });
    if (userExist) {
      return res
        .status(409)
        .json({ msg: "User Already Registered with this email" });
    }

    const hashPassword = await bcrypt.hash(password, 7);

    const user = new UserModel({
      name,
      email,
      password: hashPassword,
    });

    await user.save();
    res.status(200).json({ msg: "User Registered Successfully" });
  } catch (error) {
    res.status(500).json({ msg: "Something went wrong" });
  }
});

userRouter.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await UserModel.findOne({ email });
    if (!user) {
      return res.status(401).json({ msg: "User not Found!" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Authentication failed" });
    }

    const token = jwt.sign(
      { userId: user._id, email: user.email },
      process.env.SECRET_KEY,
      { expiresIn: "2h" }
    );
    res.status(200).json({ msg: "User Login Successfully", Token: token });
  } catch (error) {
    res.status(500).json({ msg: "Something went wrong" });
  }
});

module.exports = userRouter;
