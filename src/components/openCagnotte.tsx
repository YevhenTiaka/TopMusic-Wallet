import { FC } from 'react';

const OpenCagnotte: FC = () => {
  return (
    <div className="w-full flex justify-between mb-[40px] ">
      <div className="shadow-2xl w-[350px] h-full rounded-md p-[20px]  relative ">
        <h1 className="text-xl font-bold mb-6">Pourquoi ouvrir une cagnotte ?</h1>
        <div className="mb-4">
          <strong>
            {' '}
            Soutenir les artistes que vous voulez, quand vous voulez. <br />{' '}
          </strong>{' '}
          Si l'application reste gratuite et libre d'accès, <br /> vous avez l'opportunité de
          soutenir les artistes financièrement grâce à la création de cagnotte
        </div>
        <div className="mt-4 mb-4 font-bold">
          Profitez de l'ensemble des fonctionnalités <br /> premium :
        </div>
        <div className="flex mb-4 items-center">
          <div className="bg-[url('../styles/images/check-mark-button.png')] w-[30px] h-[30px] mr-3"></div>
          <div>Écoute illimitée</div>
        </div>
        <div className="flex mb-4">
          <div className="bg-[url('../styles/images/check-mark-button.png')] w-[30px] h-[30px] mr-3"></div>
          <div>Création de playlists</div>
        </div>
        <div className="flex mb-4">
          <div className="bg-[url('../styles/images/check-mark-button.png')] w-[30px] h-[30px] mr-3"></div>
          <div>Qualité audio supérieure</div>
        </div>
        <div className="flex mb-12">
          <div className="bg-[url('../styles/images/check-mark-button.png')] w-[30px] h-[30px] mr-3"></div>
          <div>Mode hors connexion</div>
        </div>
        <div className=" bg-[url('../styles/images/TopMusic-PopUp-BG-purple-01-min.png')] bg-contain bg-no-repeat w-[200px] absolute left-[150px] bottom-[-125px] h-[200px] "></div>
      </div>
      <div className="h-full ml-5">
        <div className="shadow-2xl w-[350px] h-full rounded-md p-[20px]  relative">
          <h1 className="text-xl font-bold mb-6">Comment ça fonctionne ?</h1>
          <div className="mb-6">
            <div className="mb-6 ">
              Vous souscrivez à un abonnement mensuel du montant de votre choix. <strong></strong>{' '}
              C'est le montant de votre cagnotte. (Minimum 5€).
            </div>
            <br /> La <strong>fonction Tip </strong> vous permet de distribuer cette cagnotte aux
            artistes comme vous le souhaitez tout au long du mois.
          </div>

          <a className="font-bold text-pink">EN SAVOIR PLUS</a>
          <div className=" bg-[url('../styles/images/TopMusic-PopUp-BG-orange-01-min.png')] bg-contain bg-no-repeat w-full absolute left-0 top-[417px] h-[200px] "></div>
        </div>
      </div>
    </div>
  );
};

export default OpenCagnotte;
