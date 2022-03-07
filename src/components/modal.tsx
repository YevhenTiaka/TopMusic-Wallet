import { FC } from 'react';
import PropTypes from 'prop-types';

const Modal: FC<any> = ({ closeHandler, children }: any) => {
  return (
    <section
      className=" w-screen h-screen fixed  flex items-center justify-center top-0 left-0 bg-neutral-300 "
      onClick={() => closeHandler(false)}
    >
      <div
        className=" w-[500px] m-auto h-max bg-white rounded-md shadow p-7"
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </section>
  );
};

Modal.propTypes = {
  closeHandler: PropTypes.func,
  children: PropTypes.any
};
export default Modal;
