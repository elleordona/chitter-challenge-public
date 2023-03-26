// testing for user database

// imports
import User from '../src/models/user.model.js';

import chai from 'chai';
import { expect } from 'chai';
import chaiHttp from 'chai-http';

import server from '../src/server.js';
import testUsersData from './testData/sampleUsers.js';
const testDataArray = testUsersData.users;

chai.use(chaiHttp);

describe('Testing requests on the user database', () => {
	// create server and keep it open so we can make requests during testing
	const testServer = chai.request(server).keepOpen();

	// before each test the database will be cleared and new test data will be inserted
	beforeEach(async () => {
		try {
			await User.deleteMany();
			console.log(`Database cleared`);
		} catch (error) {
			console.log(`Error occurred while clearing database`);
			throw new Error();
		}

		// try {
		// 	console.log(testDataArray);
		// 	await User.insertMany(testDataArray);
		// 	console.log(`Database populated with test Users`);
		// } catch (error) {
		// 	console.log(`Error inserting test data`);
		// 	throw new Error();
		// }
	});

	describe('/POST tests', () => {
		//* Test 21
		it('should create a user that is properly formed', async () => {
			let user = {
				name: `name`,
				username: `username`,
				email: `email@email.com`,
				password: `password`,
			};

			const res = await testServer.post(`/api/auth/register`).send(user);

			expect(res).to.have.status(201);
			expect(res.body).to.have.an(`object`);
			expect(res.body).to.have.property(`username`, user.username);
		});

		//* Test 22
		it('should not create a user without an email', async () => {
			let user = {
				name: `name`,
				username: `username`,
				password: `password`,
			};

			const res = await testServer.post(`/api/auth/register`).send(user);

			expect(res).to.have.status(422);
			expect(res.body).to.have.an(`object`);
			expect(res.text).to.be.eql(`You have missing fields`);
		});

		//* Test 23
		it('should not create a user without a password', async () => {
			let user = {
				name: `name`,
				username: `username`,
				email: `email@email.com`,
			};

			const res = await testServer.post(`/api/auth/register`).send(user);

			expect(res).to.have.status(422);
			expect(res.body).to.have.an(`object`);
			expect(res.text).to.be.eql(`You have missing fields`);
		});

		//* Test 24
		it('should not create a user without a username', async () => {
			let user = {
				name: `name`,
				email: `email@email.com`,
				password: `password`,
			};

			const res = await testServer.post(`/api/auth/register`).send(user);

			expect(res).to.have.status(422);
			expect(res.body).to.have.an(`object`);
			expect(res.text).to.be.eql(`You have missing fields`);
		});

		//* Test 25
		it('should not create a user without a name', async () => {
			let user = {
				username: `username`,
				email: `email@email.com`,
				password: `password`,
			};

			const res = await testServer.post(`/api/auth/register`).send(user);

			expect(res).to.have.status(422);
			expect(res.body).to.have.an(`object`);
			expect(res.text).to.be.eql(`You have missing fields`);
		});
	});
});
