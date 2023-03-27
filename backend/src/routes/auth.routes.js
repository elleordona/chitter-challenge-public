// register and signin route

// imports
import express from 'express';
import { register, login } from '../controllers/auth.controller.js';
import { newUserValidation, userValidation } from '../middlewares/user.validation.js';

const router = express.Router();

router.post(`/register`, newUserValidation, register);

router.post(`/login`, userValidation, login);

export default router;
