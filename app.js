var ex=require("express");
var app=ex();
var rend=require("./rend");
app.use("/",rend);
app.listen(2223);