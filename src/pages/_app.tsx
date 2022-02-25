import { createContext, useState } from 'react';
import Layout from 'components/layout';
import 'styles/globals.css';

function MyApp({ Component, pageProps }: any) {
  const [isShow, setIsShow] = useState<Boolean>(false);

  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
