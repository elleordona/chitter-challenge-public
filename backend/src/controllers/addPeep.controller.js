// validates the construction of the new peep and notifies the user if it was added to the server

// imports
import { validationResult } from 'express-validator';
import { addPeepService } from '../services/peeps.service.js';

export const addPeepController = async (req, res) => {
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		return res.status(422).send(`Posting new Peep failed`);
	}

	try {
		const peep = await addPeepService(req.body);
		res.status(201).json({ peep });
	} catch (error) {
		res.status(400).send(`Posting new Peep failed`);
	}
};
