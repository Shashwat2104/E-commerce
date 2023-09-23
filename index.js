const express = require("express");
const dotenv = require("dotenv");
const userRouter = require("./routes/UserRoutes");
const { connection } = require("./config/db");
const ProductRouter = require("./routes/productRoutes");
// const CartRouter = require("./routes/CartRoutes");
// CartRouter
const OrderRouter = require("./routes/orderRoutes");
const swaggerUi = require("swagger-ui-express");
const app = express();
const specs = require("./swagger");
const { limiter } = require("./Middlewares/RateLimiter");
const CartRouter = require("./routes/cartRoutes");
// const CartRouter = require("./routes/cartRoutes");
CartRouter

// Load environment variables
dotenv.config();

// app.use(limiter);

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));

app.use(express.json());
app.use("/users", userRouter);
app.use("/products", ProductRouter);
app.use("/cart", CartRouter);
app.use("/orders", OrderRouter);

app.get("/", (req, res) => {
  res.send("Ecommerce website");
});

const PORT = process.env.PORT || 4500;

app.listen(PORT, async () => {
  try {
    await connection;
    console.log(`Connected to port ${PORT}`);
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
  }
});
