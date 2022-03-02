import { FC, useState } from 'react';
import Link from 'next/link';
import Personal from 'components/personal';
import WalletAmount from 'components/walletAmount';
import ModifierPasse from 'components/modifierPasse';
const AccountDisactivated: FC = () => {
  const [show, setShow] = useState(false);

  const handleUpdated = () => {
    setShow(true);
    setTimeout(() => {
      setShow(false);
    }, 3000);
  };
  return (
    <>
      <div className="h-max mt-10 flex mr-12 ml-12">
        <div className="mr-6 w-3/4">
          <section className="abonement__disactive">
            <h1 className="text-xl font-bold mb-4">Mon abonnement</h1>
            <div className="flex items-center">
              <div className="">
                <div className="text-base w-11/12   ">
                  Vous avez récemment résilié votre abonnement. <br />
                  <strong>Vous disposez de l’abonnement premium jusqu’au 14/10</strong>,date après
                  laquelle vous basculerez sur <strong> un compte sans cagnotte.</strong>
                  <br />
                  <br />
                  Pour profiter de toutes les fonctionnalités et soutenir les artistes, vous pouvez
                  <strong> réactiver votre cagnotte.</strong>
                </div>
              </div>

              <Link href="/cagnotte">
                <a className="button__reactiver">RÉACTIVER MA CAGNOTTE</a>
              </Link>
            </div>
          </section>
          <Personal />
          <div className="mt-10 mb-20">
            <ModifierPasse />
          </div>
        </div>

        <div>
          <WalletAmount handleUpdated={handleUpdated}>
            {' '}
            <div className="flex justify-between">
              <span className="amount__text">Vous possédez dans votre cagnotte</span>
              <div>
                <span className="right_block_num">13</span>
                <span className="right_block_tc">Tc</span>
              </div>
            </div>
          </WalletAmount>
          <div className="votre__text">Votre abonnement s’arrêtera le 14/10</div>
        </div>
      </div>
    </>
  );
};

export default AccountDisactivated;
