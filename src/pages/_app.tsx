import PropTypes from 'prop-types';
import Layout from 'components/layout';
import 'styles/globals.css';

function MyApp({ Component, pageProps }: any) {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

MyApp.propTypes = {
  Component: PropTypes.any,
  pageProps: PropTypes.any
};
export default MyApp;
