
import express from 'express';
import { IsCompletedTask, deleteTask, getMytasks, newTask } from '../controller/task.js';
import { isAuthenticated } from '../middleware/auth.js';

const router=express.Router();

router.post('/new', isAuthenticated, newTask)
router.get('/mytask', isAuthenticated, getMytasks)
router.patch('/iscompleted/:id', isAuthenticated, IsCompletedTask)
router.delete('/delete/:id', isAuthenticated, deleteTask)






export default router