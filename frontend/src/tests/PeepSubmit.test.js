// testing for PeepSubmit component

// imports
import { render, screen } from '@testing-library/react';
import { createMemoryRouter, RouterProvider } from 'react-router-dom';
import userEvent from '@testing-library/user-event';

import samplePeeps from '../samplePeeps.json';

import PeepSubmit from '../components/PeepSubmit/PeepSubmit.jsx';

// mock implementation for DateCreated component
jest.mock('../components/utils/DateCreated.jsx', () => {
	return function MockDateCreated() {
		return <span data-testid="dateCreated">Date Created Component</span>;
	};
});

// mock implementation for id generation
jest.mock('../components/utils/generateId.js', () => () => `test_id`);

describe('PeepSubmit Tests', () => {
	const mockSubmit = jest.fn(() => {});

	describe('Testing Rendering and Functionality', () => {
		beforeEach(() => {
			const routes = [
				{
					path: '/add',
					element: <PeepSubmit submitAction={mockSubmit} />,
				},
				{
					path: '/',
					element: <p>Redirected</p>,
				},
			];

			const router = createMemoryRouter(routes, {
				initialEntries: [`/add`],
				initialIndex: 0,
			});

			render(<RouterProvider router={router} />);
		});

		//* Test 41
		test('should render PeepForm', () => {
			// Arrange
			const form = document.querySelector(`form`);

			// Act
			// Assert
			expect(form).toBeTruthy();
		});
	});
});
