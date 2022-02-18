import Link from 'next/link';
import Image from 'next/image';
import { FC } from 'react';
import { useState } from 'react';
import { useRouter } from 'next/router';
import UserMenu from './userMenu';
import styles from 'styles/Header.module.scss';
import topmusicLogo from 'styles/images/topmusic_logo.png';

const Header: FC = () => {
  const router = useRouter();
  const [menu, setMenu] = useState(false);

  return (
    <>
      <header className={styles.header}>
        <div className={styles.header__container}>
          <div className={styles.header__logo}>
            <Link href="/">
              <a>
                <Image className={styles.header__logo_img} src={topmusicLogo} alt="Topmusic-logo" />
              </a>
            </Link>
          </div>
          <ul
            className={
              router.pathname === '/freemium'
                ? `${styles.header__nav_freemium}`
                : `${styles.header__nav}`
            }
          >
            {router.pathname !== '/freemium' ? (
              <li
                className={
                  router.pathname === '/cagnotte'
                    ? `${styles.header__nav_active}`
                    : `${styles.header__nav_disabled}`
                }
              >
                <Link href="/cagnotte">
                  <a>Ma cagnotte</a>
                </Link>
              </li>
            ) : null}
            <li
              className={
                router.pathname === '/compte'
                  ? `${styles.header__nav_active}`
                  : `${styles.header__nav_disabled}`
              }
            >
              <Link href="/compte">
                <a
                  className={
                    router.pathname === '/freemium' ? `${styles.header__nav_active}` : null
                  }
                >
                  Mon compte
                </a>
              </Link>
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
