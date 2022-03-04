import { FC } from 'react';

const WalletAmount: FC<any> = ({ children }: any) => {
  return (
    <article className="shadow-2xl rounded-md bg-gradient h-[50%]">
      <div className="flex flex-col p-6 ">{children}</div>
    </article>
  );
};
export default WalletAmount;
