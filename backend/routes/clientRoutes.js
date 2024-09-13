import express from 'express';
import { 
  validateClient,
  createClient, 
  getClientById,
  updateClient, 
  deleteClient,
  getAllClients,
  verifyToken,
  verifyAdmin,
} from '../CRUDOPRATION/clientopreration.js';

const router = express.Router();

 
router.post("/clients", validateClient, createClient);
router.get("/clients", verifyToken, getAllClients);
router.get("/clients/:id", verifyToken, getClientById);
router.put("/clients/:id", verifyToken, updateClient);
router.delete("/clients/:id", verifyToken, verifyAdmin, deleteClient);

export default router;

