require('dotenv').config()
// Connection to DB
require('./config/db.config')
require('./config/hbs.config')
const express = require('express')
const logger = require('morgan')
const path = require('path')
const { sessionConfig, getCurrentUser } = require('./config/session.config')
const app = express()
// To have access to `body` property in the request
app.use(express.urlencoded({ extended: false }));
// Normalizes the path to the views folder
app.set("views", path.join(__dirname, "views"));
// Sets the view engine to handlebars
app.set("view engine", "hbs");
// Handles access to the public folder
app.use(express.static(path.join(__dirname, "public")));
app.use(logger('dev'))

app.use(sessionConfig);
app.use(getCurrentUser);
const routes = require('./routes/routes')
app.use('/', routes)
// Manejo de errores
app.use((req, res, next) => {
  // this middleware runs whenever requested page is not available
  res.status(404).render("not-found");
});
app.use((err, req, res, next) => {
  // whenever you call next(err), this middleware will handle the error
  // always logs the error
  console.error("ERROR", req.method, req.path, err);
  // only render if the error ocurred before sending the response
  if (!res.headersSent) {
    res.status(500).render("error");
  }
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});