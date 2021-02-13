const path = require("path");
const db = require("../models/user");

// Routes
// =============================================================

module.exports = function (app) {

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