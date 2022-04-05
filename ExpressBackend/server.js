const express = require("express"),
  backend = express(),
  db = require("./db/connect"),
  router = require("./routes/route");

backend.use(express.json());

backend.get("/", function (req, res) {
  res.redirect("/api/music");
});

backend.use("/api", router);

backend.listen(3001, function () {
  console.log("Server started successfully");
});
