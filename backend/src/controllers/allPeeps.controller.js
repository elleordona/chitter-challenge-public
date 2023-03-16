// tries to grab all the peeps in the server and notifies the user if it was successful

// imports
import { getAllPeepsService } from '../services/peeps.service.js';

export const allPeeps = async (req, res) => {
	try {
		const peeps = await getAllPeepsService();
		res.json(peeps);
	} catch (e) {
		res.status(404).send(`Not found`);
	}
};
