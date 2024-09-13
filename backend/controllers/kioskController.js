 // kioskCheckIn.js
import express from 'express';
import { Queue } from '../models/queueSchema.js';
import { Staff } from '../models/staffSchema.js';
import { Appointment } from '../models/appointmentSchema.js';
import { Ticket } from '../models/ticketSchema.js';



export const checkInUser = async (req, res) => {
  const { barcode } = req.body;

  try {
    // Step 1: Find the appointment based on the barcode
    const appointment = await Appointment.findOne({ barcode });
    if (!appointment) {
      return res.status(404).json({ error: 'Invalid barcode or appointment not found' });
    }

    // Step 2: Check if a queue entry already exists for the appointment
    const existingQueue = await Queue.findOne({ appointment_id: appointment._id });
    if (existingQueue) {
      return res.status(400).json({ error: 'Queue entry already exists for this appointment' });
    }

    // Step 3: Generate a queue number
    const queueNumber = Math.floor(Math.random() * 1000);

    // Step 4: Find an available staff member
    const availableStaff = await Staff.findOne({ isAvailable: true });
    if (!availableStaff) {
      return res.status(500).json({ error: 'No available staff' });
    }

    // Step 5: Create a queue entry
    const queueEntry = await Queue.create({
      appointment_id: appointment._id,
      queue_number: queueNumber,
      status: 'waiting',
      timestamp: new Date()
    });

    // Step 6: Generate a ticket after creating the queue entry
    const ticket = await Ticket.create({
      ticket_number: queueNumber,
      queue_id: queueEntry._id,
      issued_at: new Date(),
      staff_id: availableStaff._id
    });

    // Mark the staff as unavailable
    availableStaff.isAvailable = false;
    await availableStaff.save();

    // Step 7: Respond with queue, staff, and ticket details
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
