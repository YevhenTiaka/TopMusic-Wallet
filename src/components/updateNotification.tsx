import { FC } from 'react';
import PropTypes from 'prop-types';

const UpdateNotification: FC = ({ children }: any) => {
  return (
    <>
      <div className=" flex justify-center w-full h-[90px] text-white shadow m-[0px auto 50px] pl-4  bg-red-600 rounded-md mb-[30px]">
        {children}
      </div>
    </>
  );
};

UpdateNotification.propTypes = {
  children: PropTypes.any
};

export default UpdateNotification;
