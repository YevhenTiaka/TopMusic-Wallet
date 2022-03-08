import { FC } from 'react';
import Header from './header';
import Footer from './footer';

const Layout: FC<any> = ({ children }: any) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
