// testing for Sidebar component

// imports
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import AppNavbar from '../components/Navbar/Navbar.jsx';

describe('Sidebar Tests', () => {
	//* Test 6
	test('should match snapshot', () => {
		expect(
			render(
				<MemoryRouter>
					<AppNavbar />
				</MemoryRouter>
			)
		).toMatchSnapshot();
	});
});
