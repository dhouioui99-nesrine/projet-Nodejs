// models/LeaveRequest.js
const mongoose = require('mongoose');

const leaveRequestSchema = new mongoose.Schema({
  startDate: {
    type: Date,
    required: true,
  },
  endDate: {
    type: Date,
    required: true,
  },
  leaveType: {
    type: String,
    required: true,
    enum: ['Congé payé', 'Congé sans solde', 'Congé maladie'],
  },
  comments: {
    type: String,
    maxlength: 500,
  },
  status: {
    type: String,
    enum: ['en attente', 'approuvé', 'rejeté'],
    default: 'en attente',
  },
 /* user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', 
    required: true,
  },*/
});

module.exports = mongoose.model('LeaveRequest', leaveRequestSchema);
