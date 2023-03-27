// validate the construction of a new user and signing in of user

// imports
import User from '../models/user.model.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { validationResult } from 'express-validator';
import { handleError } from '../middlewares/error.js';

export const register = async (req, res, next) => {
	try {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(422).send(`You have missing fields`);
		}

		// check if the entered email exists
		const { email, username, password } = req.body;
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
			.status(201)
			.json(othersData);
	} catch (err) {
		next(err);
	}
};

export const login = async (req, res, next) => {
	try {
		// check if the email exists
		const user = await User.findOne({ email: req.body.email });

		if (!user) return next(handleError(404, `User not Found`));

		// check if the passwords match
		const passwordMatch = await bcrypt.compare(req.body.password, user.password);

		if (!passwordMatch) return next(handleError(404, `Incorrect Password`));

		const token = jwt.sign({ id: user._id }, process.env.JWT);
		const { password: userPassword, ...othersData } = user._doc;

		res.status(200).send({
			id: user._id,
			name: user.name,
			username: user.username,
			email: user.email,
			accessToken: token,
		});
	} catch (err) {
		next(err);
	}
};
