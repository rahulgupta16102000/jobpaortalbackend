// backend/models/db.js
const mongoose = require('mongoose');


mongoose.connect('mongodb+srv://hirahul7615:wieoM3gGNWuuNQ5j@cluster0.xttyoj5.mongodb.net/taskboarddb', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.once('open', () => {
  console.log('Connected to MongoDB');
});

db.on('error', (err) => {
  console.error(`MongoDB connection error: ${err}`);
  process.exit();
});

module.exports = { mongoose, db }; // export both mongoose and db
