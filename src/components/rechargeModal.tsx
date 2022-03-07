import { FC } from 'react';
import PropTypes from 'prop-types';

const RechargeModal: FC<any> = ({ children, value, closeHandler, handlerUpdated }: any) => {
  return (
    <>
      <h1 className="text-2xl text-center mb-6 font-bold">Résumé de ma recharge</h1>
      <div className="w-full h-[170px] mb-10 bg-gradient shadow rounded-md text-white">
        <div className="flex pl-6 pt-6">
          <div>
            <div className="font-bold mb-2">Votre recharge {children}</div>
            <div
              className="w-3/4
            "
            >
              Vous serez débité de {value / 10}€ immédiatement.
            </div>
          </div>
          <div className="text-4xl h-96 pr-3">{value}Tc</div>
        </div>

        <div className="text-right mr-4 text-sm">Les {value}Tc sont utlisables jusqu'au 14/10.</div>
      </div>
      <span className="font-bold text-base ">Votre carte de paiement</span>
      <div className="flex items-center">
        <div className="w-[37px] h-[30px] bg-no-repeat bg-contain mr-4 bg-[url('./images/visa_img.png')]"></div>
        <ul className="list-none pl-5">
          <li className="font-bold text-xl">Carte Visa terminant par 4242</li>
          <li className="text-sm opacity-50">Expire le 12/24</li>
        </ul>
      </div>
      <button className="flex  rounded-xl font-bold text-pink ml-auto mt-6 mb-6 text-right">
        METTRE À JOUR
      </button>
      <span className="text-sm opacity-50">
        Pour consulter les conditions générales d'utilisations et les modalités d'annulation,
        <u>cliquez-ici</u>.
      </span>
      <div className="flex flex-col">
        <button
          onClick={() => handlerUpdated()}
          className="flex bg-gradient justify-center items-center w-80 h-12 shadow rounded-3xl font-bold cursor-pointer m-auto mt-10  text-white"
        >
          VALIDER ET PAYER
        </button>

        <button
          onClick={() => closeHandler()}
          className="mb-6 mt-6 cursor-pointer  opacity-50 font-normal"
        >
          ANNULER
        </button>
      </div>
    </>
  );
};

RechargeModal.propTypes = {
  children: PropTypes.any,
  value: PropTypes.number,
  closeHandler: PropTypes.func,
  handlerUpdated: PropTypes.func
};

export default RechargeModal;
