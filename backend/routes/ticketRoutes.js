import express from "express";
import {
  createTicket,
  getAllTickets,
  getTicketById,
  updateTicket,
  deleteTicket,
} from '../CRUDOPRATION/ticketoperation.js';

const router = express.Router();

 
router.post("/ticket", createTicket);
router.get("/ticket", getAllTickets);
router.get("/ticket/:id", getTicketById);
router.put("/ticket/:id", updateTicket);
router.delete("/ticket/:id", deleteTicket);

export default router;
