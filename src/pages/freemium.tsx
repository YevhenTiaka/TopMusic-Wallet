import { FC, useState } from 'react';
import Abonement from 'components/abonement';
import WalletAmount from 'components/walletAmount';
import OpenCagnotte from 'components/openCagnotte';
import Personal from 'components/personal';
import ModifierPasse from 'components/modifierPasse';

const Freemium: FC = () => {
  const [value, setValue] = useState<number>(100);

  return (
    <>
      <section className="mt-20 h-max flex justify-center mr-10">
        <div className="flex flex-col ml-10 ">
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
          <OpenCagnotte />
          <Personal />
          <div className="mt-10 mb-20">
            <ModifierPasse />
          </div>
        </div>
        <div>
          <WalletAmount />
          <main className="h-screen">
            <div className="main__block">
              <h1 className="font-bold text-3xl mb-4">Je crée ma cagnotte</h1>
              <span className="text-base">
                Sur TopMusic, nous utilisons le TopCoin. La formule est simple :
              </span>

              <div className="recharge">
                Pour {value / 10}€ vous rechargez votre cagnotte de {value} Tc.
              </div>
              <div className="flex justify-center items-center mt-4">
                <button
                  disabled={value <= 0}
                  onClick={() => setValue(value - 5)}
                  className="circle__btn"
                >
                  -
                </button>
                <div className="circle__btn_value">{value} Tc/mois</div>
                <button onClick={() => setValue(value + 10)} className="circle__btn">
                  +
                </button>
              </div>
              <span className="flex justify-center mb-6 mt-4 decoration-gray-50 opacity-50 text-base">
                Soit {value / 10}€/mois
              </span>
              <div className="flex flex-col items-center">
                <button onClick={() => setCloseModal(true)} className="create__cagnotte">
                  JE CRÉE MA CAGNOTTE
                </button>
              </div>
            </div>
          </main>
        </div>
      </section>
    </>
  );
};

export default Freemium;
