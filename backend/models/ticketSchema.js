import mongoose from "mongoose"

const ticketSchema = new mongoose.Schema({
  ticket_number: {
    type: Number,
    required: true,
    unique: true
  },
  queue_id: {
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Queue',
    required: true
  },
  issued_at: {
    type: Date,
    required: true
  },
  staff_id: {
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Staff',
    required: false
  }
});

 export const Ticket = mongoose.model('Ticket', ticketSchema);
 export default Ticket