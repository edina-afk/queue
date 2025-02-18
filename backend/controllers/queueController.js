  
import { Queue } from '../models/queueSchema.js';
import { Staff } from '../models/staffSchema.js';
 

export const serveNextUser = async (req, res) => {
  try {
    
    const nextQueue = await Queue.findOne({ status: 'waiting' }).sort({ timestamp: 1 }).populate('appointment_id');
    if (!nextQueue) {
      return res.status(404).json({ error: 'No waiting users in the queue' });
    }

    
    const availableStaff = await Staff.findOne({ isAvailable: false });
    if (!availableStaff) {
      return res.status(500).json({ error: 'No available staff' });
    }
 
    nextQueue.status = 'served';
    await nextQueue.save();

     
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
