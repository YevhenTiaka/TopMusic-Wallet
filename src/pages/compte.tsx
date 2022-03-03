import Personal from 'components/personal';
import { FC, useState } from 'react';
import Link from 'next/link';
import Abonement from 'components/abonement';
import WalletAmount from 'components/walletAmount';
import Modifier from 'components/modifier';
import OpenCagnotte from 'components/openCagnotte';
import ModifierPasse from 'components/modifierPasse';

const Compte: FC = () => {
  const [isAuth, setIsAuth] = useState(true);
  const [value, setValue] = useState<number>(100);

  return (
    <>
      {isAuth ? (
        <section className="mt-20 h-max flex justify-center  mr-5 ml-5 ">
          <div className="flex flex-col  mr-8 ">
            <Abonement>
              <div className="flex">
                <div className="">
                  <div className="mb-4 text-base">
                    Vous avez un <strong>Compte Gratuit sans cagnotte.</strong>
                  </div>
                  <div className=" text-xs">
                    Vous profitez de l'ensemble du catalogue mais n'avez pas accès à<br /> toutes
                    les fonctionnalités et vous ne pouvez pas soutenir les artistes.
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
            <WalletAmount>
              <div className="no__cagnotte">Vous n'avez pas de cagnotte</div>
            </WalletAmount>
            <main className="h-screen">
              <div className="main__block_freemium">
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
                  <button className="create__cagnotte">JE CRÉE MA CAGNOTTE</button>
                </div>
              </div>
            </main>
          </div>
        </section>
      ) : (
        <section className="flex flex-row  mt-20 mr-10 ml-10 justify-center ">
          <div className="mr-10">
            <Personal />
            <Modifier />
            <Abonement>
              <div className="flex flex-col">
                <div className="">
                  <div className="text-base">
                    Vous avez un <strong>Compte Gratuit sans cagnotte.</strong>
                  </div>
                  <div className="text-base">
                    En plus de profiter de toutes les fonctionnalités premium, vous soutenez les
                    artistes par vos tips.
                  </div>
                </div>

                <Link href="/montant-mise-a-jour">
                  <a className="button__modifier">MODIFIER MON ABONNEMENT</a>
                </Link>
              </div>
            </Abonement>
          </div>
          <WalletAmount>
            {' '}
            <div className="flex justify-between">
              <span className="amount__text">Vous possédez dans votre cagnotte</span>
              <div>
                <span className="right_block_num">13</span>
                <span className="right_block_tc">Tc</span>
              </div>
            </div>
            <span className="right_block_text_b">Renouvellé le 14 octobre</span>
          </WalletAmount>
        </section>
      )}
    </>
  );
};

export default Compte;
