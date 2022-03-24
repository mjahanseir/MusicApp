//////////     1-    setting server file  & setup mongo db connection   ///////////////
const express= require("express"),
    backend= express(),
    bodyParser= require("body-parser"),
    mongoose= require("mongoose");

///////////     2-    CREATE A CONNECTION TO THE MONGODB    ///////////////////////////
const DB ="mongodb://localhost:27017/music_app";
mongoose.connect(DB)
backend.use(express.json());
///////////     3-    Mongoose set up      //////////////////////////////////////////
/* DEFINE SCHEMA OBJECT CORRESPONDING TO DB COLLECTION
   in our table(collections) of movie we have 4 fields:
        ALBUM:STRING    ARTIST:STRING  YEAR: NUMBER   ARTWORK:STRING
   we make a connection to DB with schema       */
const musicSchema= new mongoose.schema({
    album:{type: string,  required:false},
    artist:{type: string,  required:false},
    year:{type: number,  required:false},
    artwork:{type: string,  required:false}
});
///////////     4-     CREATE MODEL OBJECT      //////////////////////////////////////
// CREATE MODEL OBJECT BASED ON THE ABOVE SCHEMA OBJECT
const Album = mongoose.model("Album", musicSchema);
///////////     5-     Routes      ///////////////////////////////////////////////////

