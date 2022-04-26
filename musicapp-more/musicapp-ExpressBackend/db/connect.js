const mongoose = require("mongoose");

const DB ="mongodb://localhost:27017/music_app";
mongoose
    .connect(DB)
    .then(()=>{
        console.log("Database connection successfully");
    })
    .catch((e)=>{
        console.error("connection error", e.message);
    })

const dbase = mongoose.connection;

module.exports= dbase;


