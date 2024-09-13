import Ticket from "../models/ticketSchema.js";
 
export const createTicket = async (req, res) => {
  try {
    const newTicket = new Ticket(req.body);
    await newTicket.save();
    res.status(201).json(newTicket);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

 
export const getAllTickets = async (req, res) => {
  try {
    const tickets = await Ticket.find().populate("queue_id").populate("staff_id");
    res.json(tickets);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

 
export const getTicketById = async (req, res) => {
  try {
    const ticket = await Ticket.findById(req.params.id).populate("queue_id").populate("staff_id");
    if (!ticket) return res.status(404).json({ message: "Ticket not found" });
    res.json(ticket);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
 
export const updateTicket = async (req, res) => {
  try {
    const updatedTicket = await Ticket.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!updatedTicket) return res.status(404).json({ message: "Ticket not found" });
    res.json(updatedTicket);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
 
export const deleteTicket = async (req, res) => {
  try {
    const deletedTicket = await Ticket.findByIdAndDelete(req.params.id);
    if (!deletedTicket) return res.status(404).json({ message: "Ticket not found" });
    res.json({ message: "Ticket deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
