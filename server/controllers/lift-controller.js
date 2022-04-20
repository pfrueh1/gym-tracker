const {Lift} = require('../models')

const liftController = {
    getAllLifts(req, res) {
        Lift.find({})
        .then(dbLiftData => res.json(dbLiftData))
            .catch(err => {
                console.log(err);
                res.status(400).json(err)
            })
    },
    createLift({body}, res) {
        Lift.create(body)
        .then(dbLiftData => res.json(dbLiftData))
        .catch(err => {
            console.log(err);
            res.status(400).json(err)
        })
    },
    updateLift({params, body}, res) {
        Lift.findOneAndUpdate({_id: params.id}, body, {new: true, runValidators: true})
        .then(dbLiftData => {
            if (!dbLiftData) {
                res.status(404).json({message: 'No lift found with this ID'});
                return;
            }
            res.json(dbPizzaData)
        })
        .catch(err => res.status(400).json(err))
    }
}

module.exports = liftController;