import { render } from '@testing-library/react';
import { Provider } from "next-auth/client";
import { SessionProvider } from 'next-auth/react';

const AllTheProviders = ({ children }) => {
  return (
    <Provider session={{}}>
      <SessionProvider session={{}}>
        {children}
      </SessionProvider>
    </Provider>
  );
};

const customRender = (ui, options) =>
  render(ui, { wrapper: AllTheProviders, ...options });

export * from '@testing-library/react';

export { customRender as render };
