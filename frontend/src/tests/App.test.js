// testing for the App component

// imports
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import App from '../App';
import * as api from '../asyncFunctions/peepAPICalls';

// import samplePeeps from '../samplePeeps.json';

jest.mock('../asyncFunctions/peepAPICalls');

describe('App tests', () => {
	afterEach(() => jest.resetAllMocks());

	describe('App pre and post data return render tests', () => {
		const expectedReturn = { peeps: [], status: 204, error: { type: `get`, message: `Deliberate Get Error` } };

		//* Test 13
		test('should render "Peeps are loading..." on initial render', async () => {
			// Arrange
			api.getPeeps.mockImplementation(() => {});
			render(
				<MemoryRouter>
					<App />
				</MemoryRouter>
			);

			// Act
			// Assert
			expect(await screen.findByText(/peeps are loading/i)).toBeInTheDocument();
		});

		//* Test 14
		test('should render "No Peeps" message if empty array returned from server', async () => {
			// Arrange
			api.getPeeps.mockImplementation(() => expectedReturn);
			render(
				<MemoryRouter>
					<App />
				</MemoryRouter>
			);

			// Act
			const getErrorRender = await screen.findAllByText(`There was a problem getting the Peeps: ${expectedReturn.error.message}`);

			// Assert
			expect(getErrorRender.length).toBeGreaterThan(0);
		});
	});
});
