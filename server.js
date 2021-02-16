require("dotenv").config();
const express = require("express");

const PORT = process.env.PORT || 3001;
const app = express();
const routes = require("./routes");
const db = require("./models");

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

// Define middleware here
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Add routes, both API and view
app.use(routes);

db.sequelize.sync({ force: true }).then(function () {
  app.listen(PORT, function () {
    console.log("==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.", PORT, PORT);
  });
});