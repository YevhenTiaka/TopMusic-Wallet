import { FC } from 'react';

const Modal: FC<any> = ({ closeHandler, children }: any) => {
  return (
    <section className="modal" onClick={() => closeHandler(false)}>
      <div className="modal__container" onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </section>
  );
};
export default Modal;
