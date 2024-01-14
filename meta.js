const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const app = express();
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", function (req, res) {
  res.render("m1");
});
app.get("/recentactivities", function (req, res) {
  res.render("m6");
});
app.get("/latestnews", function (req, res) {
  res.render("m5");
});
app.get("/about", function (req, res) {
  res.render("m2");
});
app.get("/team", function (req, res) {
  res.render("m3");
});

app.listen(3000, function () {
  console.log("server is running");
});
