const mongoose = require('mongoose');

const medicineSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  quantity: {
    type: Number,
    required: true
  },
  description: {
    type: String,
    required: true
  }
});

const Medicine = mongoose.model('Medicine', medicineSchema);

module.exports = Medicine;
