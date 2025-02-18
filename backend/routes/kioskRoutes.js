  
import express from 'express';
import { checkInUser } from '../controllers/kioskController.js';  

const router = express.Router();

 
router.post('/check-in', checkInUser);  

export default router;
