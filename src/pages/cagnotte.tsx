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
                <div className="notification__icon">X</div>

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
                    <span className="amount__text">Vous possédez dans votre cagnotte</span>
                    <div>
                      <span className="right_block_num">13</span>
                      <span className="right_block_tc">Tc</span>
                    </div>
                  </div>
                  <span className="right_block_text_b">Renouvellé le 14 octobre</span>
                </WalletAmount>
                <LastTips setShowList={setShowList} />
              </section>
            </section>
          </div>
        </main>
      ) : (
        <main className="receipt__main">
          <Retour />
          <section className="receipt__list_section">
            <h1 className="pt-6 pl-6 font-bold text-xl mb-8">Historique des Tips</h1>
            <div className="receipt__list_block">
              <div className="flex items-center">
                <div className="receipt__list_img"></div>
                <ul>
                  <li className="font-bold">Tendry</li>
                  <li className="text-base decoration-gray-300 ">Il y a 10 minutes</li>
                </ul>
              </div>

              <div className="receipt__list_amount">10Tc</div>
            </div>
            <div className="receipt__list_block">
              <div className="flex items-center">
                <div className="receipt__list_img"></div>
                <ul>
                  <li>Tendry</li>
                  <li>Il y a 10 minutes</li>
                </ul>
              </div>

              <div className="receipt__list_amount">10Tc</div>
            </div>
            <div className="receipt__list_block">
              <div className="flex items-center">
                <div className="receipt__list_img"></div>
                <ul>
                  <li>Tendry</li>
                  <li>Il y a 10 minutes</li>
                </ul>
              </div>

              <div className="flex items-center">10Tc</div>
            </div>
          </section>
        </main>
      )}
    </>
  );
};

export default Cagnotte;
