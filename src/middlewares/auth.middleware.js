const jwt = require("jsonwebtoken");
require("dotenv").config();

const authenticate = (req, res, next) => {
  // header authorization
  // Bearer lñsdhfipuryhtkdvm,cxnbvkjhyguireyhgjkdh
  const bearerToken = req.headers.authorization;
  if (bearerToken) {
    const token = bearerToken.split("Bearer ")[1];
    try {
      const decoded = jwt.verify(token, process.env.SECRET, "HS512");
      req.userId = decoded.id;
      next();
    } catch (error) {
      next({
        status: 400,
        errorContent: error,
        message: "Invalid Token",
      });
    }
  }
};

module.exports = authenticate;