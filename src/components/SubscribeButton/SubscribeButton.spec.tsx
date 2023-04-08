import { render, screen } from '@testing-library/react';
import { signIn, useSession } from 'next-auth/react';
import SubscribeButton from '../SubscribeButton';

jest.mock('next-auth/react');

describe('SubscribeButton component', () => {
  it('should render "Subscribe now" button when there is no session', () => {
    // Arrange
    useSession.mockReturnValue({ data: null });

    // Act
    render(<SubscribeButton priceId="price_123" />);
    const buttonElement = screen.getByRole('button', { name: /subscribe now/i });

    // Assert
    expect(buttonElement).toBeInTheDocument();
  });

  it('should call signIn function when button is clicked and there is no session', () => {
    // Arrange
    const signInMock = jest.fn();
    useSession.mockReturnValue({ data: null });
    signIn.mockImplementation(signInMock);

    // Act
    render(<SubscribeButton priceId="price_123" />);
    const buttonElement = screen.getByRole('button', { name: /subscribe now/i });
    buttonElement.click();

    // Assert
    expect(signInMock).toHaveBeenCalledWith('github');
  });

  
});
