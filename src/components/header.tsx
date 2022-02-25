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
  const [menu, setMenu] = useState<Boolean>(false);
  const [active, setActive] = useState({
    compte: false,
    cagnotte: false
  });

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
            {router.pathname !== '/freemium' && (
              <li
                className={
                  active.cagnotte
                    ? `${styles.header__nav_active}`
                    : `${styles.header__nav_disabled}`
                }
              >
                <Link href="/cagnotte">
                  <a onClick={() => setActive({ compte: false, cagnotte: true })}>Ma cagnotte</a>
                </Link>
              </li>
            )}

            <li
              className={
                active.compte ? `${styles.header__nav_active}` : `${styles.header__nav_disabled}`
              }
            >
              <Link href="/compte">
                <a
                  onClick={() => setActive({ compte: true, cagnotte: false })}
                  // className={router.pathname === '/freemium' && `${styles.header__nav_active}`}
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
