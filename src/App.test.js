import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.get('.App-link');
  expect(linkElement).toBeInTheDocument();
});
