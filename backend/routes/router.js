const router = require('express').Router();

const medicineRouter = require('./medicine');

router.use('/', medicineRouter);

module.exports = router;