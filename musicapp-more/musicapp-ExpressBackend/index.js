
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const mo = express();

mongoose.connect("mongodb://localhost:27017/movie", { useNewUrlParser: true });
mo.use(bodyParser.json());


// DEFINE SCHEMA OBJECT CORRESPONDING TO DB COLLECTION
// in our table(collections) of movie we have 4 fields:
//              title, year, imdb, type
// we make a connection to DB with schema
var movieSchema= new mongoose.Schema({
    title:{type:String, required:false},
    year:{type:Number, required:false},
    imdb:{type:String, required:false},
    type:{type:String, required:false}
});
// CREATE MODEL OBJECT BASED ON THE ABOVE SCHEMA OBJECT
var Movie= mongoose.model("movie", movieSchema);

//CREATING ROUTE
mo.get('/',(req,res)=>
   res.redirect("/movie"));
mo.get('/movie',(req,res)=>
{
    Movie.find({}, (err, movie)=>{
        if (err)
            return res
                .status(400)
                .json({success:false , error:err})
        if(!movie.length)
            return res
                .status(401)
                .json({success: false , error:err})
        return res
            .status(200)
            .json({success: true , data: movie})
    })
});
mo.get('/home/:id',(req,res)=>
{
    var par= req.params.id;
    res.send(`you send ${par} to server`)
} );
mo.listen(3010,()=>console.log("server is starting"));