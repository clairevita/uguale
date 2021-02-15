'use strict';
const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");

module.exports = function (app){
    router.use("/api", apiRoutes);

    router.use(function(req, res){
        res.sendFile(path.join(__dirname, "../client/build/index.html"))
    });
    
}

