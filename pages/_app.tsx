import '../src/styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import Layout from '../src/сomponents/layout';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
