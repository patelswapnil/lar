module.exports = function (router) {

    router.get('/v1.0/point-of-interest', function(req, res) {
        res.send('GET handler for /test-point-of-interest route.');
    });

    router.post('/v1.0/point-of-interest', function(req, res) {
        res.send('POST handler for /test-point-of-interest route.');
    });

}
