import Link from 'next/link';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { FC } from 'react';
import styles from '../styles/Footer.module.scss';
import footerImg from '../styles/images/footer_img.png';

const Header: FC = () => {
  const router = useRouter();
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__line} />
      <div className={styles.footer__container}>
        <ul className={styles.footer__links}>
          <li className={styles.footer__links_item}>
            <Link href="/legale">Légale</Link>
          </li>
          <li className={styles.footer__links_item}>
            <Link href="/confidentialite">Confidentialité</Link>
          </li>
          <li className={styles.footer__links_item}>
            <Link href="/contacter">Nous contacter</Link>
          </li>
        </ul>
        <div className={styles.footer__date}>
          <span className={styles.footer__date_topmusic}>
            © {new Date().getFullYear()} TopMusic
          </span>
          <div className={styles.footer__date_img}>
            <Image src={footerImg} alt="footer-img" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Header;
