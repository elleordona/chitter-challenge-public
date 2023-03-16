// model for the construction of a peep

// imports
import mongoose from 'mongoose';

const peepSchema = new mongoose.Schema({
	username: { type: String },
	peepBody: { type: String, required: true },
	date: { type: Date, default: Date.now, required: true },
});

const Peep = mongoose.model(`Peep`, peepSchema);

export default Peep;
