require("dotenv").config();
const PORT = process.env.PORT || 4000;
const DB_URL =
  process.env.DB_URL ||
  "mongodb+srv://employee-mgmt:y123321@cluster0.zlkzp.mongodb.net/test";

module.exports = {
  PORT,
  DB_URL,
};
