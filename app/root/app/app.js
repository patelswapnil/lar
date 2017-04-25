const express = require('express'),
    app = express(),
    path = require('path'),
    osprey = require('osprey'),
    debug = require('debug')('lar:app:general'),
    Configuration = require('./lib/configuration'),
    config = new Configuration(),
    router = osprey.Router(),
    ramlConfig = require('./config/raml'),
    ramlErrorHandler = require('./lib/raml/errorHandler');

// Require controllers to server routes
require('./controllers')(app, router);

let ramlpPath = path.join(__dirname, 'lib/raml', 'api.raml');

module.exports = osprey.loadFile(ramlpPath, ramlConfig)
.then( middleware => {

    app.use('/', middleware, router);
    app.use(ramlErrorHandler.notFound, ramlErrorHandler.badRequest);

    return {
        startServer: () => {

            debug('Starting server.');

            // start the app
            app.listen(config.get('appPort'), () => {
                console.log('%s app started and running on port %s', 'LAR', config.get('appPort'));
            });

        }
    }

})
.catch( err => {
    throw new Error(err);
});
