const mongoose = require("mongoose");

mongoose.connect(
  "mongodb://localhost/EmployeeDB",
  { useNewUrlParser: true },
  err => {
    if (!err) {
      console.log("MongoDB Connection suceeded");
    } else {
      console.log("Error in Db connection: " + err);
    }
  }
);

require("./employee");
