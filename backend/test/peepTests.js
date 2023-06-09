// testing the server functions

// imports
import Peep from '../src/models/peep.model.js';

import chai from 'chai';
import { expect } from 'chai';
import chaiHttp from 'chai-http';

import server from '../src/server.js';
import testData from './testData/samplePeeps.js';
const testDataArray = testData.peeps;

chai.use(chaiHttp);

describe('Testing requests on the peeps database', () => {
	// create server and keep it open so we can make requests during the testing
	const testServer = chai.request(server).keepOpen();

	// before each test the database will be cleared and new test data will be inserted
	beforeEach(async () => {
		try {
			await Peep.deleteMany();
			console.log(`Database cleared`);
		} catch (error) {
			console.log(`Error Occurred while clearing database`);
			throw new Error();
		}

		try {
			await Peep.insertMany(testDataArray);
			console.log(`Database populated with test Peeps`);
		} catch (error) {
			console.log(`Error inserting test data`);
			throw new Error();
		}
	});

	describe('/GET tests', () => {
		//* Test 1
		it('should return all the peeps as an array', async () => {
			const res = await testServer.get(`/`).send();

			expect(res).to.have.status(200);
			expect(res.body).to.be.an(`array`);
			expect(res.body.length).to.equal(testDataArray.length);
		});
	});

	describe('/POST tests', () => {
		//* Test 2
		it('should create a peep that is properly formed', async () => {
			let peep = {
				username: 'testUser',
				peepBody: 'test message',
				date: '2019-05-27T00:00:00.000Z',
			};

			const res = await testServer.post(`/add`).send(peep);

			expect(res).to.have.status(201);
			expect(res.body).to.have.an(`object`);
			expect(res.body.peep).to.have.property(`peepBody`, peep.peepBody);
		});

		//* Test 3
		it('should not create a peep without a peepBody field', async () => {
			let peep = {
				username: `testUser`,
				date: `2019-05-27T00:00:00.000Z`,
			};

			const res = await testServer.post(`/add`).send(peep);

			expect(res).to.have.status(422);
			expect(res).to.have.property(`error`);
			expect(res.text).to.be.eql(`Posting new Peep failed`);
		});

		//* Test 4
		it('should not create a peep without a date field', async () => {
			let peep = {
				username: `testUser`,
				peepBody: `testMessage`,
			};

			const res = await testServer.post(`/add`).send(peep);

			expect(res).to.have.status(422);
			expect(res).to.have.property(`error`);
			expect(res.text).to.be.eql(`Posting new Peep failed`);
		});

		//* Test 5
		it('should not create a peep without a valid date field', async () => {
			let peep = {
				username: `testUser`,
				peepBody: `testMessage`,
				date: `March 15th 2023`,
			};

			const res = await testServer.post(`/add`).send(peep);

			expect(res).to.have.status(422);
			expect(res).to.have.property(`error`);
			expect(res.text).to.be.eql(`Posting new Peep failed`);
		});
	});
});
