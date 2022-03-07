import { FC } from 'react';
import PropTypes from 'prop-types';

const WalletAmount: FC<any> = ({ children }: any) => {
  return (
    <article className="shadow-2xl rounded-md bg-gradient h-[300px]">
      <div className="flex flex-col p-6 pb-0 ">{children}</div>
    </article>
  );
};

WalletAmount.propTypes = {
  children: PropTypes.any
};
export default WalletAmount;
