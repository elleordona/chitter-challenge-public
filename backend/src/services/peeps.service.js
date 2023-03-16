// functions of the server

// imports
import Peep from '../models/peep.model.js';

export const getAllPeepsService = async () => {
	try {
		return await Peep.find({});
	} catch (e) {
		throw e;
	}
};
