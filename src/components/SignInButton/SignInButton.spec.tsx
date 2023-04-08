import { render, screen } from '@testing-library/react';
import SignInButton from '../SignInButton';

jest.mock('next-auth/react', () => ({
  useSession: () => ({
    data: null,
  }),
}));

describe('SignInButton component', () => {
  it('should render "Sign in with github" button when there is no session', () => {
    render(<SignInButton />);
    const signInButton = screen.getByRole('button', { name: /sign in with github/i });
    expect(signInButton).toBeInTheDocument();
  });
});
