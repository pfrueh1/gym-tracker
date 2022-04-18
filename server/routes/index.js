const express = require('express');
const router = express.Router();

router.use(require('./liftRoutes'));

module.exports = router;