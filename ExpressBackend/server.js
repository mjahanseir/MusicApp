const express = require("express");
const app = express();
const db = require("./db/connect");
const cors = require('cors');

const router = require("./routes/route");
// app.use(bodyParser.urlencoded({ extended: false }))

// // parse application/json
// app.use(bodyParser.json())
app.use(express.json());
app.use(cors({
    origin:'*'
}));

// Routes
//Index Route
app.get("/",(req,res)=>{
    res.redirect("/api/music")
})

app.use('/api',router)


app.listen(3010,()=>{
    console.log(" listening on: 3010");
})