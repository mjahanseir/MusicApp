//////////     1-    setting server file  & setup mongo db connection   ///////////////
const express= require("express"),
    backend= express(),
    bodyParser= require("body-parser"),
    mongoose= require("mongoose");
///////////     2-    CREATE A CONNECTION TO THE MONGODB    ///////////////////////////
mongoose.connect(DB)
backend.use(express.json());

//GET LIST ALL ROUTE      ///////////////////////////////////////////////////
backend.listen(3001, function(){
    console.log("Server started successfully");

})
