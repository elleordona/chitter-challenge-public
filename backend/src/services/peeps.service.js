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

export const addPeepService = async (peep) => {
	try {
		const newPeep = new Peep(peep);
		return await newPeep.save();
	} catch (e) {
		throw e;
	}
};
