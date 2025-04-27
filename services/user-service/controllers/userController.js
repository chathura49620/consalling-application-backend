const User = require('../models/customerModel');

exports.registerUser = async (req, res) => {
  try {
    const { name, email, role, uuid } = req.body;
    const user = await User.create({ name, email, role, uuid });
    res.status(201).json(user);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};



exports.allUsers = async (req, res) => {
  try {
    const list = await User.findAll();
    res.json(list);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


exports.getUserById = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateUser = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (!user) return res.status(404).json({ message: 'User not found' });
    await user.update(req.body);
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (!user) return res.status(404).json({ message: 'User not found' });
    await user.destroy();
    res.json({ message: 'User deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
