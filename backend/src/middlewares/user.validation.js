// validation for new user

// imports
import { check } from 'express-validator';

export const newUserValidation = [check(`name`).exists(), check('username').exists(), check(`email`).exists().isEmail(), check(`password`).exists()];
