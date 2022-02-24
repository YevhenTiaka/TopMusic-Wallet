import { FC } from 'react';

const ModifierPasse: FC = ({ handleUpdated }: any) => {
  return (
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

      <button onClick={handleUpdated} className="new__password_btn">
        DÉFINIR UN NOUVEAU MOT DE PASSE
      </button>
    </div>
  );
};

export default ModifierPasse;
