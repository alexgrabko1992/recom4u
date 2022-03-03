const express = require("express");
const cors = require("cors");
const path = require("path");
const sequelize = require("./db");
const jwt = require("express-jwt");
const jwks = require("jwks-rsa");
const models = require("./models/models");
const router = require("./routes/index");
require("dotenv").config();

const PORT = process.env.PORT || 5000;

const jwtCheck = jwt({
  secret: jwks.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: "https://recom4u.eu.auth0.com/.well-known/jwks.json",
  }),
  audience: "http://recom4u-api",
  issuer: "https://recom4u.eu.auth0.com/",
  algorithms: ["RS256"],
});

//use middlewares
const app = express();
app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use("/api", router);
//for production
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "client/build")));
}

const start = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    app.listen(PORT, () => console.log(`Server listen on PORT: ${PORT}`));
  } catch (e) {
    console.log(e);
  }
};

// =======================================================================
app.get("/authorized", jwtCheck, (req, res) => {
  const token = req.headers.authorization.split(" ")[1];
  res.json(token);
});
// ========================================================================

// Uncomment this when deploy
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client/build/index.html"));
});

start();

// Add this in package.json when deplloy project "proxy": "http://localhost:5000"
