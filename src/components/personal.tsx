import styles from 'styles/Account.module.scss';
import { FC, useState } from 'react';
import Notification from './notification';
const Personal: FC = () => {
  const [show, setShow] = useState(false);

  const [gender, setGender] = useState({
    femme: false,
    homme: false
  });

  const handleUpdated = () => {
    setShow(true);
    setTimeout(() => {
      setShow(false);
    }, 3000);
  };
  return (
    <div className="flex ">
      <div className="personal">
        <h1 className="font-bold text-xl pl-6 pt-6 pb-6">Mes informations personnelles</h1>
        <div className="flex justify-between  ">
          <div className=" flex flex-col ml-6 ">
            <label className="decoration-gray-300 opacity-50 mb-2" htmlFor="">
              PRENOM
            </label>
            <input className="w-96 border-b-[1px] outline-none mb-5" type="text" name="" id="" />
            <label className="decoration-gray-300 opacity-50 mb-2" htmlFor="">
              NOM
            </label>
            <input className="w-96 border-b-[1px] outline-none mb-5" type="text" name="" id="" />
            <label className="decoration-gray-300 opacity-50 mb-2" htmlFor="">
              SEXE
            </label>
            <div>
              <button
                className={gender.femme === true ? 'active' : 'disabled'}
                onClick={() => setGender({ ...gender, femme: true, homme: false })}
              >
                Homme
              </button>

              <button
                className={gender.homme === true ? 'active' : 'disabled'}
                onClick={() => setGender({ ...gender, femme: false, homme: true })}
              >
                Femme
              </button>
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
          <button onClick={handleUpdated} className={styles.account__registrBtn}>
            ENREGISTRER LES MODIFICATIONS
          </button>
        </div>
      </div>
      {show && <Notification>Votre mot de passe a été modifié avec succès.</Notification>}
    </div>
  );
};

export default Personal;
