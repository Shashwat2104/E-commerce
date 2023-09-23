// **************** API RATE LIMITER Middleware used for making some limited requests in fixed duration ****************

const { rateLimit } = require("express-rate-limit");

const limiter = rateLimit({
  max: 6, //no. of req users can make within time
  windowMs: 1000, // time frame in (ms) = 1 Minute
});

module.exports = { limiter };
