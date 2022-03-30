const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql");
const path = require("path");
const app = express();

const homeController = require("./controllers/homeController");

const port = process.env.port || 5000;

app.set("port", process.env.port || port); // set express to use this port
app.set("views", __dirname + "/views"); // set express to look in this folder to render our view
app.set("view engine", "ejs"); // configure template engine
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()); // parse form data client
app.use(express.static(path.join(__dirname, "public"))); // configure express to use public folder handle css + js files

app.get("/", homeController.loadHome);
app.get("/search", homeController.search);
app.post("/search", homeController.search);

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
