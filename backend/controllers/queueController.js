 // queueController.js
import { Queue } from '../models/queueSchema.js';
import { Staff } from '../models/staffSchema.js';
 

export const serveNextUser = async (req, res) => {
  try {
    // Find the next waiting queue entry
    const nextQueue = await Queue.findOne({ status: 'waiting' }).sort({ timestamp: 1 }).populate('appointment_id');
    if (!nextQueue) {
      return res.status(404).json({ error: 'No waiting users in the queue' });
    }

    // Find available staff member
    const availableStaff = await Staff.findOne({ isAvailable: false });
    if (!availableStaff) {
      return res.status(500).json({ error: 'No available staff' });
    }

    // Update queue entry to 'served'
    nextQueue.status = 'served';
    await nextQueue.save();

    // Update staff to available
    availableStaff.isAvailable = true;
    await availableStaff.save();

    res.status(200).json({
      message: 'User served successfully',
      queue_number: nextQueue.queue_number,
      staff: availableStaff.name,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error serving the next user' });
  }
};
