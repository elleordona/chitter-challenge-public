// testing for the API calls functions

// imports
import axiosMock from 'axios';
import * as api from '../asyncFunctions/peepAPICalls';
import samplePeeps from '../samplePeeps.json';

jest.mock('axios');

describe('External Data Tests', () => {
	const testError = { message: ` Test Error` };
	let functionResult;

	describe('getPeeps tests', () => {
		describe('Normal Data returned', () => {
			const expectedReturn = { peeps: samplePeeps, status: 200 };
			const resolvedRequestWithData = { data: samplePeeps, status: 200 };

			beforeEach(async () => {
				axiosMock.get.mockResolvedValueOnce(resolvedRequestWithData);
				functionResult = await api.getPeeps();
			});

			//* Test 9
			test('should make a get request via axios', () => {
				expect(axiosMock.get).toHaveBeenCalledTimes(1);
				expect(axiosMock.get).toHaveBeenCalledWith(process.env.REACT_APP_CHITTERURL);
			});

			//* Test 10
			test('should return sample peeps when valid data is returned from server', () => {
				expect(functionResult).toStrictEqual(expectedReturn);
			});
		});
	});
});
