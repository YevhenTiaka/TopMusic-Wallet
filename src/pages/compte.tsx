import WalletAmount from 'components/walletAmount';
import styles from 'styles/Account.module.scss';
import { FC } from 'react';
const Compte: FC = () => {
  return (
    <>
      <section className="flex justify-center mt-20 ">
        <div className="flex ">
          <div className="w-4/7 mr-10 shadow-lg rounded-md">
            <h1 className="font-bold text-xl pl-6 pt-6 pb-6">Mes informations personnelles</h1>
            <div className="flex justify-between  ">
              <div className=" flex flex-col ml-6 ">
                <label className="decoration-gray-300 opacity-50 mb-2" htmlFor="">
                  PRENOM
                </label>
                <input
                  className="w-96 border-b-[1px] outline-none mb-5"
                  type="text"
                  name=""
                  id=""
                />
                <label className="decoration-gray-300 opacity-50 mb-2" htmlFor="">
                  NOM
                </label>
                <input
                  className="w-96 border-b-[1px] outline-none mb-5"
                  type="text"
                  name=""
                  id=""
                />
                <label className="decoration-gray-300 opacity-50 mb-2" htmlFor="">
                  SEXE
                </label>
                <div>
                  <label htmlFor="">Homme</label>
                  <input type="radio" name="" id="" />
                  <label htmlFor="">Femme</label>
                  <input type="radio" name="" id="" />
                </div>
              </div>
              <div className="flex flex-col pr-6 ml-6">
                <label className="decoration-gray-300 opacity-50 mb-2" htmlFor="">
                  ADRESSE EMAIL
                </label>
                <input className="w-96 border-b-[1px] outline-none mb-5" type="text" />
                <label className="decoration-gray-300 opacity-50 mb-2" htmlFor="">
                  DATE DE NAISSANCE
                </label>
                <input className={styles.account__input_date} type="date" />
                <label className="decoration-gray-300 opacity-50 mb-2" htmlFor="">
                  PAYS DE RÉSIDENCE
                </label>
                <input className="w-96 border-b-[1px] outline-none mb-5" type="text" />
              </div>
            </div>
            <div className="flex justify-end mt-10 mb-10 mr-5">
              <button className={styles.account__registrBtn}>ENREGISTRER LES MODIFICATIONS</button>
            </div>
          </div>
          <WalletAmount />
        </div>
      </section>
      <section className="flex h-auto">
        <div className="flex ">
          <div className=" bg-black w-40 h-40"></div>
          <div className=" bg-black w-40 h-40"></div>
        </div>
        <div></div>
      </section>
    </>
  );
};

export default Compte;
