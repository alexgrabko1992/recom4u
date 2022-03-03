const { Sequelize } = require("sequelize");
require("dotenv").config();

// module.exports = new Sequelize(
//   process.env.DB_NAME,
//   process.env.DB_USER,
//   process.env.DB_PASSWORD,
//   {
//     dialect: "postgres",
//     host: process.env.DB_HOST,
//     port: process.env.DB_PORT,
//   }
// );

module.exports = new Sequelize(
  "postgres://izzzeyucrykzaw:6f4dd4d5866836ffcab6401f1ebb8a343ae91e337954e87ae9556956ab603644@ec2-52-31-217-108.eu-west-1.compute.amazonaws.com:5432/d8ecorievbp5q6",
  {
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  }
);
