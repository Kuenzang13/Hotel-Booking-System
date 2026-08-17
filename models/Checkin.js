const mongoose = require('mongoose');

const checkinSchema = new mongoose.Schema({
  bookingId: { type: mongoose.Schema.Types.ObjectId, ref: 'Booking', required: true },
  actualCheckIn: { type: Date, required: true },
  actualCheckOut: { type: Date },
  roomStatus: { type: String, default: 'Occupied' }
}, { timestamps: true });

module.exports = mongoose.model('Checkin', checkinSchema);