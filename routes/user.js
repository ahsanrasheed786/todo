import express from 'express';
import {getmyprofiles, logOut, login, registered } from '../controller/user.js';
import { isAuthenticated } from '../middleware/auth.js';
const router = express.Router();

router.post('/register', registered); 
router.post('/login', login); 
router.get('/logout', logOut); 

router.get('/me', isAuthenticated, getmyprofiles); 

export default router;
