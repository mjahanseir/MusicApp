const mongoose = require('mongoose');
const DB ="mongodb://192.168.75.128:27017/music_app";

mongoose.connect(DB)
    .then(()=>{console.log("connected to db.")})
    .catch((e)=>{
        console.error("connection error",e.message);
    });

const dbase =mongoose.connection;

module.exports = dbase;