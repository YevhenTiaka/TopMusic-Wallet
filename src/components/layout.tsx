import { FC, ReactNode } from 'react';
import Header from './header';
import Footer from './footer';
interface IChildren {
  children: ReactNode;
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
