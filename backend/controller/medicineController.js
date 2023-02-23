const MedicineModel = require('../models/medicineModel');

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
  },
  findAll: async (req, res) => {
    try {
      const medicines = await MedicineModel.find();
      res.status(200).json(medicines);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },
  findOne: async (req, res) => {
    try {
      const medicine = await MedicineModel.findById(req.params.id);
      if (!medicine) {
        return res.status(404).json({ message: 'Medicine not found' });
      }
      res.status(200).json(medicine);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },
  update: async (req, res) => {
    try {
      const medicine = await MedicineModel.findByIdAndUpdate(
        req.params.id,
        {
          name: req.body.name,
          quantity: req.body.quantity,
          description: req.body.description
        },
        { new: true }
      );
      if (!medicine) {
        return res.status(404).json({ message: err.message });
      }
      res.status(200).json(medicine);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },
  delete: async (req, res) => {
    try {
      const medicine = await MedicineModel.findByIdAndDelete(req.params.id);
      if (!medicine) {
        return res.status(404).json({ message: err.message });
      }
      res.status(200).json({ message: "Medicine deleted successfully" });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },
};

module.exports = medicineController;