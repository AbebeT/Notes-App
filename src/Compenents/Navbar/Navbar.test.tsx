import React from 'react';
import { render, screen } from '@testing-library/react';
import Navbar from './Navbar';

test('renders the Navbar component', () => {
  render(<Navbar />);

  const element = screen.getByTestId(/user-avatar/);
  expect(element).toBeInTheDocument();
  
});


