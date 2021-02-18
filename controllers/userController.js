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
        difficulty: "2"
      })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err)); 
  },
  update: function (req, res) {
    db.User
      .update({
        difficulty: req.body.difficulty,
        lastIntegers: req.body.lastIntegers,
        wrongQuestions: req.body.wrongQuestions
      },
      {
        where: {
          email: req.body.email
        }
      }
      )
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findOne: function(req, res){
    db.User
      .findOne({where: {email: req.body.email}})
      .then(function(user){
        if (user){
          res.send({ data: 'user already exists!' })
        } else {
          db.User
          .create({
            email: req.body.email,
            difficulty: req.body.difficulty,
            lastIntegers: req.body.numbers,
            age: req.body.age,
            technicalAssistance: req.body.technicalAssistance,
            outcome: req.body.outcome
          })
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err)); 
        }

      })
  },

  infoAdd: function (req, res) {
    db.User
      .update({

      },
      {
        where: {
          email: req.body.email
        }
      }
      )
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }

};