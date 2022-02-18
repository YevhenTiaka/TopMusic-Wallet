import styles from 'styles/RechargeModal.module.scss';
import { FC } from 'react';
import Buttons from './buttons';

const RechargeModal: FC = ({ children, value, closeHandler }: any) => {
  return (
    <>
      <h1 className={styles.modal_title}>Résumé de ma recharge</h1>
      <div className={styles.modal__block}>
        <div className={styles.modal__block_wallet}>
          <div className={styles.modal__block_wallet_container}>
            <div className={styles.modal__block_wallet_container_textU}>{children}</div>
            <div
              className="w-3/4
            "
            >
              Vous serez débité de 5€ immédiatement.
            </div>
          </div>
          <div className={styles.modal__block_wallet_tc}>{value}Tc</div>
        </div>

        <div className={styles.modal__block_textB}>Les 50Tc sont utlisables jusqu'au 14/10.</div>
      </div>
      <span className={styles.modal_text}>Votre carte de paiement</span>
      <div className={styles.modal__card}>
        <div className={styles.modal__card_img}></div>
        <ul className={styles.modal__card_list}>
          <li className={styles.modal__card_list_item}>Carte Visa terminant par 4242</li>
          <li className={styles.modal__card_list_item_exp}>Expire le 12/24</li>
        </ul>
      </div>
      <button className={styles.modal_updateBtn}>METTRE À JOUR</button>
      <span className={styles.modal_general}>
        Pour consulter les conditions générales d'utilisations et les modalités d'annulation,
        <u>cliquez-ici</u>.
      </span>
      <Buttons closeHandler={closeHandler} />
    </>
  );
};

export default RechargeModal;
