// *****************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
//
// ******************************************************************************
// *** Dependencies
// =============================================================
const express = require("express");
const bodyParser = require("body-parser");
const db = require("./models");

// sync db
db.sequelize.sync();

// Sets up the Express App
// =============================================================
const app = express();

// Sets up the Express app to handle data parsing
// parse content-type == application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// parse content-type == application/json
app.use(bodyParser.json());

// map "/" on the client to "./public" on the server
// e.g. /js/view.js in index.html maps to ./public/js/view.js on the file system
app.use(express.static("public"));

// Routes
// =============================================================
require("./routes/api-routes")(app, db);

// Starting our Express app
// =============================================================
const PORT = process.env.PORT || process.argv[2] || 8080;
app.listen(PORT, () => console.log("App listening on PORT " + PORT));
