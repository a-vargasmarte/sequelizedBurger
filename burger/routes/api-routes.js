// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// grab the orm from the config
// (remember: connection.js -> orm.js -> route file)
// const db = require("../config/orm");

// Routes
// =============================================================
module.exports = (app, db) => {

    // GET route for getting all the burgers
    app.get("/api/Burgers", (req, res) => {
        // console.log(db.Todo);
        db.Burgers.findAll()
            .then(results => res.json(results));
    });


    // POST route for saving a new burger. We can create a burger using the data on req.body
    app.post("/api/Burgers", (req, res) => {
        db.Burgers.create({
            burger_name: req.body.burger_name,
            devoured: req.body.devoured
        }).then(results =>
            // you can now access the newly created burger via the variable task
            res.json(results)
        )
    });

    // DELETE route for deleting burgers. We can access the ID of the burger to delete in
    // req.params.id
    app.delete("/api/Burgers/:id", (req, res) => {
        db.Burgers.destroy({
            where: { id: req.params.id }
        }).then(results => res.json(results));
    });

    // PUT route for updating burgers. We can access the updated burger in req.body
    app.put("/api/Burgers", (req, res) => {
        console.log(db.Burgers);
        console.log(JSON.stringify(req.body, null, 2));
        db.Burgers.update({
            burger_name: req.body.burger_name,
            devoured: req.body.devoured
        },
            { where: { id: req.body.id } })
            .then(results => res.json(results));
    });

};

