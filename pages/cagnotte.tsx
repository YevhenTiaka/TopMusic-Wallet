import styles from '../src/styles/Main.module.scss';
import WalletManage from '../src/сomponents/walletManage';
import WalletAmount from '../src/сomponents/walletAmount';
import LastTips from '../src/сomponents/lastTips';
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
