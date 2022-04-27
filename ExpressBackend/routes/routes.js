const express = require("express");
const router = express.Router();
const MusicCtrl = require("../Controllers/controller");

// 5-3- SHOW ROUTES    / 5-4- GET ALL
router.get("/music", MusicCtrl.getAllMusic);

// 5-6- GET ONE
router.get("/music/:id", MusicCtrl.getMusicByID);

// 5-5- CREATE ROUTE
router.post("/music", MusicCtrl.createAlbum);

// 5-7- UPDATE ROUTE
router.put("/music/:id", MusicCtrl.updateAlbum); //END OF put

// 5-8- DELETE ROUTE       //one rout and http delete , same rout music/:id
router.delete("/music/:id", MusicCtrl.deleteAlbum);

module.exports = router;
