import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import '@testing-library/jest-dom'


global.ResizeObserver = jest.fn().mockImplementation(() => ({
  observe: jest.fn(),
  unobserve: jest.fn(),
  disconnect: jest.fn(),
}))

test('renders the App component', () => {
  const { getByTestId } = render(<App />);
  const appElement = getByTestId('app');
  expect(appElement).toBeInTheDocument();
});

test('changes active part when arrow buttons are clicked', () => {
  render(<App />);
  const leftArrowButton = screen.getByTestId('left-arrow');
  const rightArrowButton = screen.getByTestId('right-arrow');

  // Initially, the active part is 0, so clicking the right arrow should change it to 1
  fireEvent.click(rightArrowButton);
  expect(screen.getByText('Mesh')).toBeInTheDocument();

  // Click the left arrow to go back to the initial active part (0)
  fireEvent.click(leftArrowButton);
  expect(screen.getByText('Laces')).toBeInTheDocument();
});
