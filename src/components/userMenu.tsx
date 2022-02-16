import styles from 'styles/UserMenu.module.scss';
import Link from 'next/link';
import { FC } from 'react';

const UserMenu: FC = () => {
  return (
    <div className={styles.menu}>
      <ul className={styles.menu__container}>
        <li className={styles.menu__link}>
          <Link href="/faq">F.A.Q</Link>
        </li>
        <li className={styles.menu__link}>
          <Link href="/">Se déconnecter</Link>
        </li>
      </ul>
    </div>
  );
};

export default UserMenu;
