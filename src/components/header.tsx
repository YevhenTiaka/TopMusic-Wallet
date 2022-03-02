import Link from 'next/link';
import Image from 'next/image';
import { FC } from 'react';
import { useState } from 'react';
import { useRouter } from 'next/router';
import UserMenu from './userMenu';
import topmusicLogo from 'styles/images/topmusic_logo.png';

const Header: FC = () => {
  const router = useRouter();
  const [menu, setMenu] = useState<Boolean>(false);
  const [active, setActive] = useState({
    compte: false,
    cagnotte: true
  });

  return (
    <>
      {router.pathname === '/login' || router.pathname === '/register' ? (
        <header>
          <div className="h-24 mr-6 ml-6 flex justify-between items-center ">
            <div className="w-36">
              <Link href="/">
                <a>
                  <Image className="w-36" src={topmusicLogo} alt="Topmusic-logo" />
                </a>
              </Link>
            </div>
          </div>
        </header>
      ) : (
        <header className="shadow-lg">
          <div className="h-24 mr-6 ml-6 flex justify-between items-center ">
            <div className="w-36">
              <Link href="/">
                <a>
                  <Image className="w-36" src={topmusicLogo} alt="Topmusic-logo" />
                </a>
              </Link>
            </div>
            <ul
              className={
                router.pathname === '/freemium'
                  ? 'header__nav_freemium'
                  : 'flex justify-between list-none font-bold w-60'
              }
            >
              {router.pathname !== '/freemium' && (
                <li className={active.cagnotte ? 'header__nav_active' : 'header__nav_disabled'}>
                  <Link href="/cagnotte">
                    <a onClick={() => setActive({ compte: false, cagnotte: true })}>Ma cagnotte</a>
                  </Link>
                </li>
              )}

              <li className={active.compte ? 'header__nav_active' : 'header__nav_disabled'}>
                <Link href="/compte">
                  <a onClick={() => setActive({ compte: true, cagnotte: false })}>Mon compte</a>
                </Link>
              </li>
            </ul>

            <div className="flex">
              <span className="mr-6">Benjamin N.</span>
              <i className="fa-solid fa-angle-down" onClick={() => setMenu(!menu)} />
            </div>
          </div>
        </header>
      )}
      {menu && <UserMenu />}
    </>
  );
};

export default Header;
