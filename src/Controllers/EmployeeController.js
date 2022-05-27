const mongoose = require("mongoose");

const Employee = require("../Models/EmployeeModel");

const createEmployee = async (req, res) => {
  try {
    console.log("create body", req.body);
    const employee = await Employee.create(req.body);
    res
      .status(201)
      .json({ message: "employee created successfully", data: employee });
  } catch (e) {
    res.status(400).json(e);
  }
};

const getEmployees = async (req, res) => {
  try {
    // TODO filter using query parameters
    const employees = await Employee.find();
    res.send({ data: employees });
  } catch (e) {
    res.status(500).json(e);
  }
};

const getEmployee = async (req, res) => {
  const id = req.params.id;
  if (!mongoose.isValidObjectId(id))
    res.status(400).json({ message: "Invalid Employee Id" });
  else
    try {
      const employee = await Employee.findById(id);
      res.send({ data: employee });
    } catch (e) {
      res.status(500).json(e);
    }
};
const updateEmployee = async (req, res) => {
  const id = req.params.id;
  if (!mongoose.isValidObjectId(id))
    res.status(400).json({ message: "Invalid Employee Id" });
  else
    try {
      const employees = await Employee.findByIdAndUpdate(id, req.body);
      res.status(200).send({ message: "Employee information updated" });
    } catch (e) {
      res.status(500).json(e);
    }
};
const deleteEmployee = async (req, res) => {
  const id = req.params.id;
  if (!mongoose.isValidObjectId(id))
    res.status(400).json({ message: "Invalid Employee Id" });
  else
    try {
      const employees = await Employee.findByIdAndDelete(id);
      res.send(employees);
    } catch (e) {
      res.status(500).json(e);
    }
};

module.exports = {
  createEmployee,
  getEmployee,
  getEmployees,
  updateEmployee,
  deleteEmployee,
};
