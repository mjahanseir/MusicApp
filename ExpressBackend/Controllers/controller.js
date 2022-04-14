const Album = require("../db/models/music-model");

/////////////////////////////////             getAllMusic             ////////////////////////////////////////////////////////
getAllMusic = async (req, res) => {
  Album.find({}, function (err, albums) {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }

    if (!albums.length) {
      return res.status(404).json({ success: false, error: "No albums found" });
    }

    return res.status(200).json({ success: true, data: albums });
  });
};

/////////////////////////////////             getMusicByID             ////////////////////////////////////////////////////////
getMusicByID = async (req, res) => {
  // 5-5- GET ONE
  Album.findById(req.params.id, function (err, album) {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }
    if (!album) {
      return res
          .status(404)
          .json({ success: false, error: "Album not found." });
    }
    return res.status(200).json({ success: true, data: album });
  });
};

/////////////////////////////////             createAlbum             ////////////////////////////////////////////////////////
createAlbum = (req, res) => {
  // 5-5- CREATE ROUTE       //for form we use post
  const body = req.body;
  if (!body) {
    return res
        .status(400)
        .json({ success: false, error: "You must specify album information" });
  }

  const album = new Album(body);

  if (!album) {
    return res
        .status(400)
        .json({ success: false, error: "Album creation failed" });
  }

  album
      .save()
      //we have 2 : then and catch for get info for save a kind of try/catch in java
      .then(() => {
        return res.status(201).json({
          success: true,
          id: album._id,
          message: "Album created.",
        });
      })
      .catch((error) => {
        return res.status(400).json({ error, message: "Album not created" });
      });
};

/////////////////////////////////             updateAlbum             ////////////////////////////////////////////////////////
updateAlbum = async (req, res) => {
  // 5-7- UPDATE ROUTE
  const body = req.body;
  if (!body) {
    return res
        .status(400)
        .json({ success: false, error: "You must provide some data to update." });
  }
  // FIND the docyment to be update in the database
  Album.findOne({ _id: req.params.id }, (err, album) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }
    if (!Album) {
      return res.status(404).json({ success: false, error: "Album not found" });
    }
    // other wise update

    ///////////////   Update all thte info in browser album from the body album
    album.album = body.album;
    album.artist = body.artist;
    album.year = body.year;
    album.artwork = body.artwork;

    album
        .save()
        .then(() => {
          return res.status(200).json({
            success: true,
            id: album._id,
            message: "Album updated.",
          });
        })
        .catch((error) => {
          return res.status(404).json({ error, message: "Album not updated" });
        });
  }); //END OF findOne
};

/////////////////////////////////             deleteAlbum             ////////////////////////////////////////////////////////
// 5-8- DELETE ROUTE
deleteAlbum = async (req, res) => {
  // identicall same as addone , check album
  Album.findOneAndDelete({ _id: req.params.id }, function (err, album) {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }

    if (!album) {
      return res.status(404).json({ success: false, error: "Album not found" });
    }
    return res.status(200).json({ success: true, data: album });
  });
};

/////////////////////////////////             exports             ////////////////////////////////////////////////////////
module.exports = {
  getAllMusic,
  getMusicByID,
  createAlbum,
  updateAlbum,
  deleteAlbum,
};
