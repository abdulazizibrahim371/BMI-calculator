const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({extended:true}));

app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html");
})

app.post("/", function(req, res){
    var num1= Number(req.body.num1);
    var num2= Number(req.body.num2);
    var num3= Number(req.body.num3);
    var result = num1 + num2 +num3;

    res.send("The result for the calculation is " + result);
})
app.post("/bmiCalculator", function(req, res){
    var weight = Number(req.body.weight);
    var height = Number(req.body.height);
    var result = weight+height;
    res.send("The BMI is "+ result);
})
app.get("/bmiCalculator", function(req, res){
    res.sendFile(__dirname + "/bmiCalculator.html");
})

app.listen("3000", function(){
    console.log("server started on port 3000");
})