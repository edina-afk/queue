import Queue from '../models/queueSchema.js';

// Create a new Queue
export const createQueue = async (req, res) => {
  try {
    const newQueue = new Queue(req.body);
    await newQueue.save();
    res.status(201).json(newQueue);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get all Queues
export const getAllQueues = async (req, res) => {
  try {
    const queues = await Queue.find().populate('appointment_id');
    res.json(queues);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a single Queue by ID
export const getQueueById = async (req, res) => {
  try {
    const queue = await Queue.findById(req.params.id).populate('appointment_id');
    if (!queue) return res.status(404).json({ message: 'Queue not found' });
    res.json(queue);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update a Queue by ID
export const updateQueue = async (req, res) => {
  try {
    const updatedQueue = await Queue.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!updatedQueue) return res.status(404).json({ message: 'Queue not found' });
    res.json(updatedQueue);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete a Queue by ID
export const deleteQueue = async (req, res) => {
  try {
    const deletedQueue = await Queue.findByIdAndDelete(req.params.id);
    if (!deletedQueue) return res.status(404).json({ message: 'Queue not found' });
    res.json({ message: 'Queue deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
