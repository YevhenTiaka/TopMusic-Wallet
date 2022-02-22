import Link from 'next/link';
import { FC, useState } from 'react';
import Modal from './modal';

const Modifier: FC = () => {
  const [modal, setModal] = useState<Boolean>(false);

  return (
    <>
      <div className="modifier">
        <div className="flex mt-10 justify-between ">
          <div className="modifier__passe">
            <h1 className="font-bold mb-6 text-2xl">Modifier votre mot de passe</h1>

            <div className="flex flex-col">
              <label className="text-xs font-medium  opacity-80" htmlFor="">
                NOUVEAU MOT DE PASSE
              </label>
              <input className="border-b-2 mb-4 outline-none " type="password" />
              <label className="text-xs font-medium opacity-80" htmlFor="">
                CONFIRMER LE NOUVEAU MOT DE PASSE
              </label>
              <input className="border-b-2 outline-none" type="password" />
            </div>

            <button className="new__password_btn">DÉFINIR UN NOUVEAU MOT DE PASSE</button>
          </div>
          <div className="modifier__passe">
            <h1 className="font-bold text-2xl mb-6">Moyen de paiement</h1>

            <div className="flex items-center">
              <div className="card__img"></div>
              <ul className="paiement">
                <li className="paiement__item_carte">Carte bancaire</li>
                <li className="paiement__item_visa">Visa se terminant par 4242</li>
                <li className="paiement__item_expiration">Expire le 12/21</li>
              </ul>
            </div>
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
            <div className="paiement__historique">HISTORIQUE DE PAIEMENT</div>
          </div>
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
                  <input type="text" className="border-b-2 outline-none w-28" />
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <Link href="/compte">
                <a onClick={() => setModal(false)} className="update__btn">
                  METTRE À JOUR
                </a>
              </Link>
              <button onClick={() => setModal(false)}>ANNULER</button>
            </div>
          </section>
        </Modal>
      )}
    </>
  );
};

export default Modifier;
