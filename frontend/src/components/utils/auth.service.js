// auth services

// imports
import axios from 'axios';

const API_URL = `${process.env.REACT_APP_CHITTERURL}/api/auth`;

const register = async (name, username, email, password) => {
	try {
		const response = await axios.post(`${API_URL}/register`, {
			name,
			username,
			email,
			password,
		});
		const data = await response.data;

		return data;
	} catch (error) {
		return error;
	}
};

const authService = {
	register,
};

export default authService;
