
// Require our models for syncing
const models = require(`../models`);

module.exports = (app) => {

    // create all routes and setup logic within those routes where required

    app.get("/", (req, res) => {
        models.Burgers
            .findAll({
                attributes: ['id', 'burger_name', 'devoured']
            })
            .then(burgers => {
                const hbsObject = {
                    burgers: burgers.map(x => x.dataValues)
                };
                // console.log(hbsObject.burgers);
                res.render("index", hbsObject);
            });
    });


    // Burgers
    // Get all the burgers
    app.get("/api/burgers", (req, res) => {
        models.Burgers
            .findAll()
            .then(dbBurgers => res.json(dbBurgers));
    });

    // POST route for saving a new burger. We can create a burger using the data on req.body
    app.post("/api/burgers", (req, res) => {
        models.Burgers.create({
            burger_name: req.body.burger_name,
            devoured: req.body.devoured
        }).then(() => {
            // redirect the user to the index page
            res.end();
        });
    });

    // PUT route for updating the burgers' status.
    app.put("/api/burgers", (req, res) => {
        console.log(req.body);
        models.Burgers.update({
            devoured: req.body.devoured
        }, {
                where: {
                    id: req.body.id
                }

            }).then(results => {
                res.end();
            });
    });

}

