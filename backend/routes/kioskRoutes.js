 // kioskRoutes.js
import express from 'express';
import { checkInUser } from '../controllers/kioskController.js'; // Import the check-in logic

const router = express.Router();

// Route for user check-in via the kiosk
router.post('/check-in', checkInUser); // The check-in endpoint

export default router;
