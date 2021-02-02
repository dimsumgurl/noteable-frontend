import { render, screen } from '@testing-library/react';
import Login from './Login';

test('renders login screen', () => {
  render(<Login />);
  const usernameLabel = screen.getByText(/Username/i);
  expect(usernameLabel).toBeInTheDocument();

  const passwordLabel = screen.getByText(/Password/i);
  expect(passwordLabel).toBeInTheDocument();

  const rememberLabel = screen.getByText(/Remember Me/i);
  expect(rememberLabel).toBeInTheDocument();
});
