import express from "express";
import {
  createAppointment,
  getAppointments,
  getAppointmentById,
  updateAppointment,
  deleteAppointment,} from "../CRUDOPRATION/appointmentoperation.js";

const router = express.Router();

router.post("/appointments", createAppointment);
router.get("/appointments", getAppointments);
router.get("/appointment:id", getAppointmentById);
router.put("/appointment/:id", updateAppointment);
router.delete("/appointment/:id", deleteAppointment);

export default router;
