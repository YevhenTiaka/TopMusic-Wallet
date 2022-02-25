import type { AppProps } from 'next/app';
import { createContext, useState } from 'react';
import Layout from 'components/layout';
import 'styles/globals.css';

export const Context = createContext();

function MyApp({ Component, pageProps }: AppProps) {
  const [isShow, setIsShow] = useState<Boolean>(false);

  return (
    <>
      <Context.Provider value={{ isShow, setIsShow }}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Context.Provider>
    </>
  );
}

export default MyApp;
function defaultValue(defaultValue: any) {
  throw new Error('Function not implemented.');
}
