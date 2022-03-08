import { FC } from 'react';

interface IWalletAmount {
  children: any;
}
const WalletAmount: FC<IWalletAmount> = ({ children }) => {
  return (
    <article className="shadow-2xl rounded-md bg-gradient h-[300px]">
      <div className="flex flex-col p-6 pb-0 ">{children}</div>
    </article>
  );
};

export default WalletAmount;
