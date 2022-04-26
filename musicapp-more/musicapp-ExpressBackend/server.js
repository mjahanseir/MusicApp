//1
const express= require('express');
const mongoose= require('mongoose');
const bodyParser= require('body-parser');
const backend = express();
//2
const db= "mongodb://localhost:27017/music-app";
mongoose.connect(db);
backend.use(express.json());
//3
const musicSchema= new mongoose.Schema({
    album:{type:String , required:flase},
    artist:{type:String , required:flase},
    year:{type:Number , required:flase},
    artwork:{type:String , required:flase}

})
//4
const Album = mongoose.model("music", musicSchema);
//5
backend.get('/',(req,res)=>
res.redirect("/music"));
backend.get('/music',(req,res)=>
    {
        Album.find({},(err,albums)=>
        {
            if(err)
                return res
                    .status(400)
                    .json({success:false, error:err});
            if(!albums.length)
                return res
                    .status(401)
                    .json({success:false, error:"No albums found" });
            return res
                .status(200)
                .json({success:true, data:albums});
        })
    }
);

backend.get('/music/:id',(req,res)=>
    {
        Album.findById(req.params.id,(err,album)=>
        {
            if(err)
                return res
                    .status(400)
                    .json({success:false, error:err});
            if(!album.length)
                return res
                    .status(401)
                    .json({success:false, error:"Album nit found"});
            return res
                .status(200)
                .json({success:true, data:album});
        })
    }
);
backend.get('/music/:id',(req,res)=>
    {
        Album.findById(req.params.id,(err,album)=>
        {
            if(err)
                return res
                    .status(400)
                    .json({success:false, error:err});
            if(!album.length)
                return res
                    .status(401)
                    .json({success:false, error:"Album nit found"});
            return res
                .status(200)
                .json({success:true, data:album});
        })
    }
);
backend.post('/music/',(req,res)=>
    {
        const body= req.body;
        if(!body)
            return res
                .status(400)
                .json({success:false, error:"specify album info"});
        const album = new Album (body) ;
        if(!album)
            return res
                .status(400)
                .json({success:false, error:"False creation"});


        album.save().then(()=> {
            return res.status(200)
                .json({sucess: true, id: album._id, message: "Album created"})
                .catch(error => {
                    return res.status(400)
                        .json({success: false, error, message: "Not created"})
                })
        })
    }
);

backend.put('/music/',(req,res)=>
    {
        const body= req.body;
        if(!body)
            return res
                .status(400)
                .json({success:false, error:"Error"});
        Album.findOne({_id: req.params.id}, (err, album)=>{
            if(err)
                return res
                    .status(400)
                    .json({success:false, error:err});
            if(!album)
                return res
                    .status(401)
                    .json({success:false, error:"Album not found"});

        album.album=body.album;
        album.artist=body.artist;
        album.year=body.year;
        album.artwork=body.artwork;
        })

        album.save().then(()=> {
            return res.status(200)
                .json({sucess: true, id: album._id, message: "Album created"})
                .catch(error => {
                    return res.status(400)
                        .json({success: false, error, message: "Not created"})
                })
        })
    }
);


backend.listen(3011,()=>console.log("server started"))