// register and signin route

// imports
import express from 'express';
import { register } from '../controllers/auth.controller.js';
import { newUserValidation } from '../middlewares/user.validation.js';

const router = express.Router();

router.post(`/register`, newUserValidation, register);

export default router;
