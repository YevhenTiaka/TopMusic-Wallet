import Personal from 'components/personal';
import { FC, useState } from 'react';
import Link from 'next/link';
import Abonement from 'components/abonement';
import WalletAmount from 'components/walletAmount';
import Modifier from 'components/modifier';
import UpdateNotification from 'components/updateNotification';

const Compte: FC = () => {
  return (
    <>
      <section className="flex flex-row justify-center mt-20  w-3/4 m-auto ">
        <div className="">
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

              <Link href="/update-amount">
                <a className="button__modifier">MODIFIER MON ABONNEMENT</a>
              </Link>
            </div>
          </Abonement>
        </div>
        <WalletAmount>Renouvellé le 14 octobre</WalletAmount>
      </section>
    </>
  );
};

export default Compte;
