const router = require('express').Router();

const medicineController = require('../controller/medicineController');

// Create a new medicine
router
  .route('/list')
  .post((req, res) => medicineController.create(req, res));

// Retrieve all medicines
router
  .route('/list')
  .get((req, res) => medicineController.findAll(req, res));
  
// Retrieve a single medicine with id
router
  .route('/list/:id')
  .get((req, res) => medicineController.findOne(req, res));
  
// Update a medicine with id
router
  .route('/list/:id')
  .put((req, res) => medicineController.update(req, res));
  
// Delete a medicine with id
router
  .route('/list/:id')
  .delete((req, res) => medicineController.delete(req, res));
module.exports = router;