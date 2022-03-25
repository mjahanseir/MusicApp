const express= require("express"),
    backend= express(),
    bodyParser= require("body-parser"),
    mongoose= require("mongoose");
const DB ="mongodb://localhost:27017/music_app";
mongoose.connect(DB)
backend.use(express.json());
const musicSchema= new mongoose.schema({
    album:{type: string,  required:false},
    artist:{type: string,  required:false},
    year:{type: number,  required:false},
    artwork:{type: string,  required:false}
});
const Album = mongoose.model("Album", musicSchema);
backend.get(  '/', function(req,res){
    res.redirect("/music");
})


backend.get(  '/music', function(req,res){
    Album.find({} , function( err , albums ){
        if(err) {  return res .status(400).json( { success : false , error : err } );}
        if( !albums.length){ return res.status(404).json( { success : false , error : "No albums found" } );}
        return res .status(200).json( { success : true , data : albums} ); });
})

backend.get('/music/:id' , function(req, res){
    Album.findById(req.params.id, function(err, album){
        if(err){return res.status(400).json( { success : false, error:err } );}
        if(!album){return res.status(404).json( { success : false , error: "Album not found." } ); }
        return res.status(200).json( { success : true ,  data: album});})
})
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


backend.put("/music/:id", function (req, res) {
  const body = req.body;
  if (!body) {return res.status(400) .json({ success: false, error: "You must provide some data to update." }); } //END OF if
  Album.findOne({ _id: req.params.id }, (err, album) => {
    if (err) {return res.status(400).json({ success: false, error: err });} //END OF first if
    if (!Album) { return res.status(404).json({ success: false, error: "Album not found" }); } //END OF second if
    album.album = body.album;
    album.artist = body.artist;
    album.year = body.year;
    album.artwork = body.artwork;
    album .save()
          .then(() => {return res.status(200).json({ success: true, id: album._id, message: "Album updated." }); }) //END OF then
          .catch((error) => {return res.status(404).json({ error, message: "Album not updated" }); }); //END OF catch
  });
});

backend.delete("/music/:id", function(req,res){
     Album.findOneAndDelete (  { _id:req.params.id  } , function(err, album) {
            if(err){return res.status(400).json( { success : false , error: err})   }
            if(!album){ return res.status(404).json( { success : false , error: "Album not found"})   }
            return res .status(200).json( { success : true , data:album}) 
     });
});


backend.listen(3001, function(){
    console.log("Server started successfully");

})
