const { Service: MedicineModel } = require('../models/medicineModel');

const medicineController = {
  create: async (req, res) => {
    try {
      const medicine = {
        name: req.body.name,
        quantity: req.body.quantity,
        description: req.body.description,
      };
      console.log(medicine);
      const newMedicine = await MedicineModel.create(medicine);
      res.status(201).json({ newMedicine, message: "Serviço criado com sucesso" });

    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  }
};

module.exports = medicineController;