import WalletManage from 'components/walletManage';
import WalletAmount from 'components/walletAmount';
import LastTips from 'components/lastTips';
import { FC, useState } from 'react';
import Retour from 'components/retour';
import UpdateNotification from 'components/updateNotification';

const Cagnotte: FC = () => {
  const [showList, setShowList] = useState(false);
  return (
    <>
      {showList === false ? (
        <main className="flex justify-center mt-20 mr-6 ml-6 mb-20 ">
          <div>
            <UpdateNotification>
              <div className="flex items-center">
                <div className="flex items-center justify-center w-[45px] h-[45px] rounded-full border-2 text-[29px] mr-5 ">
                  X
                </div>

                <div className="text-base ">
                  <strong>Votre moyen de paiement n'est pas à jour </strong>. <br /> Après le 18/12,
                  votre cagnotte sera désactivée et vous n'aurez plus accès aux fonctionnalités
                  premium.
                </div>
                <div className="font-bold text-sm ml-6 mt-4">
                  METTRE À JOUR MON MOYEN DE PAIEMENT
                </div>
              </div>
            </UpdateNotification>
            <section className="flex justify-between ">
              <WalletManage />
              <section className="ml-8 w-4/6">
                <WalletAmount>
                  {' '}
                  <div className="flex justify-between">
                    <span className="font-bold text-3xl text-white w-2/5 mb-4">
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
                <LastTips setShowList={setShowList} />
              </section>
            </section>
          </div>
        </main>
      ) : (
        <main className="h-screen mt-40">
          <Retour />
          <section className="w-6/12 m-auto h-auto shadow rounded-md pb-5">
            <h1 className="pt-6 pl-6 font-bold text-xl mb-8">Historique des Tips</h1>
            <div className="flex justify-between  border-b-[1px]  mr-6 ml-6">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full mr-5 bg-slate-500 "></div>
                <ul>
                  <li className="font-bold">Tendry</li>
                  <li className="text-base decoration-gray-300 ">Il y a 10 minutes</li>
                </ul>
              </div>

              <div className="flex items-center font-bold  text-red-400">10Tc</div>
            </div>
          </section>
        </main>
      )}
    </>
  );
};

export default Cagnotte;
