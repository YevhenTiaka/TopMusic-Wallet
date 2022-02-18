import styles from 'styles/RechargeModal.module.scss';
import { FC } from 'react';

const Buttons: FC = ({ closeHandler }: any) => {
  return (
    <div className={styles.modal__rechargeBtns}>
      <button onClick={() => closeHandler()} className={styles.modal__rechargeBtns_valider}>
        VALIDER ET PAYER
      </button>

      <button onClick={() => closeHandler()} className={styles.modal__rechargeBtns_annuler}>
        ANNULER
      </button>
    </div>
  );
};

export default Buttons;
