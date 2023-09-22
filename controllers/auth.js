const jwt = require("jsonwebtoken");
require("dotenv").config();

const auth = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const decodedToken = jwt.verify(token, process.env.Secret_Key);
    req.userData = { userId: decodedToken.userId, email: decodedToken.email };
    next(); // Move to the next middleware
  } catch (error) {
    return res.status(401).json({ message: "Authentication failed" });
  }
};

module.exports = { auth };
