import { FC } from 'react';
import styles from 'styles/Modal.module.scss';

const Modal: FC = ({ closeHandler, children }: any) => {
  return (
    <section className={styles.modal} onClick={() => closeHandler(false)}>
      <div className={styles.modal__container} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </section>
  );
};
export default Modal;
