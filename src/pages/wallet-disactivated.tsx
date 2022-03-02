import { FC } from 'react';
import Link from 'next/link';

const WalletDisactivated: FC = () => {
  return (
    <>
      <main className="h-screen mt-10">
        <div className="main__unsubscribe">
          <h1 className="text-4xl font-bold mb-6">Votre cagnotte est désactivée...</h1>
          <div className="mb-6">
            Vous avez récemment résilié votre abonnement. Vous disposez de l'abonnement premium
            jusqu'au 18/12, date après laquelle vous basculerez sur un compte sans cagnotte, sans
            pouvoir profiter de l'ensemble des fonctionnalités premium.
          </div>
          <div className="flex mb-4">
            <div className="unsubscribe__img">X</div>
            <div>Soutien des artistes</div>
          </div>
          <div className="flex mb-4">
            <div className="unsubscribe__img">X</div>
            <div>Écoute illimitée</div>
          </div>
          <div className="flex mb-4">
            <div className="unsubscribe__img">X</div>
            <div>Création de playlists</div>
          </div>
          <div className="flex mb-4">
            <div className="unsubscribe__img">X</div>
            <div>Qualité audio supérieure</div>
          </div>
          <div className="flex">
            <div className="unsubscribe__img">X</div>
            <div>Mode hors connexion</div>
          </div>
          <div className="mt-4">
            Pour profiter de toutes les fonctionnalités, et soutenir les <br /> artistes, réactivez
            votre cagnotte !
          </div>
          <div className="flex flex-col items-center mt-8">
            <Link href="/account-disactivated">
              <a className="subscription__btn">RÉACTIVER MA CAGNOTTE</a>
            </Link>
          </div>
        </div>
      </main>
    </>
  );
};

export default WalletDisactivated;
