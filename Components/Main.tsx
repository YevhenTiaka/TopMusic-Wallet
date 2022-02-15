import styles from '../styles/Main.module.scss';
import RechargeModalStyles from '../styles/RechargeModal.module.scss';
import WalletManage from './WalletManage';
import WalletAmount from './WalletAmount';
import LastTips from './LastTips';
import Modal from './Modal';
import { FC, useState } from 'react';

const Main: FC = () => {
  return (
    <>
      <main className={styles.main}>
        <section className={styles.main__container}>
          <WalletManage />
          <section className={styles.main__right}>
            <WalletAmount />
            <LastTips />
          </section>
        </section>
      </main>
    </>
  );
};

export default Main;
