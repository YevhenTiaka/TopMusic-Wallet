import styles from '../styles/Main.module.scss';
import RechargeModal from '../styles/RechargeModal.module.scss';
import { Children, FC } from 'react';
import WalletManage from './WalletManage';
import WalletAmount from './WalletAmount';
import LastTips from './LastTips';
import Modal from './Modal';
import { useState } from 'react';

const Main: FC = () => {
  const [value, setValue] = useState(50);
  const [modalActive, setModalActive] = useState(false);

  return (
    <>
      <main className={styles.main}>
        <section className={styles.main__container}>
          <WalletManage setModalActive={setModalActive} value={value} setValue={setValue} />
          <section className={styles.main__right}>
            <WalletAmount />
            <LastTips />
          </section>
        </section>
      </main>
      {modalActive && (
        <Modal className={RechargeModal.modal} setModalActive={setModalActive}>
          <h1 className={RechargeModal.modal_title}>Résumé de ma recharge</h1>
          <div className={RechargeModal.modal__block}>
            <div className={RechargeModal.modal__block_wallet}>
              <div className={RechargeModal.modal__block_wallet_container}>
                <div className={RechargeModal.modal__block_wallet_container_textU}>
                  Votre recharge ponctuelle
                </div>
                <div>Vous serez débité de 5€ immédiatement.</div>
              </div>
              <div className={RechargeModal.modal__block_wallet_tc}>50Tc</div>
            </div>

            <div className={RechargeModal.modal__block_textB}>
              Les 50Tc sont utlisables jusqu'au 14/10.
            </div>
          </div>
          <span className={RechargeModal.modal_text}>Votre carte de paiement</span>
          <div className={RechargeModal.modal__card}>
            <div className={RechargeModal.modal__card_img}></div>
            <ul className={RechargeModal.modal__card_list}>
              <li className={RechargeModal.modal__card_list_item}>Carte Visa terminant par 4242</li>
              <li className={RechargeModal.modal__card_list_item_exp}>Expire le 12/24</li>
            </ul>
          </div>
          <button className={RechargeModal.modal_updateBtn}>METTRE À JOUR</button>
          <span className={RechargeModal.modal_general}>
            Pour consulter les conditions générales d'utilisations et les modalités d'annulation,
            cliquez-ici.
          </span>
          <button className={RechargeModal.modal_validateBtn}>VALIDER ET PAYER</button>
          <button className={RechargeModal.modal_annulerBtn}>ANNULER</button>
        </Modal>
      )}
    </>
  );
};

export default Main;
