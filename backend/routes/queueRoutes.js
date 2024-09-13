import express from 'express';
import { createQueue, 
         getAllQueues, 
         getQueueById, 
         updateQueue, 
         deleteQueue } from '../CRUDOPRATION/queueoreration.js';

const router = express.Router();

router.post('/queue', createQueue);
router.get('/queue', getAllQueues);
router.get('/queue/:id', getQueueById);
router.put('/queue/:id', updateQueue);
router.delete('/:queue/id', deleteQueue);

export default router;
