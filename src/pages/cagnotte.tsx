import styles from 'styles/Main.module.scss';
import WalletManage from 'components/walletManage';
import WalletAmount from 'components/walletAmount';
import LastTips from 'components/lastTips';
import { FC } from 'react';
import UpdateNotification from 'components/updateNotification';
const Cagnotte: FC = () => {
  return (
    <main className={styles.main}>
      <UpdateNotification>
        <div className="flex items-center">
          <div className="notification__icon">X</div>

          <div className="text-base ">
            <strong>Votre moyen de paiement n'est pas à jour </strong>. <br /> Après le 18/12, votre
            cagnotte sera désactivée et vous n'aurez plus accès aux fonctionnalités premium.
          </div>
          <div className="font-bold text-sm ml-6 mt-4">METTRE À JOUR MON MOYEN DE PAIEMENT</div>
        </div>
      </UpdateNotification>
      <section className={styles.main__container}>
        <WalletManage />
        <section className={styles.main__right}>
          <WalletAmount>Renouvellé le 14 octobre</WalletAmount>
          <LastTips />
        </section>
      </section>
    </main>
  );
};

export default Cagnotte;
