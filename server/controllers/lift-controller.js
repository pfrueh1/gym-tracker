const {Lift} = require('../models')

const liftController = {
    getAllLifts(req, res) {
        Lift.find({})
        .then(dbLiftData => res.json(dbLiftData))
            .catch(err => {
                console.log(err);
                res.status(400).json(err)
            })
    }
}

module.exports = liftController;