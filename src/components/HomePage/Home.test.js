import { render, screen } from '@testing-library/react';
import Home from './Home';

test('renders welcome text', () => {
  render(<Home />);
  const text = screen.getByText(/Welcome/);
  expect(text).toBeInTheDocument();
});
