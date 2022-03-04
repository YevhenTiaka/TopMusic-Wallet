import { FC } from 'react';

const ModifierPasse: FC<any> = ({ handleUpdated }: any) => {
  return (
    <div className="w-[45%] h-auto shadow-2xl rounded-md p-5">
      <h1 className="font-bold mb-6 text-xl">Modifier votre mot de passe</h1>

      <div className="flex flex-col">
        <label className="text-xs font-medium  opacity-80" htmlFor="">
          NOUVEAU MOT DE PASSE
        </label>
        <input className="border-b-[1px] mb-4 outline-none " type="password" />
        <label className="text-xs font-medium opacity-80" htmlFor="">
          CONFIRMER LE NOUVEAU MOT DE PASSE
        </label>
        <input className="border-b-[1px] outline-none" type="password" />
      </div>
      <div className="flex w-full justify-center">
        <button
          onClick={handleUpdated}
          className="w-60  h-10 flex justify-center items-center shadow text-xs font-bold opacity-50 text-white rounded-full bg-gradient mt-8"
        >
          DÉFINIR UN NOUVEAU MOT DE PASSE
        </button>
      </div>
    </div>
  );
};

export default ModifierPasse;
