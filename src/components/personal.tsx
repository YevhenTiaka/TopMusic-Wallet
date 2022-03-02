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
    <>
      <div className="personal">
        <h1 className="font-bold text-xl  pl-6 pb-6">Mes informations personnelles</h1>
        <div className="flex  ">
          <div className=" flex flex-col ml-6 w-1/2">
            <label className="opacity-50 mb-2 w-1/5" htmlFor="">
              PRENOM
            </label>
            <input className=" border-b-[1px] outline-none mb-5" type="text" name="" id="" />
            <label className="opacity-50 mb-2 w-1/5" htmlFor="">
              NOM
            </label>
            <input className=" border-b-[1px] outline-none mb-5 " type="text" name="" id="" />
            <label className="opacity-50 mb-2 w-1/5" htmlFor="">
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
          <div className="flex flex-col pr-6 ml-6 w-1/2">
            <label className=" opacity-50 mb-2 " htmlFor="">
              ADRESSE EMAIL
            </label>
            <input className="border-b-[1px] outline-none mb-5 " type="text" />
            <label className="opacity-50 mb-2 " htmlFor="">
              DATE DE NAISSANCE
            </label>
            <input className="account__input_date" type="date" />
            <label className=" opacity-50 mb-2  border-t-[2px] pt-4" htmlFor="">
              PAYS DE RÉSIDENCE
            </label>
            <input className=" border-b-[1px]  outline-none mb-5" type="text" />
          </div>
        </div>
        <div className="flex justify-end mt-10 mb-10 mr-5">
          <button onClick={handleUpdated} className="account__registrBtn">
            ENREGISTRER LES MODIFICATIONS
          </button>
        </div>
      </div>
      {show && <Notification>Votre mot de passe a été modifié avec succès.</Notification>}
    </>
  );
};

export default Personal;
