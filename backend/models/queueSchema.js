import mongoose from "mongoose"

const queueSchema = new mongoose.Schema({
  appointment_id: {
    type: mongoose.Schema.Types.ObjectId,  
    ref: 'Appointment',
    required: true
  },
  queue_number: {
    type: Number,
    required: true
  },
  status: {
    type: String,
    enum: ['waiting', 'served'],
    default: 'waiting'
  },
  timestamp: {
    type: Date,
    required: true
  },
   
  
});

 

export const Queue = mongoose.model('Queue', queueSchema);
export default Queue;