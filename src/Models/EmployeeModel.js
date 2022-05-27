const mongoose = require("mongoose");

const EmployeeSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "name is required"],
  },
  gender: {
    type: String,
    match: [/(male|female)/i, "gender should be either male or female"],
  },
  dob: {
    type: Date,
  },
  salary: {
    type: Number,
    min: [0, "salary should not be nagative value "],
    required: true,
  },
});

module.exports = mongoose.model("employees", EmployeeSchema);
