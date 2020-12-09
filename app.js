const express = require("express");
const bodyParser = require("body-parser");
const date= require(__dirname +"/date.js");

const itemList = ["bring food","make food","eat food"];
const workItems = [];

const app = express();

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.get("/", function (req, res) {
    let day = date.getDate();
    res.render("list", { listTitle: day, newListItems: itemList });
});

app.post("/", function (req, res) {
    console.log(req.body);
    let nextItem = req.body.next_item;
    if (req.body.button=='Work'){
        workItems.push(nextItem);
        res.redirect("/Work");
    }else{
        itemList.push(nextItem);
        res.redirect("/");
    }
});

app.get("/work",function(req, res){
    res.render("list", {listTitle:"Work List" , newListItems: workItems})
})

app.listen(3000, function () {
    console.log("Server started at port 3000");
});
