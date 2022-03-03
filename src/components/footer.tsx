import Link from 'next/link';
import Image from 'next/image';
import { FC } from 'react';
import { useRouter } from 'next/router';
import footerImg from 'styles/images/footer_img.png';

const Footer: FC = () => {
  const router = useRouter();
  return (
    <>
      {router.pathname === '/connexion' || router.pathname === '/enregistrement' ? (
        <footer className="flex justify-end">
          <div className="ml-6 w-24 h-24">
            <Image src={footerImg} alt="footer-img" />
          </div>
        </footer>
      ) : (
        <footer>
          <div className="footer__line" />
          <div className="flex justify-between items-center w-full">
            <ul className="list-none flex p-0 ml-6 font-bold ">
              <li className="ml-6">
                <Link href="/legale">Légale</Link>
              </li>
              <li className="ml-6">
                <Link href="/confidentialite">Confidentialité</Link>
              </li>
              <li className="ml-6">
                <Link href="/contacter">Nous contacter</Link>
              </li>
            </ul>
            <div className="flex items-center mr-6 font-normal">
              <span>© {new Date().getFullYear()} TopMusic</span>
              <div className="ml-6 w-24 h-24">
                <Image src={footerImg} alt="footer-img" />
              </div>
            </div>
          </div>
        </footer>
      )}
    </>
  );
};

export default Footer;
