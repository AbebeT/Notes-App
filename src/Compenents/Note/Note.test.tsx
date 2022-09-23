import React from 'react';
import { render, screen } from '@testing-library/react';
import Note from './Note';

const mockTitle = {
  id: 1,
  title: "Sample Note 1",
  content: "This a sample note",
}

const handleOnDeleteMock = jest.fn();

test('renders learn react link', () => {
  render(<Note key={mockTitle.id} id={mockTitle.id} content={mockTitle.content} title={mockTitle.title} onDelete={handleOnDeleteMock} />);
  expect(screen.getByTestId(/note-item/)).toBeInTheDocument();;
  

});
