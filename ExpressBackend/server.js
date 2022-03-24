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
   in our table(collections) of music we have 4 fields:  ALBUM:STRING    ARTIST:STRING  YEAR: NUMBER   ARTWORK:STRING  we make a connection to DB with schema       */
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
//////////      5-1- ROUTES            ///////////////////////////////////////////////////
//////////      5-2- INDEX ROUTE      ///////////////////////////////////////////////////
backend.get(  '/', function(req,res){
    res.redirect("/music");
})
//////////      5-3- SHOW ROUTES     ///////////////////////////////////////////////////
//////////      5-4- GET ALL        ///////////////////////////////////////////////////
backend.get(  '/music', function(req,res){
    Album.find({} , function( err , albums ){
        if(err) {  return res .status(400).json( { success : false , error : err } );}
        if( !albums.length){ return res.status(404).json( { success : false , error : "No albums found" } );}
        return res .status(200).json( { success : true , data : albums} ); });
})

//////////       5-5- GET ONE        ///////////////////////////////////////////////////
backend.get('/music/:id' , function(req, res){
    Album.findById(req.params.id, function(err, album){
        if(err){return res.status(400).json( { success : false, error:err } );}
        if(!album){return res.status(404).json( { success : false , error: "Album not found." } ); }
        return res.status(200).json( { success : true ,  data: album});})
})
//////////       5-6- CREATE ROUTE      ///////////////////////////////////////////////////
backend.post('/music', function(req,res){
    const body = req.body;
    if(!body){ return res.status(400).json(  { success: false , error: "You must specify album information"});}
    const album = new Album (body);
    if( !album){return res.status(400).json( { success : false , error : "Album creation failed" } );}

    album
        .save().then(()=>{return res.status(201)
                .json( { success:true,id: album._id,message:"Alnum created."} )   })
        .catch(error => {return res.status(400).json( {error, message:"Album not created"});  })
});


//////////       5-7- UPDATE ROUTE      ///////////////////////////////////////////////////
backend.put("/music/:id", function (req, res) {
  const body = req.body;
  if (!body) {return res.status(400) .json({ success: false, error: "You must provide some data to update." }); } //END OF if
  // FIND the docyment to be update in the database
  Album.findOne({ _id: req.params.id }, (err, album) => {
    if (err) {return res.status(400).json({ success: false, error: err });} //END OF first if
    if (!Album) { return res.status(404).json({ success: false, error: "Album not found" }); } //END OF second if
    ///////////////   Update all thte info in browser album from the body album
    album.album = body.album;
    album.artist = body.artist;
    album.year = body.year;
    album.artwork = body.artwork;
    album .save()
          .then(() => {return res.status(200).json({ success: true, id: album._id, message: "Album updated." }); }) //END OF then
          .catch((error) => {return res.status(404).json({ error, message: "Album not updated" }); }); //END OF catch
  }); //END OF findOne
}); //END OF put
//////////       5-8- DELETE ROUTE      ///////////////////////////////////////////////////

backend.delete("/music/:id", function(req,res){
     Album.findOneAndDelete (  { _id:req.params.id  } , function(err, album) {
            if(err){return res.status(400).json( { success : false , error: err})   }
            if(!album){ return res.status(404).json( { success : false , error: "Album not found"})   }
            return res .status(200).json( { success : true , data:album}) 
     }); //END OF findOneAndDelete
});//END OF DELETE


//GET LIST ALL ROUTE      ///////////////////////////////////////////////////
backend.listen(3001, function(){
    console.log("Server started successfully");

})
