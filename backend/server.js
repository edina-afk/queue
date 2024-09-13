import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

 


import { port, mongoUrl } from './config.js';
import clientRoutes from './routes/clientRoutes.js';
import appointmentRoutes from './routes/appointmentRoutes.js';
import queueRoutes from './routes/queueRoutes.js';
import ticketRoutes from './routes/ticketRoutes.js';
import staffRoutes from './routes/staffRoutes.js';
import kioskRoutes from './routes/kioskRoutes.js'; 


const app = express();

app.use(cors());

app.use(express.json());


app.use('/api',clientRoutes);
app.use('/api',appointmentRoutes);
app.use('/api',queueRoutes);
app.use('/api',ticketRoutes);
app.use('/api',staffRoutes);
app.use('/api/kiosk', kioskRoutes);



mongoose.connect(mongoUrl)
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch(error => console.error('Error connecting to MongoDB:', error));
