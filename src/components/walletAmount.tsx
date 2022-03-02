import styles from 'styles/Main.module.scss';
import { FC } from 'react';

const WalletAmount: FC<any> = ({ children }: any) => {
  return (
    <article className="main__right_upper">
      <div className="flex flex-col p-6 pb-0 h-full">{children}</div>
    </article>
  );
};
export default WalletAmount;
