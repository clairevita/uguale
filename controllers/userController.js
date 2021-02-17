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
    db.User
      .create({
        email: req.body.email,
        profileImage: req.body.profileImage,
        name: req.body.name,
        difficulty: 2
      })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err)); 
  },
  update: function (req, res) {
    db.User
      .findOneAndUpdate({ email: req.body.email }, {
        difficulty: req.body.difficulty,
        lastIntegers: req.body.lastIntegers,
        wrongQuestions: req.body.wrongQuestions
      })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findOne: function(req, res){
    db.User
      .findOne({where: {email: req.body.email}})
      .then(function(user){
        if (user){
          console.log('User Exists!')
        } else {
          db.User
          .create({
            email: req.body.email,
            profileImage: req.body.profileImage,
            name: req.body.name,
            difficulty: 2
          })
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err)); 
        }

      })
  }
};