const router = require('express').Router();


const {
    getAllLifts,
    createLift,
    updateLift
} = require('../controllers/lift-controller')

router
    .route('/lifts')
    .get(getAllLifts)
    .post(createLift)
    

router
    .route('/lifts/:id')
    .put(updateLift)

    module.exports = router;