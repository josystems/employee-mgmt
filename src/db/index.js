const mongoose = require("mongoose");
const { DB_URL } = require("../utils/Constant");
mongoose
  .connect(DB_URL, {
    useNewUrlParser: true,
  })
  .then(
    () => {
      console.log("Database connected sucessfully ");
    },
    (error) => {
      console.log("Could not connected to database : " + error);
    }
  );
module.exports = mongoose;
