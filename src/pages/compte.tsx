import Personal from 'components/personal';
import { FC } from 'react';
import Abonement from 'components/abonement';
import WalletAmount from 'components/walletAmount';
import Modifier from 'components/modifier';
import Notification from 'components/notification';

const Compte: FC = () => {
  return (
    <>
      <section className="flex flex-row justify-center mt-20  w-3/4 m-auto ">
        <div className="">
          <Personal />
          <Modifier />
          <Abonement>
            <Notification>Vos données ont été mises à jour.</Notification>
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
              <span className="button__modifier">MODIFIER MON ABONNEMENT</span>
            </div>
          </Abonement>
        </div>
        <WalletAmount />
      </section>
    </>
  );
};

export default Compte;
