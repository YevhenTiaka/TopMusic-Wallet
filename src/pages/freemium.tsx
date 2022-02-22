import { FC } from 'react';
import Abonement from 'components/abonement';
import WalletAmount from 'components/walletAmount';
import OpenCagnotte from 'components/openCagnotte';

const Freemium: FC = () => {
  return (
    <>
      <section className="mt-20 h-screen">
        <div className="flex justify-between ml-10 mr-10">
          <Abonement>
            <div className="flex">
              <div className="">
                <div className="mb-4 text-base">
                  Vous avez un <strong>Compte Gratuit sans cagnotte.</strong>
                </div>
                <div className=" text-xs">
                  Vous profitez de l'ensemble du catalogue mais n'avez pas accès à<br /> toutes les
                  fonctionnalités et vous ne pouvez pas soutenir les artistes.
                </div>
              </div>
              <button className="button__cagnotte">OUVRIR UNE CAGNOTTE</button>
            </div>
          </Abonement>
          <WalletAmount />
        </div>
        <OpenCagnotte />
      </section>
    </>
  );
};

export default Freemium;
