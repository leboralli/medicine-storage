const mongoose = require('mongoose');

async function connect() {
  try {
    mongoose.set('strictQuery', true);

    await mongoose.connect('mongodb+srv://leboralli:GkdTMrxvtkCj2ywr@cluster0.diygpdg.mongodb.net/?retryWrites=true&w=majority',
    );
    console.log('Connected to MongoDB');
  } catch (err) {
    console.log(err);
  }
}

module.exports = connect;