import PropTypes from 'prop-types';

const Notification = ({ children }: any) => {
  return (
    <div className="fixed top-[130px] right-[40px] shadow rounded-md text-white w-96 h-[120px] bg-green  ">
      <div className="flex items-center text-xl m-auto font-bold mt-8 ">
        <i className="fa-solid fa-circle-check"></i>
        <div className="w-[70%]">{children}</div>
      </div>
    </div>
  );
};

Notification.prototype = {
  children: PropTypes.any
};
export default Notification;
