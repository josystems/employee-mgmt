const Router = require("express").Router();
const {
  createEmployee,
  getEmployee,
  getEmployees,
  updateEmployee,
  deleteEmployee,
} = require("../Controllers/EmployeeController");

Router.get("/", getEmployees);
Router.get("/:id", getEmployee);
Router.post("/", createEmployee);
Router.put("/:id", updateEmployee);
Router.delete("/:id", deleteEmployee);

module.exports = Router;
