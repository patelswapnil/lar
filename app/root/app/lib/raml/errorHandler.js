function notFound (req, res, next) {

    // Check for existence of the method handler.
    if (req.resourcePath) {
        return next()
    }

    return res.status(404).send({
        success: 0,
        code: 404,
        message: 'Not Found'
    });

}

function badRequest (err, req, res, next) {

    if (err) {

        return res.status(400).send({
            success: 0,
            code: 400,
            message: 'Bad Request'
        });

    }

    return next();

}

module.exports = {
    notFound: notFound,
    badRequest: badRequest
};
