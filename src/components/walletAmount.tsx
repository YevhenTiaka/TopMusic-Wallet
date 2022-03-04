import { FC } from 'react';

const WalletAmount: FC<any> = ({ children }: any) => {
  return (
    <article className="shadow-2xl rounded-md bg-black h-3/6">
      <div className="flex flex-col p-6 ">{children}</div>
    </article>
  );
};
export default WalletAmount;
