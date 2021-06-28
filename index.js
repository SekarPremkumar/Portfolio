const express = require("express");
const ejs = require("ejs");
const app= express();

app.use(express.static("public"));
app.set('view engine','ejs')

app.get("/",function(req,res){
  res.render("index");
});

app.get("/about",function(req,res){
  res.render("about");
});

app.get("/education",function(req,res){
  res.render("education");
});

app.get("/talent",function(req,res){
  res.render("talent");
});


app.listen("3000",function(){
  console.log("Server is running");
})
