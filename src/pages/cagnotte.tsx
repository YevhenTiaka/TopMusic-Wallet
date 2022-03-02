import WalletManage from 'components/walletManage';
import WalletAmount from 'components/walletAmount';
import LastTips from 'components/lastTips';
import { FC } from 'react';

import UpdateNotification from 'components/updateNotification';
const Cagnotte: FC = () => {
  return (
    <main className="flex justify-center mt-20 mr-6 ml-6 mb-20 ">
      <div>
        <UpdateNotification>
          <div className="flex items-center">
            <div className="notification__icon">X</div>

            <div className="text-base ">
              <strong>Votre moyen de paiement n'est pas à jour </strong>. <br /> Après le 18/12,
              votre cagnotte sera désactivée et vous n'aurez plus accès aux fonctionnalités premium.
            </div>
            <div className="font-bold text-sm ml-6 mt-4">METTRE À JOUR MON MOYEN DE PAIEMENT</div>
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
            <LastTips />
          </section>
        </section>
      </div>
    </main>
  );
};

export default Cagnotte;
