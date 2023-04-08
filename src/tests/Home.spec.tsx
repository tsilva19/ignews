import { render } from '@testing-library/react';
import HomePage from '../pages/index';


jest.mock('next/router')
jest.mock('next-auth/react', () => ({
  useSession: () => ({
    data: null,
  }),
}));
describe('HomePage', () => {
  it('should render the component with the correct title and price', () => {
    const product = {
      priceId: '123',
      amount: 9.98,
    };
    const { getByTitle, getByText } = render(<HomePage product={product} />);
    
    expect(getByText(/news about the react world/i)).toBeInTheDocument();
    expect(getByText(/for \$9.98 month/i)).toBeInTheDocument();
  });
});
