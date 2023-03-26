// model for posting peeps

export default class PeepModel {
	constructor(username, peepBody, date, _id = null) {
		this.username = username;
		this.peepBody = peepBody;
		this.date = date;
		this._id = _id;
	}
}
