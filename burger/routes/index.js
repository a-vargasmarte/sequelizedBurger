module.exports = app => {
    require('./api-routes')(app);
    require('./customer-api-routes')(app);
    // require('./burger-controller')(app);
}