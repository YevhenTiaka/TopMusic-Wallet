import { FC } from 'react';
import Header from './header';
import Footer from './footer';
interface IChildren {
  children: any;
}

const Layout: FC<IChildren> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
