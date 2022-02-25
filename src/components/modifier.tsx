import Link from 'next/link';
import { FC, useState } from 'react';
import Modal from './modal';
import ModifierPasse from './modifierPasse';
import Notification from './notification';
import ModifierPaiement from './modifierPaiement';

const Modifier: FC = () => {
  const [modal, setModal] = useState<Boolean>(false);
  const [show, setShow] = useState<Boolean>(false);

  const handleUpdated = () => {
    setModal(false);
    setShow(true);
    setTimeout(() => {
      setShow(false);
    }, 3000);
  };
  return (
    <>
      <div className="modifier">
        <div className="flex mt-10 justify-between ">
          <ModifierPasse handleUpdated={handleUpdated} />
          {/* <ModifierPaiement setModal={setModal}>
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
          </ModifierPaiement> */}
          <ModifierPaiement setModal={setModal}>
            {
              <>
                <button className="update__btn">METTRE À JOUR</button>
              </>
            }
          </ModifierPaiement>
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
              <div className="flex items-center border-b-2">
                <div className="card__img"></div>
                <input className="outline-none opacity-70 font-bold" type="text" maxLength={16} />
              </div>
              <div className="mt-6 flex">
                <div className="flex flex-col  mr-6">
                  <label className="text-xs opacity-50" htmlFor="">
                    DATE D'EXPIRATION
                  </label>
                  <input type="date" className="date__input" />
                </div>

                <div className="flex flex-col ">
                  <label className="text-xs opacity-50" htmlFor="">
                    CVV
                  </label>
                  <input
                    type="text"
                    className="border-b-2 outline-none w-28 opacity-70 font-bold"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <button onClick={handleUpdated} className="update__btn">
                METTRE À JOUR
              </button>
              <button onClick={() => setModal(false)}>ANNULER</button>
            </div>
          </section>
        </Modal>
      )}
      {show && <Notification>Vos données ont été mises à jour.</Notification>}
    </>
  );
};

export default Modifier;
