import styles from '../../styles/UserMenu.module.scss';
import Link from 'next/link';

const UserMenu = () => {
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
