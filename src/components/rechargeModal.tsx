import styles from 'styles/RechargeModal.module.scss';
import { FC } from 'react';

const RechargeModal: FC = () => {
  return (
    <>
      <h1 className={styles.modal_title}>Résumé de ma recharge</h1>
      <div className={styles.modal__block}>
        <div className={styles.modal__block_wallet}>
          <div className={styles.modal__block_wallet_container}>
            <div className={styles.modal__block_wallet_container_textU}>
              Votre recharge ponctuelle
            </div>
            <div>Vous serez débité de 5€ immédiatement.</div>
          </div>
          <div className={styles.modal__block_wallet_tc}>50Tc</div>
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
      <div className={styles.modal__rechargeBtns}>
        <button className={styles.modal__rechargeBtns_valider}>VALIDER ET PAYER</button>

        <button className={styles.modal__rechargeBtns_annuler}>ANNULER</button>
      </div>
    </>
  );
};

export default RechargeModal;
