const router = require('express').Router();

const medicineController = require('../controller/medicineController');

router
  .route('/list')
  .post((req, res) => medicineController.create(req, res));
module.exports = router;