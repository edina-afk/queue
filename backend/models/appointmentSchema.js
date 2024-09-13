import mongoose from "mongoose"


const appointmentSchema = new mongoose.Schema({
  date: {
    type: Date,
    required: true
},
client_id: {
    type: mongoose.Schema.Types.ObjectId,  
    ref: 'Client',
    required: true
  },

tinNumber: {
    type: String,
  },
barcode: {
    type: String, 
    unique: true
  },

appointment_type: {
    type: String,
    enum: ['Level A', 'Level B', 'Level C'],
  },

status: {
    type: String,
    enum: ['scheduled', 'completed', 'canceled', 'confirmed'],  
    default: 'scheduled'  
  },
   
});

 
export const Appointment = mongoose.model('Appointment', appointmentSchema);

export default Appointment;
