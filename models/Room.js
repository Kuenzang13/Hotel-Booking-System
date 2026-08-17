const mongoose = require('mongoose');

const roomSchema = new mongoose.Schema({
  roomNumber: { type: String, required: true, unique: true },
  category: { type: String, required: true },
  pricePerNight: { type: Number, required: true },
  status: { 
    type: String, 
    enum: ['Available', 'Occupied', 'Maintenance'], 
    default: 'Available' 
  }
}, { timestamps: true });

module.exports = mongoose.model('Room', roomSchema);