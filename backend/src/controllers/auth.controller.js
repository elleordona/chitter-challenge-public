// validate the construction of a new user and signing in of user

// imports
import User from '../models/user.model.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { handleError } from '../middlewares/error.js';

export const register = async (req, res, next) => {
	try {
		const { email, username, password } = req.body;

		// check if the entered email exists
		const existingEmail = await User.findOne({ email });

		if (existingEmail) {
			return res.status(400).json({ message: `Email is already in use` });
		}

		// check if the entered username exists
		const existingUsername = await User.findOne({ username });

		if (existingUsername) {
			return res.status(400).json({ message: `Username is already in use` });
		}

		// encrypting the password the user signs up with
		const salt = bcrypt.genSaltSync(10);
		const hash = bcrypt.hashSync(password, salt);
		const newUser = new User({ ...req.body, password: hash });

		await newUser.save();

		// assign token to new user using the _id
		const token = jwt.sign({ id: newUser._id }, process.env.JWT);

		const { password: userPassword, ...othersData } = newUser._doc;

		// save user with the token
		// token is sent to browser
		// user is logged in
		res
			.cookie('access_token', token, {
				httpOnly: true,
			})
			.status(200)
			.json(othersData);
	} catch (err) {
		next(err);
	}
};
