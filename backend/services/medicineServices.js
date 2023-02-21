const Medicine = require('../models/medicineModel');

exports.getMedicines = async (req, res) => {
  try {
    const medicines = await Medicine.find();
    res.json(medicines);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getMedicine = async (req, res) => {
  try {
    const medicine = await Medicine.findById(req.params.id);
    if (!medicine) {
      return res.status(404).json({ message: 'Medicine not found' });
    }
    res.json(medicine);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.createMedicine = async (req, res) => {
  const medicine = new Medicine({
    name: req.body.name,
    quantity: req.body.quantity,
    description: req.body.description
  });

  try {
    const newMedicine = await medicine.save();
    res.status(201).json(newMedicine);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.updateMedicine = async (req, res) => {
  try {
    const medicine = await Medicine.findByIdAndUpdate(
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
    res.json(medicine);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
