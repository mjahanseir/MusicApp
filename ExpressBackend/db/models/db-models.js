const mongoose = require("mongoose");
///////////     3-    Mongoose set up      //////////////////////////////////////////
/* DEFINE SCHEMA OBJECT CORRESPONDING TO DB COLLECTION
   in our table(collections) of movie we have 4 fields: ALBUM:STRING    ARTIST:STRING  YEAR: NUMBER   ARTWORK:STRING  we make a connection to DB with schema       */
const musicSchema = new mongoose.Schema({
  album: { type: String, required: false },
  artist: { type: String, required: false },
  year: { type: Number, required: false },
  artwork: { type: String, required: false },
});

///////////     4-     CREATE MODEL OBJECT      //////////////////////////////////////
// CREATE MODEL OBJECT BASED ON THE ABOVE SCHEMA OBJECT

const Album = mongoose.model("Album", musicSchema);

module.exports = Album;

// OR   =    module.export = mongoose.model("Album", musicSchema);;
