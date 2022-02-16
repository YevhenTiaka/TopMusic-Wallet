import { FC, useState } from 'react';
import Link from 'next/link';
import styles from '../styles/Main.module.scss';
import RechargeModal from './rechargeModal';
import Modal from './modal';

const WalletManage: FC = () => {
  const [modalActive, setModalActive] = useState(false);
  const [value, setValue] = useState(50);

  return (
    <>
      <article className={styles.main__container_left}>
        <h1 className={styles.main__section_title}>Gérer ma cagnotte</h1>
        <div className={styles.main__section}>
          <div className={styles.main__btns}>
            <button className={styles.main__btns_item}>10Tc</button>
            <button className={styles.main__btns_item}>20Tc</button>
            <button className={styles.main__btns_item}>30Tc</button>
          </div>
          <div className={styles.main__section_btns_container}>
            <button
              onClick={() => setValue(value / 2)}
              className={styles.main__section_btns_container_item}
            >
              -
            </button>
            <div className={styles.main__section_btns_container_value}>{`${value} Tc`}</div>
            <button
              onClick={() => setValue(value * 2)}
              className={styles.main__section_btns_container_item}
            >
              +
            </button>
          </div>
          <button
            onClick={() => setModalActive(true)}
            className={styles.main__section_mounthlyRecharged}
          >
            RECHARGER MENSUELLEMENT
          </button>
          <div className={styles.main__btns}>
            <button className={styles.main__btns_item}>30Tc</button>
            <button className={styles.main__btns_item}>50Tc</button>
            <button className={styles.main__btns_item}>100Tc</button>
          </div>
          <span className={styles.main__section_punctuallyRecharged}>RECHARGER PONCTUELLEMENT</span>
          <span className={styles.main__section_usageText}>
            Utilisables jusqu'au 14 octobre 2021
          </span>
          <Link href="/cagnotte">
            <a className={styles.main__section_chargeCagnotte}>
              MODIFIER LE MONTANT DE MA CAGNOTTE
            </a>
          </Link>
        </div>
      </article>
      {modalActive && (
        <Modal setModalActive={setModalActive}>
          <RechargeModal />
        </Modal>
      )}
    </>
  );
};
export default WalletManage;
