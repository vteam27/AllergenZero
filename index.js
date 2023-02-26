const express=require("express");
const bodyParser = require("body-parser");
const path = require("path");
const ejs = require("ejs");
const app=express();


app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));


app.listen("3000", function(req, res)
{
    console.log("Server is online");
}); 

app.get("/", function(req,res)
{
    res.render('home');
})

app.get("/recipe", function(req,res)
{
    res.render('recipe');
})

app.post("/recipe", function(req,res)
{
    res.render('recipe');
})