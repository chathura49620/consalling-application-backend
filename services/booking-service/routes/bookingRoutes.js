const express = require('express');
const router = express.Router();
const controller = require('../controllers/bookingController');

router.post('/', controller.createBooking);
router.get('/', controller.getAllBookings);
router.get('/customer/:id', controller.getBookingsByCustomer);
router.get('/counsellor/:id', controller.getBookingsByCounsellor);
router.put('/cancel/:id', controller.cancelBooking);

module.exports = router;
