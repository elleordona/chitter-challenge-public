// testing for the Feed component

// imports
import { render, screen } from '@testing-library/react';
import Feed from '../components/Feed/Feed';
import testData from '../samplePeeps.json';

describe('Feed tests', () => {
	describe('Feed conditional render tests', () => {
		//* Test 7
		it('should display "Peeps are loading..." when data length is 0', () => {
			// Arrange
			// Act
			render(<Feed allPeeps={{ peeps: [] }} />);
			// render Feed with no data
			// Assert
			expect(screen.getByText(/peeps are loading.../i)).toBeInTheDocument();
		});
	});
});
