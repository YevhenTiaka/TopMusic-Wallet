import styles from 'styles/Main.module.scss';
import WalletManage from 'components/walletManage';
import WalletAmount from 'components/walletAmount';
import LastTips from 'components/lastTips';
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
