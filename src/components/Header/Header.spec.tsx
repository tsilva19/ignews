import { SessionProvider } from 'next-auth/react';
import { render } from '@testing-library/react';
import Header from '../Header';

test('renders header component', () => {
  const { container } = render(
    <SessionProvider session={{ user: { name: 'John' } }}>
      <Header />
    </SessionProvider>
  );

  expect(container).toBeInTheDocument();
});
