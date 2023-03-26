// verify before allowing access to browser

// imports
import jwt from 'jsonwebtoken';
import { handleError } from './error.js';

export const verifyToken = (req, res, next) => {
	const token = req.cookies.access_token;

	if (!token) return next(handleError(401, `You do not have access here`));

	jwt.verify(token, process.env.JWT, (err, user) => {
		if (err) return next(handleError(403, `Token Invalid`));
		req.user = user;
		next();
	});
};
