// Define all controller actions for `pointOfInterest` here

function getAll (req, res) {

    res.send({ members: [
            {
                id: 1,
                name: 'point-of-interest-1'
            },
            {
                id: 2,
                name: 'point-of-interest-2'
            }
        ]
    });

}

function getById (req, res) {

    res.send({
        id: 1,
        name: 'point-of-interest-1'
    });

}

module.exports = {
    getAll: getAll,
    getById: getById
}
