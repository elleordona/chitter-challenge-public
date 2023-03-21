// validates that the new peep created has all the necessary components

// imports
import { check } from 'express-validator';

export const newPeepValidation = [check('username').exists(), check('peepBody').exists(), check('date').exists().isISO8601()];
