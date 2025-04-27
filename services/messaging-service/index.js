const express = require('express');
const sequelize = require('./config/db');
const messageRoutes = require('./routes/messageRoutes');
require('dotenv').config();

const app = express();
app.use(express.json());

app.use('/messages', messageRoutes);

sequelize.sync().then(() => {
  console.log('Messaging DB connected');
  app.listen(process.env.PORT || 5003, () => {
    console.log(`Messaging service running on port ${process.env.PORT || 5003}`);
  });
}).catch(err => {
  console.error('Error connecting to DB:', err);
});
