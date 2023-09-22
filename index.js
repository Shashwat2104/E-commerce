const express = require("express");
require("dotenv").config();
const { userRouter } = require("./routes/UserRoutes");
const { connection } = require("./config/db");
const  ProductRouter  = require("./routes/prodRoutes");
const  CartRouter  = require("./routes/cartRoutes");
const { OrderRouter } = require("./routes/orderRoutes");
const swaggerUi = require("swagger-ui-express"); 
const app = express();
const specs = require("./swagger");

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
    console.error(error.message);
  }
});
