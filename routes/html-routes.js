const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");
const db = require('../models/user')

// // API Routes
// router.use("/api", apiRoutes);

// // If no API routes are hit, send the React app
// router.use(function(req, res) {
//   res.sendFile(path.join(__dirname, "../client/build/index.html"));
// });

module.exports = function (app){
app.get("/", function (req, res) {
        if (req.user) {
            res.redirect("/index");
        }
        res.sendFile(path.join(__dirname, ""));
    });

    app.get("/home", function (req, res) {
        if (!req.user) {
            res.redirect("/");
        }
        res.sendFile(path.join(__dirname, ""));
    });

    app.get("/game", function (req, res) {
       
      if (req.user) {
        res.redirect("/game");
    }
    res.sendFile(path.join(__dirname, ""));
    });

};
