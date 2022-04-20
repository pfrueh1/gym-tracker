const router = require('express').Router();


const {
    getAllLifts,
    createLift
} = require('../controllers/lift-controller')

router
    .route('/')
    .get(getAllLifts)
    .post(createLift)
    

    module.exports = router;