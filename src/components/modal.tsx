import { Dispatch, FC, ReactElement, SetStateAction } from 'react';
import styles from 'styles/Modal.module.scss';

const Modal: FC<any> = ({ closeHandler, children }: any) => {
  return (
    <section className={styles.modal} onClick={() => closeHandler(false)}>
      <div className={styles.modal__container} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </section>
  );
};
export default Modal;
