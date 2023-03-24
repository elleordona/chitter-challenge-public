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

		describe('Error returned', () => {
			//* Test 11
			test('should return error message when error is return from server', async () => {
				const message = `Data not available from the server:${testError.message}`;
				const expectedReturn = {
					peeps: [],
					status: 400,
					error: {
						type: `get`,
						message,
					},
				};

				axiosMock.get.mockRejectedValueOnce({ response: { status: 400, message: `Test Error` } });
				functionResult = await api.getPeeps();

				expect(functionResult).toStrictEqual(expectedReturn);
			});
		});

		describe('Empty array returned', () => {
			//* Test 12
			test('should return an empty array and no peeps error message when an empty array is returned from server', async () => {
				const returnedError = {
					peeps: [],
					status: 204,
					error: {
						type: `get`,
						message: `Data not available from the server: There are no peeps to retrieve, please add one`,
					},
				};

				axiosMock.get.mockResolvedValueOnce({ data: [], status: 204 });
				functionResult = await api.getPeeps();

				expect(functionResult).toStrictEqual(returnedError);
			});
		});
	});
});
