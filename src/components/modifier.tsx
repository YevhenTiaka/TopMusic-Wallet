import { FC, useState } from 'react';
import Modal from './modal';
import ModifierPasse from './modifierPasse';
import ModifierPaiement from './modifierPaiement';
import { ToastContainer, toast } from 'react-toastify';

const Modifier: FC = () => {
  const [modal, setModal] = useState<Boolean>(false);

  const handleUpdated = () => {
    setModal(false);
  };
  return (
    <>
      <div className="h-auto mb-[40px]">
        <div className="flex mt-8 justify-between">
          <ModifierPasse handleUpdated={handleUpdated} />
          <ModifierPaiement setModal={setModal}>
            {
              <>
                <span
                  onClick={() => setModal(true)}
                  className="flex font-bold justify-end mb-4 text-sm cursor-pointer"
                >
                  Modifier mon moyen de paiement
                </span>
                <div className="w-4/5">
                  Votre prochaine facture sera de <strong>15€.</strong> Elle sera prélevée le{' '}
                  <strong>14/10/2021</strong>.
                </div>
              </>
            }
          </ModifierPaiement>
          {/* <ModifierPaiement setModal={setModal}>
              {
                <>
                  <button className="update__btn">METTRE À JOUR</button>
                </>
              }
            </ModifierPaiement> */}
        </div>
      </div>

      {modal && (
        <Modal closeHandler={setModal}>
          <section>
            <h1 className="font-bold text-2xl w-64 m-auto text-center mb-8">
              Modifier mon moyen de paiement
            </h1>
            <div>
              <h3 className="text-base font-bold mb-6">Votre nouvelle carte</h3>
              <label className="text-xs opacity-50" htmlFor="">
                NUMÉRO
              </label>
              <div className="flex items-center border-b-[1px]">
                <div className="w-[37px] h-[30px] bg-no-repeat bg-contain mr-4 bg-[url('./images/visa_img.png')] "></div>
                <input className="outline-none opacity-70 font-bold" type="text" maxLength={16} />
              </div>
              <div className="mt-6 flex">
                <div className="flex flex-col  mr-6">
                  <label className="text-xs opacity-50" htmlFor="">
                    DATE D'EXPIRATION
                  </label>
                  <input
                    type="date"
                    className=" outline-none indent-2 opacity-70 font-bold border-b-[1px] "
                  />
                </div>

                <div className="flex flex-col ">
                  <label className="text-xs opacity-50" htmlFor="">
                    CVV
                  </label>
                  <input
                    type="text"
                    className="border-b-[1px] outline-none w-28 opacity-70 font-bold"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <button
                onClick={handleUpdated}
                className="flex w-60 h-10 items-center justify-center rounded-full font-bold bg-gradient m-auto mt-10 mb-10 text-white"
              >
                METTRE À JOUR
              </button>
              <button
                className="opacity-50 font-normal cursor-pointer"
                onClick={() => setModal(false)}
              >
                ANNULER
              </button>
            </div>
          </section>
        </Modal>
      )}
    </>
  );
};

export default Modifier;
