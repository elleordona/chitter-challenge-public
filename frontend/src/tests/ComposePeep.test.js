// testing for ComposePeep component

// imports
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ComposePeep from '../components/ComposePeep/ComposePeep.jsx';

// mock implementation for DateCreated component
jest.mock('../components/utils/DateCreated.jsx', () => {
	return function MockDateCreated() {
		return <span data-testid="dateCreated">Date Created Component</span>;
	};
});

describe('ComposePeep tests', () => {
	const mockSubmitAction = jest.fn();
	const testPeep = {};

	describe('ComposePeep render tests', () => {
		//* Test 16
		test('should render a peep input and label', () => {
			// Arrange
			// Act
			render(<ComposePeep submitAction={mockSubmitAction} peep={testPeep} />);

			// Assert
			expect(screen.getByPlaceholderText(/what's happening?/i)).toBeInTheDocument();
		});

		//* Test 17
		test('should render a submit button', () => {
			// Arrange
			// Act
			render(<ComposePeep submitAction={mockSubmitAction} peep={testPeep} />);

			// Assert
			expect(screen.getByText(`Submit`)).toBeInTheDocument();
		});
	});

	describe('ComposePeep manipulation tests', () => {
		//* Test 18
		test('should render the new value in the input when the peepBody is updated', () => {
			// Arrange
			render(<ComposePeep submitAction={mockSubmitAction} peep={testPeep} />);
			const testPeepBody = `Test Peep`;
			const peepInput = screen.getByPlaceholderText(/what's happening?/i);

			// Act
			userEvent.type(peepInput, testPeepBody);

			// Assert
			expect(peepInput).toHaveValue(testPeepBody);
		});

		//* Test 19
		test('should enable the submit button when the peepBody is populated', () => {
			// Arrange
			render(<ComposePeep submitAction={mockSubmitAction} peep={testPeep} />);
			const testPeepBody = `Test Peep`;
			const peepInput = screen.getByPlaceholderText(/what's happening?/i);
			const submitBtn = screen.getByDisplayValue(/submit/i);

			expect(submitBtn).toBeDisabled();

			// Act
			userEvent.type(peepInput, testPeepBody);

			// Assert
			expect(submitBtn).not.toBeDisabled();
		});
	});

	describe('ComposePeep submission tests', () => {
		//* Test 20
		xtest('should call the submitPeep prop function when the submit button is clicked', () => {
			// Arrange
			render(/* add the ComposePeep component */);
			const testPeepBody = `Test Peep`;
			const peepInput = screen.getByPlaceholderText(/what's happening?/i);
			const submitBtn = screen.getByDisplayValue(/submit/i);

			// Act
			userEvent.type(peepInput, testPeepBody);
			userEvent.click(submitBtn);

			// Assert
			expect(mockSubmitAction).toHaveBeenCalledTimes(1);
			expect(mockSubmitAction).toHaveBeenCalledWith(undefined, undefined, testPeepBody, null);
		});
	});
});
