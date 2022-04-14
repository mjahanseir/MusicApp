const express = require("express");
const app = express();
const router = express.Router();

const MusicCtrl = require("../controllers/controller")



//Show Routes
// Get All
router.get("/music",MusicCtrl.getAllMusic )


// Get one
router.get("/music/:id",MusicCtrl.getMusicByID)


// Create Route

router.post("/music",MusicCtrl.createAlbum )

// update route
router.put('/music/:id',MusicCtrl.updateAlbum)

// delete route
router.delete('/music/:id', MusicCtrl.deleteAlbum);

module.exports = router;