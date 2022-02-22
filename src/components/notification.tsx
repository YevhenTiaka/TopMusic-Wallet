const Notification = ({ children }: any) => {
  return (
    <div className="notification">
      <div className="notification__block">
        <i className="fa-solid fa-circle-check"></i>
        <div className="w-3/5">{children}</div>
      </div>
    </div>
  );
};

export default Notification;
