require("./models/db");
const express = require("express");

const path = require("path");
const exphb = require("express-handlebars");
const bodyparser = require("body-parser");
const employeeController = require("./contollers/employeeController");
const app = express();

app.use(
  bodyparser.urlencoded({
    extended: true
  })
);
app.use(bodyparser.json());

app.set("views", path.join(__dirname, "/views/"));

app.engine(
  "hbs",
  exphb({
    extname: "hbs",
    defaultLayout: "mainLayout",
    layoutsDir: __dirname + "/views/layouts"
  })
);
app.set("view engine", "hbs");

app.use("/employee", employeeController);

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
