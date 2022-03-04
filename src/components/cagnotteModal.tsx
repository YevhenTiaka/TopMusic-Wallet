import { FC, useContext } from 'react';
import Link from 'next/link';
import { Context } from 'pages/_app';
const CagnotteModal: FC<any> = ({ value, closeHandler }: any) => {
  const { isShow, setIsShow }: any = useContext(Context);

  const handler = () => {
    if (!isShow) {
      setIsShow(true);
      setTimeout(() => {
        setIsShow(false);
      }, 3000);
    }
  };
  return (
    <>
      <h1 className="text-2xl text-center mb-6 font-bold">Mise à jour de votre cagnotte</h1>
      <div className="modal__block">
        <div className="pl-6 pt-6">
          <div className="flex">
            <div className="font-bold mb-2"> Votre nouvelle cagnotte</div>
            <div className="text-4xl ml-auto pr-5">{value}Tc</div>
          </div>
          <div className="mt-12 text-right mr-4">
            À compter du 14/10, votre cagnotte mensuelle sera désormais de {value}Tc/mois{' '}
            {`soit 
            ${value / 10}`}
            €/mois.
          </div>
        </div>
      </div>
      <span className="font-bold text-base ">Votre carte de paiement</span>
      <div className="flex items-center">
        <div className="card__img"></div>
        <ul className="list-none pl-5">
          <li className="font-bold text-xl">Carte Visa terminant par 4242</li>
          <li className="text-sm opacity-50">Expire le 12/24</li>
        </ul>
      </div>
      <button className="flex  rounded-xl font-bold text-pink ml-auto mt-6 mb-6 text-right">
        METTRE À JOUR
      </button>
      <span className="text-sm opacity-50">
        Lorsque vous changez le montant de votre cagnotte, vous autorisez TopMusic à vous facturer
        automatiquement tous les mois, jusqu'à annulation. Aucun remboursement partiel. Vous pouvez
        annuler ou modifier le montant de votre abonnement à tout moment.
        <br />
        <br />
        <u>Consulter les conditions générales d'utilisation et les modalités d'annulation.</u>.
      </span>
      <div className="flex flex-col">
        <Link href="/cagnotte">
          <a
            onClick={handler}
            className="flex justify-center items-center w-80 h-12 shadow rounded-3xl font-bold cursor-pointer m-auto mt-10  text-white"
          >
            VALIDER ET PAYER
          </a>
        </Link>

        <button
          onClick={() => closeHandler(false)}
          className="mb-6 mt-6 cursor-pointer  opacity-50 font-normal"
        >
          ANNULER
        </button>
      </div>
    </>
  );
};

export default CagnotteModal;
