// *****************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
//
// ******************************************************************************
// *** Dependencies
// =============================================================
const express = require("express");
const bodyParser = require("body-parser");

// Sets up the Express App
// =============================================================
const app = express();

// Require our models for syncing
const models = require(`./models`)
// map "/" on the client to "./public" on the server
// e.g. /js/view.js in index.html maps to ./public/js/view.js on the file system
app.use(express.static("public"));

// Sets up the Express app to handle data parsing
// parse content-type == application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// parse content-type == application/json
app.use(bodyParser.json());

// set Handlebars
const exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


// Routes
// =============================================================

// require("./routes/")(app);
const routes = require("./controllers/burgersController")(app);

app.use(express.static("/", routes));

// Starting our Express app
// =============================================================
models.sequelize.sync({ force: true }).then(function () {
    const PORT = process.env.PORT || process.argv[2] || 8080;
    app.listen(PORT, () => console.log("App listening on PORT " + PORT));
});