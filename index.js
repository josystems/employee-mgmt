require("./src/db");
const express = require("express");
const cors = require("cors");
const { PORT } = require("./src/utils/Constant");
const employeeRoute = require("./src/Routes/EmployeeRoutes");
const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/employees", employeeRoute);

app.listen(PORT, () => {
  console.log(`server started on port ${PORT} `, PORT);
});
