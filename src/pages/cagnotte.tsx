import styles from '../styles/Main.module.scss';
import WalletManage from '../сomponents/walletManage';
import WalletAmount from '../сomponents/walletAmount';
import LastTips from '../сomponents/lastTips';
import { FC } from 'react';

const Cagnotte: FC = () => {
  return (
    <main className={styles.main}>
      <section className={styles.main__container}>
        <WalletManage />
        <section className={styles.main__right}>
          <WalletAmount />
          <LastTips />
        </section>
      </section>
    </main>
  );
};

export default Cagnotte;
