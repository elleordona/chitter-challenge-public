// route for getting all the peeps on the server

// imports
import express from 'express';
import { allPeeps } from '../controllers/allPeeps.controller.js';

const router = express.Router();

router.route(`/`).get(allPeeps);

export { router as allPeeps };
