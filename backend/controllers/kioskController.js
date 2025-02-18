 
import express from 'express';
import { Queue } from '../models/queueSchema.js';
import { Staff } from '../models/staffSchema.js';
import { Appointment } from '../models/appointmentSchema.js';
import { Ticket } from '../models/ticketSchema.js';



export const checkInUser = async (req, res) => {
  const { barcode } = req.body;

  try {
   
    const appointment = await Appointment.findOne({ barcode });
    if (!appointment) {
      return res.status(404).json({ error: 'Invalid barcode or appointment not found' });
    }

     
    const existingQueue = await Queue.findOne({ appointment_id: appointment._id });
    if (existingQueue) {
      return res.status(400).json({ error: 'Queue entry already exists for this appointment' });
    }

     
    const queueNumber = Math.floor(Math.random() * 1000);

     
    const availableStaff = await Staff.findOne({ isAvailable: true });
    if (!availableStaff) {
      return res.status(500).json({ error: 'No available staff' });
    }

    
    const queueEntry = await Queue.create({
      appointment_id: appointment._id,
      queue_number: queueNumber,
      status: 'waiting',
      timestamp: new Date()
    });

    
    const ticket = await Ticket.create({
      ticket_number: queueNumber,
      queue_id: queueEntry._id,
      issued_at: new Date(),
      staff_id: availableStaff._id
    });

   
    availableStaff.isAvailable = false;
    await availableStaff.save();

     
    res.status(201).json({
      message: 'Check-in successful',
      queue_number: queueEntry.queue_number,
      staff: {
        name: availableStaff.name,
        officeNumber: availableStaff.officeNumber,  
      },
      ticket_number: ticket.ticket_number,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error processing check-in' });
  }
};

export default checkInUser;
