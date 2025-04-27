const Booking = require('../models/Booking');

exports.createBooking = async (req, res) => {
  try {
    const booking = await Booking.create(req.body);
    res.status(201).json(booking);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getAllBookings = async (req, res) => {
  try {
    const bookings = await Booking.findAll();
    res.json(bookings);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getBookingsByCustomer = async (req, res) => {
  try {
    const bookings = await Booking.findAll({ where: { customerId: req.params.id } });
    res.json(bookings);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getBookingsByCounsellor = async (req, res) => {
  try {
    const bookings = await Booking.findAll({ where: { counsellorId: req.params.id } });
    res.json(bookings);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.cancelBooking = async (req, res) => {
  try {
    const booking = await Booking.findByPk(req.params.id);
    if (!booking) return res.status(404).json({ message: 'Not found' });
    booking.status = 'cancelled';
    await booking.save();
    res.json({ message: 'Booking cancelled', booking });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
