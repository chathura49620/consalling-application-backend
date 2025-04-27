const express = require('express');
const sequelize = require('./models/index');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');
const counsellorRoutes = require('./routes/counsellorRoutes');
require('dotenv').config();

const app = express();
app.use(express.json());

app.use(cors());

app.use('/users', userRoutes);
app.use('/counsellor',counsellorRoutes );

sequelize.sync().then(() => {
  console.log('Database connected');
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    console.log(`User service running on port ${PORT}`);
  });
}).catch(err => {
  console.error('DB connection error:', err);
});
