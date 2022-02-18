import { FC } from 'react';

const Abonement: FC = () => {
  return (
    <>
      <section className="  shadow-lg h-48 rounded shadow-black-500/50">
        <div className="mt-6 ml-6 ">
          <h1 className="text-xl font-bold mb-4  ">Mon abonnement</h1>
          <div className="flex">
            <div className="">
              <div className="mb-4 text-base">
                Vous avez un <strong>Compte Gratuit sans cagnotte.</strong>
              </div>
              <div className=" text-xs">
                Vous profitez de l'ensemble du catalogue mais n'avez pas accès à<br /> toutes les
                fonctionnalités et vous ne pouvez pas soutenir les artistes.
              </div>
            </div>
            <button className="button__cagnotte">OUVRIR UNE CAGNOTTE</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Abonement;
