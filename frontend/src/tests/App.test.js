// testing for the App component

// imports
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import App from '../App';
import * as api from '../asyncFunctions/peepAPICalls';

import samplePeeps from '../samplePeeps.json';

jest.mock('../asyncFunctions/peepAPICalls');

describe('App tests', () => {
	afterEach(() => jest.resetAllMocks());

	describe('App pre and post data return render tests', () => {
		const expectedReturn = { peeps: [], status: 204, error: { type: `get`, message: `Deliberate Get Error` } };

		//* Test 13
		test('should render "Peeps are loading..." on initial render ', async () => {
			api.getPeeps.mockImplementation(() => {});
			render(
				<MemoryRouter>
					<App />
				</MemoryRouter>
			);
			expect(await screen.findByText(/peeps are loading/i)).toBeInTheDocument();
		});
	});
});
