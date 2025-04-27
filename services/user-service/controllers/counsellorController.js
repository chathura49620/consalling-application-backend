const Counsellor = require('../models/Counsellor');

exports.addCounsellor = async (req, res) => {
  try {
    const counsellor = await Counsellor.create(req.body);
    res.status(201).json(counsellor);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getAllCounsellors = async (req, res) => {
  try {
    const list = await Counsellor.findAll();
    res.json(list);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getBySpecialization = async (req, res) => {
  try {
    const list = await Counsellor.findAll({ where: { specialization: req.params.specialization } });
    res.json(list);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateCounsellor = async (req, res) => {
  try {
    const counsellor = await Counsellor.findByPk(req.params.id);
    if (!counsellor) return res.status(404).json({ message: 'Not found' });
    await counsellor.update(req.body);
    res.json(counsellor);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.deleteCounsellor = async (req, res) => {
  try {
    const counsellor = await Counsellor.findByPk(req.params.id);
    if (!counsellor) return res.status(404).json({ message: 'Not found' });
    await counsellor.destroy();
    res.json({ message: 'Deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
