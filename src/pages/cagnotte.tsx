import styles from 'styles/Main.module.scss';
import WalletManage from 'components/walletManage';
import WalletAmount from 'components/walletAmount';
import LastTips from 'components/lastTips';
import { FC } from 'react';
import Notification from 'components/notification';

const Cagnotte: FC = () => {
  return (
    <main className={styles.main}>
      <Notification>Votre mot de passe a été modifié avec succès.</Notification>
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
