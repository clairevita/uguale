const db = require("../../models");

module.exports = function(app) {

  app.post("/api/signup", function(req, res){
    db.User
      .create({
        email: req.body.email,
        password: req.body.password,
        name: req.body.name
      })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err)); 
  });

  app.get("/api/user", function(req, res){
    db.User
      .find(req.query)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));

  });

}