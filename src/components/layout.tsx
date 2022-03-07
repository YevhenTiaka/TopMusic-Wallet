import Header from './header';
import Footer from './footer';
import PropTypes from 'prop-types';

const Layout = ({ children }: any) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

Layout.prototype = {
  children: PropTypes.any
};
export default Layout;
