import express from "express";
import {
  createStaff,
  getAllStaff,
  getStaffById,
  updateStaff,
  deleteStaff,
} from '../CRUDOPRATION/staffoperation.js';

const router = express.Router();

 
router.post("/staff", createStaff);
router.get("/staff", getAllStaff);
router.get("/staff/:id", getStaffById);
router.put("/staff/:id", updateStaff);
router.delete("/staff/:id", deleteStaff);

export default router;
