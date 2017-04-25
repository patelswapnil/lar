module.exports = function (router) {

    router.get('/v1.0/member', function(req, res) {
        res.send('GET handler for /member route.');
    });

    router.get('/v1.0/member/id', function(req, res) {
        res.send('GET handler for /member/:id route.');
    });

    router.post('/v1.0/member', function(req, res) {
        res.send('POST handler for /member route.');
    });

}
