const express = require('express');
const router = express.Router();
const controller = require('../controllers/counsellorController');

router.post('/register', controller.addCounsellor);
router.get('/', controller.getAllCounsellors);
router.get('/specialization/:specialization', controller.getBySpecialization);
router.put('/:id', controller.updateCounsellor);
router.delete('/:id', controller.deleteCounsellor);

module.exports = router;
