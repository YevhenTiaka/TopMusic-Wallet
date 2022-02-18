import { FC } from 'react';
import Abonement from 'components/abonement';
import WalletAmount from 'components/walletAmount';
import OpenCagnotte from 'components/openCagnotte';

const Freemium: FC = () => {
  return (
    <>
      <section className="mt-20 h-screen">
        <div className="flex justify-between ml-10 mr-10">
          <Abonement />
          <WalletAmount />
        </div>
        <OpenCagnotte />
      </section>
    </>
  );
};

export default Freemium;
