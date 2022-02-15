import styles from '../styles/Modal.module.scss';

const Modal = ({ setModalActive, children }: any) => {
  return (
    <section className={styles.modal} onClick={() => setModalActive(false)}>
      <div className={styles.modal__container}>{children}</div>
    </section>
  );
};
export default Modal;
