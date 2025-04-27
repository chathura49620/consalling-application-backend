const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/', userController.allUsers);
router.post('/register', userController.registerUser);
router.get('/:id', userController.getUserById);
router.put('/:id', userController.updateUser);
router.delete('/:id', userController.deleteUser);

module.exports = router;
