// testing for the Feed component

// imports
import { render, screen } from '@testing-library/react';
import Feed from '../components/Feed/Feed';
import testData from '../samplePeeps.json';

describe('Feed tests', () => {
	describe('Feed conditional render tests', () => {
		//* Test 7
		test('should display "Peeps are loading..." when data length is 0', () => {
			// Arrange
			// Act
			render(<Feed data={{ peeps: [], error: `` }} />);
			// render Feed with no data
			// Assert
			expect(screen.getByText(/peeps are loading.../i)).toBeInTheDocument();
		});

		//* Test 8
		test('should display list of peeps when data contains peep objects', () => {
			// Arrange
			render(<Feed data={{ peeps: testData, error: `` }} />);
			const peepList = screen.getAllByRole(`listitem`);
			// Act
			// Assert
			expect(peepList.length).toBe(testData.length);
		});
	});

	describe('Peep construction', () => {
		//* Test 15
		test('should include the time the peep was created', async () => {
			// Arrange
			render(<Feed data={{ peeps: testData, error: `` }} />);
			// Act
			const time = await screen.findAllByRole(`time`);
			// Assert
			expect(time.length).toBe(testData.length);
		});
	});
});
