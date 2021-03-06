import Personal from 'components/personal';
import { FC, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { toast, ToastContainer } from 'react-toastify';
import Abonement from 'components/abonement';
import WalletAmount from 'components/walletAmount';
import Modifier from 'components/modifier';
import OpenCagnotte from 'components/openCagnotte';
import ModifierPasse from 'components/modifierPasse';
import imgBlue from '../styles/images/TopMusic-PopUp-BG-blue-01-min.png';

const Compte: FC = () => {
  const [isAuth, setIsAuth] = useState(true);
  const [value, setValue] = useState<number>(100);
  const [disactive, setDisactive] = useState(false);

  const handleUpdated = () => {
    toast.success(' Vos données ont été mises à jour.');
  };

  return (
    <>
      {disactive ? (
        <div className="h-max mt-10 flex mr-12 ml-12">
          <div className="mr-6 w-3/4">
            <section className="w-full h-auto bg-gradient  shadow p-[25px] mb-20 rounded-md  text-white">
              <h1 className="text-xl font-bold mb-4">Mon abonnement</h1>
              <div className="flex items-center">
                <div className="">
                  <div className="text-base w-11/12   ">
                    Vous avez récemment résilié votre abonnement. <br />
                    <strong>Vous disposez de l’abonnement premium jusqu’au 14/10</strong>,date après
                    laquelle vous basculerez sur <strong> un compte sans cagnotte.</strong>
                    <br />
                    <br />
                    Pour profiter de toutes les fonctionnalités et soutenir les artistes, vous
                    pouvez
                    <strong> réactiver votre cagnotte.</strong>
                  </div>
                </div>

                <Link href="/cagnotte">
                  <a className="flex justify-center items-center text-pink bg-white cursor-pointer p-3 mb-20 w-96 h-14  shadow rounded-full font-bold  text-xs">
                    RÉACTIVER MA CAGNOTTE
                  </a>
                </Link>
              </div>
            </section>
            <Personal handleUpdated={handleUpdated} />
            <div className="mt-10 mb-20">
              <ModifierPasse handleUpdated={handleUpdated} />
            </div>
          </div>

          <div>
            <WalletAmount>
              {' '}
              <div className="flex justify-between mb-10">
                <span className="font-bold text-3xl text-white w-[50%] ">
                  Vous possédez dans votre cagnotte
                </span>
                <div>
                  <span className="text-8xl text-white font-bold">13</span>
                  <span className="text-6xl text-white font-bold">Tc</span>
                </div>
              </div>
            </WalletAmount>
            <div className="font-bold flex justify-center mt-4 text-red-600 text-xl ">
              Votre abonnement s’arrêtera le 14/10
            </div>
          </div>
        </div>
      ) : (
        <>
          {isAuth ? (
            <section className="mt-20 h-max flex justify-center  mr-5 ml-5 ">
              <div className="flex flex-col  mr-8 ">
                <Abonement>
                  <div className="bg-[url('../styles/images/TopMusic-PopUp-BG-blue-01-min.png')] bg-contain bg-no-repeat w-[200px] h-[65px] absolute top-0 right-[-74px]"></div>
                  <div className="flex">
                    <div>
                      <div className="mb-4 text-base">
                        Vous avez un <strong>Compte Gratuit sans cagnotte.</strong>
                      </div>
                      <div className=" text-xs">
                        Vous profitez de l'ensemble du catalogue mais n'avez pas accès à<br />{' '}
                        toutes les fonctionnalités et vous ne pouvez pas soutenir les artistes.
                      </div>
                    </div>
                    <button className="w-60 h-12 text-white font-bold shadow rounded-full mr-12 ml-20 bg-gradient ">
                      OUVRIR UNE CAGNOTTE
                    </button>
                  </div>
                </Abonement>
                <OpenCagnotte />
                <Personal handleUpdated={handleUpdated} />
                <div className="mt-10 mb-20">
                  <ModifierPasse handleUpdated={handleUpdated} />
                </div>
              </div>
              <div>
                <WalletAmount>
                  <div className="text-white text-4xl font-bold text-right ml-auto w-60">
                    Vous n'avez pas de cagnotte
                  </div>
                </WalletAmount>
                <main className="h-screen">
                  <div className="w-full m-auto mt-20 shadow-2xl  p-6 rounded-md">
                    <h1 className="font-bold text-3xl mb-4">Je crée ma cagnotte</h1>
                    <span className="text-base">
                      Sur TopMusic, nous utilisons le TopCoin. La formule est simple :
                    </span>

                    <div className="text-base font-bold mt-5 text-orange ">
                      Pour {value / 10}€ vous rechargez votre cagnotte de {value} Tc.
                    </div>

                    <div className="mt-5">
                      De combien voulez-vous recharger votre cagnotte mensuellement :
                    </div>
                    <div className="flex justify-center items-center mt-4">
                      <button
                        disabled={value <= 0}
                        onClick={() => setValue(value - 5)}
                        className="w-[38px] h-[38px] border-[1px] rounded-[50%] text-gray text-4xl font-normal flex justify-center items-center"
                      >
                        -
                      </button>
                      <div className="w-36 h-12 mr-5 ml-5 bg-orange flex items-center justify-center text-white font-bold rounded-full ">
                        {value} Tc/mois
                      </div>
                      <button
                        onClick={() => setValue(value + 10)}
                        className="w-[38px] h-[38px] border-[1px] rounded-[50%] text-gray text-4xl font-normal flex justify-center items-center"
                      >
                        +
                      </button>
                    </div>
                    <span className="flex justify-center mb-6 mt-4 decoration-gray-50 opacity-50 text-base">
                      Soit {value / 10}€/mois
                    </span>
                    <div className="flex flex-col items-center">
                      <button className="w-60 h-12 font-bold text-white shadow  flex items-center justify-center  rounded-full mt-5 mb-5 text-base bg-gradient">
                        JE CRÉE MA CAGNOTTE
                      </button>
                    </div>
                  </div>
                </main>
              </div>
            </section>
          ) : (
            <section className="flex flex-row  mt-20 mr-10 ml-10 justify-center ">
              <div className="mr-10">
                <Personal handleUpdated={handleUpdated} />
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
                      <a className="text-pink cursor-pointer font-bold text-base ml-auto mt-4 mb-4">
                        MODIFIER MON ABONNEMENT
                      </a>
                    </Link>
                  </div>
                </Abonement>
              </div>
              <WalletAmount>
                {' '}
                <div className="flex justify-between mb-[60px]">
                  <span className="font-bold text-3xl text-white w-2/5 ">
                    Vous possédez dans votre cagnotte
                  </span>
                  <div>
                    <span className="text-8xl text-white font-bold">13</span>
                    <span className="text-6xl text-white font-bold">Tc</span>
                  </div>
                </div>
                <span className="text-4xl font-bold text-white m-auto ml-0">
                  Renouvellé le 14 octobre
                </span>
              </WalletAmount>
            </section>
          )}
        </>
      )}
      <ToastContainer
        toastClassName={() =>
          ' relative flex p-2  min-h-10 rounded-md justify-between overflow-hidden bg-green cursor-pointer mb-[20px]'
        }
        bodyClassName={() =>
          'text-xl text-white font-bold block p-3 flex items-center  bg-green h-auto'
        }
        position="top-right"
        autoClose={3000}
        hideProgressBar={true}
        newestOnTop={false}
      />
    </>
  );
};

export default Compte;
