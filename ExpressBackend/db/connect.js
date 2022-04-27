const mongoose = require("mongoose");

///////////     2-    CREATE A CONNECTION TO THE MONGODB    ///////////////////////////
const DB = "mongodb://localhost:27017/music_app";

mongoose
  .connect(DB)
  .then(() => {
    console.log("Batabase connection  successful.");
  })
  .catch((e) => {
    console.error("connection error", e.message);
  });

const dbase = mongoose.connection;

module.exports = dbase;
