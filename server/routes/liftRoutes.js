const router = require('express').Router();


const {
    getAllLifts,
    createLift,
    updateLift
} = require('../controllers/lift-controller')

router
    .route('/')
    .get(getAllLifts)
    .post(createLift)
    

router
    .route('/:id')
    .put(updateLift)

    module.exports = router;