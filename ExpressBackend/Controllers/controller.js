const Album = require("../db/models/music-model");

getAllMusic = async (req,res) =>{
  Album.find({},(err,albums)=>{
    if(err){
      return res.status(400).json({success:false,err})
    }
    if(!albums.length){
      return res.status(404).json({success:false,error:"No albums found"})
    }
    return res.status(200).json({success:true,data:albums});
  });
}

getMusicByID = async(req,res)=>{
  // try {
  //    const data= await Album.findById(req.params.id)
  //    return res.status(200).json({data})
  // } catch (error) {
  //     return res.status(400).json({error})
  // }
  Album.findById(req.params.id,(err,album)=>{
    if(err){
      return res.status(400).json({success:false,err})
    }
    if(!album){
      return res.status(400).json({success:false,error:"Album not found."})
    }

    return res.status(200).json({success:true,data:album});
  })
}


createAlbum = async(req,res)=>{
  const body = req.body;


  if(!body){
    return res.status(400).json({success:false,error:"You must specify album information"});
  }

  const album = new Album(body)
  if(!album){
    return res.status(400).json({success:false,data:"Album creation failed"})
  }

  album.save().then(()=>{
    return res.status(200).json({success:true,id:album._id,message:"Album created."})
  })
      .catch(e=>{
        return  res.status(400).json({e,message:"Album not created."})
      })

}


updateAlbum = async(req,res)=>{
  const body = req.body;

  if(!body){
    return res.status(400).json({success:false,error:"You must provide some data to update."});
  }

  // find the document to be updated
  Album.findOne({_id:req.params.id},(err,album)=>{
    if(err){
      return res.status(400).json({success:false,error:err})
    }
    if(!album){
      return res.status(400).json({success:false,error:"Album not found"})
    }

    // update all the info in the browser album from the body album

    album.album = body.album;
    album.artist = body.artist;
    album.year= body.year;
    album.artwork = body.artwork;

    album.save().then(()=>{
      return res.status(200).json({
        success:true,id:album._id,
        message:"Album updated."
      })
    }).catch(err=>{
      return res.status(404).json({error:err,message:"Album not updated."})
    })

  })
}

deleteAlbum = async(req,res)=>{

  Album.findOneAndDelete({_id:req.params.id},(err,album)=>{
    if(err){
      return res.status(400).json({success:false,error:err});
    }
    if(!album){
      return res.status(404).json({success:false,error:"Album not found"});
    }

    return res.status(200).json({success:true,data:album});
  });
}

module.exports ={getAllMusic,getMusicByID,createAlbum,updateAlbum,deleteAlbum}