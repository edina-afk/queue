import mongoose from "mongoose"

const staffSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },

  officeNumber: {
    type: String,
    required: true
  },
  isAvailable: {
    type: Boolean,
    default: true
  }
});

 export const Staff = mongoose.model('Staff', staffSchema);
export default Staff;