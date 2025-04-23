const mongoose = require('mongoose');

const DocumentSchema = new mongoose.Schema({
  filename: String,
  originalName: String,
  uploadDate: Date,
  userId: String,
});

module.exports = mongoose.model('Document', DocumentSchema);
