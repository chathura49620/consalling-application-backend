const express = require('express');
const router = express.Router();
const controller = require('../controllers/messageController');

router.post('/', controller.sendMessage);
router.get('/:user1/:user2', controller.getChatHistory);

module.exports = router;
