// model for creating user

export default class newUserModel {
	constructor(name, username, email, password, _id = null) {
		this.name = name;
		this.username = username;
		this.email = email;
		this.password = password;
		this._id = _id;
	}
}
