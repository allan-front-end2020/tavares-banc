import React from 'react'
import { render} from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const {getByElement}= render(<App />);
  const el = getByElement(/bank/i)
  expect(el).toBeInTheDocument();
});
