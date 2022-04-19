const router = require('express').Router();


const {
    getAllLifts,
    createLift
} = require('../controllers/lift-controller')

router
    .route('/')
    .get(getAllLifts)
    

    module.exports = router;