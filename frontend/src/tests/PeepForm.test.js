// testing for PeepForm component

// imports
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import PeepForm from '../components/PeepForm/PeepForm.jsx';
import { BrowserRouter } from 'react-router-dom';

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
			const currentUser = { username: 'test user' };
			// Act
			render(
				<BrowserRouter>
					<PeepForm submitAction={mockSubmitAction} peep={testPeep} currentUser={currentUser} />
				</BrowserRouter>
			);

			// Assert
			expect(screen.getByPlaceholderText(/what's happening?/i)).toBeInTheDocument();
		});

		//* Test 17
		test('should render a submit button', () => {
			// Arrange
			const currentUser = { username: 'test user' };
			// Act
			render(
				<BrowserRouter>
					<PeepForm submitAction={mockSubmitAction} peep={testPeep} currentUser={currentUser} />
				</BrowserRouter>
			);

			// Assert
			expect(screen.getByText(`Submit`)).toBeInTheDocument();
		});
	});

	describe('ComposePeep manipulation tests', () => {
		//* Test 18
		test('should render the new value in the input when the peepBody is updated', () => {
			// Arrange
			const currentUser = { username: 'test user' };
			// Act
			render(
				<BrowserRouter>
					<PeepForm submitAction={mockSubmitAction} peep={testPeep} currentUser={currentUser} />
				</BrowserRouter>
			);
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
			const currentUser = { username: 'test user' };
			// Act
			render(
				<BrowserRouter>
					<PeepForm submitAction={mockSubmitAction} peep={testPeep} currentUser={currentUser} />
				</BrowserRouter>
			);
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
		test('should call the submitPeep prop function when the submit button is clicked', () => {
			// Arrange
			const currentUser = { username: 'test user' };
			// Act
			render(
				<BrowserRouter>
					<PeepForm submitAction={mockSubmitAction} peep={testPeep} currentUser={currentUser} />
				</BrowserRouter>
			);
			const testPeepBody = `Test Peep`;
			const peepInput = screen.getByPlaceholderText(/what's happening?/i);
			const submitBtn = screen.getByDisplayValue(/submit/i);

			// Act
			userEvent.type(peepInput, testPeepBody);
			userEvent.click(submitBtn);

			// Assert
			expect(mockSubmitAction).toHaveBeenCalledTimes(1);
			expect(mockSubmitAction).toHaveBeenCalledWith('Test Peep', null, undefined);
		});
	});
});
