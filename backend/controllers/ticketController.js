  
import { Ticket } from '../models/ticketSchema.js';

export const generateTicket = async (req, res) => {
  const { queue_id } = req.body;

  try {
   
    const queueEntry = await Queue.findById(queue_id);
    if (!queueEntry) {
      return res.status(404).json({ error: 'Queue entry not found' });
    }

    
    const ticketNumber = Math.floor(Math.random() * 1000);

   
    const ticket = await Ticket.create({
      ticket_number: ticketNumber,
      queue_id: queueEntry._id,
      issued_at: new Date(),
    });

    res.status(201).json({
      message: 'Ticket generated successfully',
      ticket_number: ticket.ticket_number,
      queue_id: queueEntry._id,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error generating ticket' });
  }
};
