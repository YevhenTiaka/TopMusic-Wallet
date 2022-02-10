import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { useRouter } from 'next/router';
import UserMenu from './UserMenu';
import styles from '../../styles/Header.module.scss';
import topmusicLogo from '../../styles/images/topmusic_logo.png';

const Header = () => {
  const router = useRouter();
  const [menu, setMenu] = useState(false);

  return (
    <>
      <header className={styles.header}>
        <div className={styles.header__container}>
          <div className={styles.header__logo}>
            <Image className={styles.header__logo_img} src={topmusicLogo} alt="Topmusic-logo" />
          </div>
          <ul className={styles.header__nav}>
            <li
              className={
                router.pathname === '/cagnotte'
                  ? `${styles.header__nav_active}`
                  : `${styles.header__nav_disabled}`
              }
            >
              <Link href="/cagnotte">Ma cagnotte</Link>
            </li>
            <li
              className={
                router.pathname === '/compte'
                  ? `${styles.header__nav_active}`
                  : `${styles.header__nav_disabled}`
              }
            >
              <Link href="/compte">Mon compte</Link>
            </li>
          </ul>

          <div className={styles.header__menu}>
            <span className={styles.header__menu_user}>Benjamin N.</span>
            <i className="fa-solid fa-angle-down" onClick={() => setMenu(!menu)} />
          </div>
        </div>
      </header>
      {menu && <UserMenu />}
    </>
  );
};

export default Header;
