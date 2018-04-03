// *********************************************************************************
// customer-api-routes.js - this file offers a set of routes for displaying and saving customer data to the db
// *********************************************************************************

// dependencies
const models = require("../models");

module.exports = app => {
    // Find all Customers and return them to the user with res.json
    app.get("/api/Customer", (req, res) =>
        models.Customers
            .findAll({ include: [models.Burgers] })
            .then(dbCustomer => res.json(dbCustomer)));

    // // Find one Customer with the id in req.params.id and return him/her to the user with res.json
    // app.get("/api/customers/id:", (req, res) =>
    //     models.Customer
    //         .findOne({ where: { id: req.params.id }, include: [models.Burger] })
    //         .then(dbCustomer => res.json(dbCustomer)));

    // // Create a Customer with the data available to us in req.body
    // app.post("/api/customers", (req, res) =>
    //     models.Customer
    //         .create(req.body)
    //         .then(dbCustomer => res.json(dbCustomer)));


};