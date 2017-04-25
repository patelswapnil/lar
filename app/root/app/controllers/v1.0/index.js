module.exports = (app, router) => {

    require('./member')(router);
    require('./pointOfInterest')(router);

}
