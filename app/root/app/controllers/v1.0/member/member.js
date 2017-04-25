// Define all actions of `member` model here.

function getAll (req, res) {

    res.send({ members: [
            {
                id: 1,
                name: 'member1'
            },
            {
                id: 2,
                name: 'member2'
            }
        ]
    });

}

function getById (req, res) {

    res.send({
        id: 1,
        name: 'member1'
    });

}


module.exports = {
    getAll: getAll,
    getById: getById
}
