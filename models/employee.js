const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: "This field is required",
    minlength: 7
  },
  email: {
    type: String,
    required: "This field is required",
    minlength: 11
  },
  mobile: {
    type: String
  },
  city: {
    type: String
  }
});

mongoose.model("Employee", employeeSchema);
