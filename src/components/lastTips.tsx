import styles from 'styles/Main.module.scss';
import Link from 'next/link';
import { FC } from 'react';

const LastTips: FC = () => {
  return (
    <article className="lastTips__section">
      <div className="pb-8">
        <h1 className="pt-6 pl-6 font-bold text-xl mb-8">Mes derniers Tips</h1>
        <div className="receipt__list_block">
          <div className="flex items-center">
            <div className="receipt__list_img"></div>
            <ul>
              <li className="font-bold">Tendry</li>
              <li className="text-base decoration-gray-300">Il y a 10 minutes</li>
            </ul>
          </div>

          <div className="receipt__list_amount">10Tc</div>
        </div>
        <Link href="/receipt-list">
          <a className={styles.main__right_bottom_more}>VOIR PLUS</a>
        </Link>
      </div>
    </article>
  );
};
export default LastTips;
