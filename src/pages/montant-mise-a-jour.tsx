import { FC, useState } from 'react';
import Modal from 'components/modal';
import Link from 'next/link';
import CagnotteModal from 'components/cagnotteModal';

const UpdateAmount: FC = () => {
  const [value, setValue] = useState<number>(10);
  const [closeModal, setCloseModal] = useState<Boolean>(false);

  return (
    <main className="h-screen">
      <div className="w-[500px] m-auto mt-[55px] shadow-2xl p-[25px] rounded-sm">
        <h1 className="font-bold text-3xl mb-4">Modifier le montant mensuel</h1>
        <span className="text-base">Le nouveau montant de votre cagnotte sera de :</span>
        <div className="flex justify-center items-center mt-4">
          <button
            disabled={value <= 0}
            onClick={() => setValue(value - 5)}
            className="w-[38px] h-[38px] border-[1px] rounded-[50%] text-gray text-2xl  flex justify-center items-center"
          >
            -
          </button>
          <div className="text-orange text-3xl font-bold ml-5 mr-5">{value} Tc/mois</div>
          <button
            onClick={() => setValue(value + 10)}
            className="w-[38px] h-[38px] border-[1px] rounded-[50%] text-gray text-2xl flex justify-center items-center pb-[5px]"
          >
            +
          </button>
        </div>
        <span className="flex justify-center mb-6 mt-4 decoration-gray-50 opacity-50 text-base">
          Soit {value / 10}€/mois
        </span>
        <div className="flex flex-col items-center">
          <button
            onClick={() => setCloseModal(true)}
            className="flex items-center justify-center w-[200px] h-[49px] text-white font-bold bg-gradient rounded-full mb-[30px] shadow"
          >
            VALIDER
          </button>
          <button className="text-base opacity-50 mb-10" onClick={() => setValue(0)}>
            ANNULER
          </button>
          <Link href="/se-desabonner">
            <a className="text-base opacity-50 mb-2">Je souhaite résilier mon abonnement</a>
          </Link>
        </div>
      </div>
      {closeModal && (
        <Modal closeHandler={setCloseModal}>
          <CagnotteModal closeHandler={setCloseModal} value={value}></CagnotteModal>
        </Modal>
      )}
    </main>
  );
};

export default UpdateAmount;
