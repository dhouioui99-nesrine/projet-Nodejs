const mongoose = require('mongoose');

const evaluationModelSchema = new mongoose.Schema({
  email: {
    type: String,
    required: "Email is required",
    unique: true, 
    lowercase: true,
    trim: true,
  },
  Note: {
    type: String,
    required: true,
    enum: ['1', '2', '3', '4', '5'],
  },
  DateE: {
    type: Date,
    required: true,
  },
  comments: {
    type: String,
    maxlength: 500,
  },
});

const evaluationModel = mongoose.model('Evaluation', evaluationModelSchema);

module.exports = evaluationModel;