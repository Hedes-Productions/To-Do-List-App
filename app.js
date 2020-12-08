const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.set('view engine','ejs');

app.get("/", function (req, res) {
    var date=new Date;
    var today = date.getDate();
    res.render('list', {day:today});
});

app.listen(3000, function () {
  console.log("Server started at port 3000");
});
