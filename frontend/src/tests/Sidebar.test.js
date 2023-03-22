// testing for Sidebar component

// imports
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Sidebar from '../components/Sidebar/Sidebar.jsx';

describe('Sidebar Tests', () => {
	//* Test 6
	test('should match snapshot', () => {
		expect(
			render(
				<MemoryRouter>
					<Sidebar />
				</MemoryRouter>
			)
		).toMatchSnapshot();
	});
});
