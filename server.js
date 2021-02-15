  
const express = require("express");
require("dotenv").config();
const app = express();
const PORT = process.env.PORT || 8080;
const db = require("./models");
const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
router.use("/api", apiRoutes);
router.use(function(req, res){
    res.sendFile(path.join(__dirname, "../client/build/index.html"))
});


db.sequelize.sync({ force: true }).then(function() {
  app.listen(PORT, function() {
    console.log("==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.", PORT, PORT);
  });
});