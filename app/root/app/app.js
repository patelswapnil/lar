const express = require('express'),
    app = express(),
    http = require('http'),
    debug = require('debug')('lar:app:general'),
    Configuration = require('./lib/configuration'),
    config = new Configuration();

app.get('/', function (req, res) {
    res.send('Hello World!')
})

app.get('/test', function (req, res) {
    res.send('Hello test!')
})

module.exports = function () {

  return {
      startServer: function () {

          debug('Starting server.');

          // start the app
          http.createServer(app).listen(config.get('appPort'), function(){
              console.log('%s app started and running on port %s', 'LAR', '4000');
          });

      }
  };

}
