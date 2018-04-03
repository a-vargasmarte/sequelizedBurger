// // *********************************************************************************
// // api-routes.js - this file offers a set of routes for displaying and saving data to the db
// // *********************************************************************************

// // Dependencies
// // =============================================================

// // require the models
// const models = require("../models");

// // Routes
// // =============================================================
// module.exports = app => {

//     // GET route for getting all the burgers
//     app.get("/api/Burgers", (req, res) => {
//         const query = {};
//         if (req.query.customer_id) {
//             query.CustomerId = req.query.customer_id;
//         }

//         models.Burgers
//             .findAll({ where: query })
//             .then(dbBurger => res.json(dbBurger));
//     });

//     // // GET route for getting all the customers
//     // app.get("/api/Customer", (req, res) => {
//     //     // console.log(db.Customers);
//     //     models.Customers.findAll()
//     //         .then(results => res.json(results));
//     // });

// };

