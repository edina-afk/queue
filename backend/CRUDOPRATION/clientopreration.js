import Client from "../models/clientSchema.js";
import bcrypt from "bcrypt";
import { check, validationResult } from "express-validator";
import jwt from 'jsonwebtoken';
import { jwtSecret, adminEmail } from '../config.js';

 
const generateToken = (client) => {
  const payload = { id: client._id, role: client.role };
  const options = { expiresIn: '1h' };
  return jwt.sign(payload, jwtSecret, options);
};

 
export const verifyToken = (req, res, next) => {
  const token = req.header('Authorization')?.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'Access Denied. No token provided.' });
  }

  try {
    const decoded = jwt.verify(token, jwtSecret);
    req.client = decoded;
    next();
  } catch (error) {
    res.status(400).json({ message: 'Invalid Token' });
  }
};

 
export const verifyAdmin = (req, res, next) => {
  if (req.client.role !== 'admin') {
    return res.status(403).json({ message: 'Access Denied. Admins only.' });
  }
  next();
};

 
export const validateClient = [
  check("email").isEmail().withMessage("Please provide a valid email"),
  check("password").isStrongPassword({
    minLength: 8,
    minLowercase: 1,
    minUppercase: 1,
    minNumbers: 1,
    minSymbols: 1
  }).withMessage("Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one number, and one special character")
];
 
export const createClient = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(req.body.password, saltRounds);

     
    const role = req.body.email === adminEmail ? 'admin' : 'user';

    const newClient = new Client({
      ...req.body,
      password: hashedPassword,
      role: role,  
    });

    await newClient.save();
    const token = generateToken(newClient);
    res.status(201).json({ client: newClient, token });

  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

 
export const getAllClients = async (req, res) => {
  try {
    const clients = await Client.find();
    res.json(clients);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getClientById = async (req, res) => {
  try {
    const client = await Client.findById(req.params.id);
    if (!client) return res.status(404).json({ message: 'Client not found' });
    res.json(client);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateClient = async (req, res) => {
  try {
    const updatedClient = await Client.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedClient) return res.status(404).json({ message: 'Client not found' });
    res.json(updatedClient);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const deleteClient = async (req, res) => {
  try {
    const deletedClient = await Client.findByIdAndDelete(req.params.id);
    if (!deletedClient) return res.status(404).json({ message: 'Client not found' });
    res.json({ message: 'Client deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export { generateToken };



