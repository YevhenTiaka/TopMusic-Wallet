import Personal from 'components/personal';
import { FC } from 'react';
import Link from 'next/link';
import Abonement from 'components/abonement';
import WalletAmount from 'components/walletAmount';
import Modifier from 'components/modifier';

const Compte: FC = () => {
  return (
    <>
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

              <Link href="/update-amount">
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
    </>
  );
};

export default Compte;
