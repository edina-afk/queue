import mongoose from "mongoose"

 
const clientSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minlength: 8
    },
    phoneNumber: {
        type: String,
        required: true,
        

    },
    role: {
        type: String,
        enum: ["user", "admin"],   
        default: "user"            
      }
    
});

 
  const Client = mongoose.model('Client', clientSchema);
  export default Client;


