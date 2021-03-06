import { FC, useState } from 'react';
import Modal from 'components/modal';
import Link from 'next/link';

const Unsubscribe: FC = () => {
  const [closeModal, setCloseModal] = useState<Boolean>(false);
  const [desactive, setDesactive] = useState(false);

  return (
    <>
      {desactive ? (
        <main className="h-screen mt-10">
          <div className="main__unsubscribe">
            <h1 className="text-4xl font-bold mb-6">
              Etes-vous sûr de vouloir <br /> arrêter votre abonnement ?
            </h1>
            <div className="mb-6">
              Vous ne pourrez plus profiter de l’ensemble des <br /> fonctionnalités premium :
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
            <div className="flex flex-col items-center mt-8">
              <button className="subscription__btn">JE GARDE MON ABONNEMENT</button>
              <button onClick={() => setCloseModal(true)} className="termination__btn">
                CONFIRMER LA RÉSILIATION
              </button>
            </div>
            <div className="indent-4 w-11/12 m-auto opacity-50 mb-4">
              Si vous annulez vous pourrez profiter des fonctionnalités premium et utiliser les
              TopCoins restants jusqu’au <strong>20/12/21.</strong>
            </div>
          </div>
        </main>
      ) : (
        <main className="h-screen mt-10">
          <div className="shadow-2xl w-[500px] h-auto rounded-md p-[25px] m-auto">
            <h1 className="text-4xl font-bold mb-6">Votre cagnotte est désactivée...</h1>
            <div className="mb-6">
              Vous avez récemment résilié votre abonnement. Vous disposez de l'abonnement premium
              jusqu'au 18/12, date après laquelle vous basculerez sur un compte sans cagnotte, sans
              pouvoir profiter de l'ensemble des fonctionnalités premium.
            </div>
            <div className="flex mb-4">
              <div className="w-[20px] h-[20px] border-[1px] flex items-center justify-center rounded-[50%]  text-orange text-gray p-3 mr-3">
                X
              </div>
              <div>Soutien des artistes</div>
            </div>
            <div className="flex mb-4">
              <div className="w-[20px] h-[20px] border-[1px] flex items-center justify-center rounded-[50%] text-orange p-3 mr-3">
                X
              </div>
              <div>Écoute illimitée</div>
            </div>
            <div className="flex mb-4">
              <div className="w-[20px] h-[20px] border-[1px] flex items-center justify-center rounded-[50%] text-orange p-3 mr-3">
                X
              </div>
              <div>Création de playlists</div>
            </div>
            <div className="flex mb-4">
              <div className="w-[20px] h-[20px] border-[1px] flex items-center justify-center rounded-[50%] text-orange p-3 mr-3">
                X
              </div>
              <div>Qualité audio supérieure</div>
            </div>
            <div className="flex">
              <div className="w-[20px] h-[20px] border-[1px] flex items-center justify-center rounded-[50%] text-orange p-3 mr-3">
                X
              </div>
              <div>Mode hors connexion</div>
            </div>
            <div className="mt-4">
              Pour profiter de toutes les fonctionnalités, et soutenir les <br /> artistes,
              réactivez votre cagnotte !
            </div>
            <div className="flex flex-col items-center mt-8">
              <Link href="/cagnotte">
                <a className="flex items-center justify-center w-[309px] h-[49px] mb-5 shadow  bg-gradient text-white font-bold rounded-full">
                  RÉACTIVER MA CAGNOTTE
                </a>
              </Link>
            </div>
          </div>
        </main>
      )}

      {closeModal && (
        <Modal closeHandler={setCloseModal}>
          <div className="flex flex-col items-center">
            <h1 className="text-3xl text-center mb-6 font-bold">Résiliation confirmée !</h1>
            <div className="mb-6">
              Afin de nous aider à mieux comprendre vos attentes et <br />
              <p className="indent-4">   améliorer nos services, pouvez-vous prendre un</p> court
              instant pour nous partager les raisons qui vous
              <p className="indent-4"> ont poussé à arrêter votre abonnement? </p>
            </div>
            <textarea
              className="outline-none bg-slate-300 w-11/12 h-48 rounded-md pl-4 pt-4 font-bold decoration-slate-200 opacity-50"
              maxLength={256}
              placeholder="Tapez votre message..."
            ></textarea>
          </div>

          <Link href="/portefeuille-desactive">
            <a className="flex justify-center items-center w-[229px] h-[49px] shadow rounded-full bg-gradient font-bold text-white m-auto mt-[30px]  ">
              CONFIRMER
            </a>
          </Link>
        </Modal>
      )}
    </>
  );
};

export default Unsubscribe;
