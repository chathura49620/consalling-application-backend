const express = require('express');
const sequelize = require('./config/db');
const cors = require('cors');
const routes = require('./routes/bookingRoutes');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(cors());

app.use('/bookings', routes);


sequelize.sync().then(() => {
  console.log('Booking DB connected');
  app.listen(process.env.PORT || 5002, () => {
    console.log(`Booking service running on port ${process.env.PORT || 6002}`);
  });
}).catch(err => {
  console.error('Error connecting to DB:', err);
});
