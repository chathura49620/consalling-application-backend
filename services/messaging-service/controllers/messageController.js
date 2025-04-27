const Message = require('../models/Message');

exports.sendMessage = async (req, res) => {
  try {
    const message = await Message.create(req.body);
    res.status(201).json(message);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getChatHistory = async (req, res) => {
  const { user1, user2 } = req.params;
  try {
    const messages = await Message.findAll({
      where: {
        [require('sequelize').Op.or]: [
          { senderId: user1, receiverId: user2 },
          { senderId: user2, receiverId: user1 }
        ]
      },
      order: [['timestamp', 'ASC']]
    });
    res.json(messages);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
