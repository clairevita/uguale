const db = require("../models");

module.exports = {
  findAll: function (req, res) {
    db.User
      .find(req.query)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function (req, res) {
    db.User
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function (req, res) {
    // console.log("Received payload  " + req.body)
    db.User
      .create({
        email: "clairej.vita@gmail.com",
        password: "",
        name: "Claire Vita"
      })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err)); 
  },
  update: function (req, res) {
    db.User
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};