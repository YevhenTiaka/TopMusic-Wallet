import { FC, MouseEventHandler, useState } from 'react';
interface IPersonal {
  handleUpdated: MouseEventHandler;
}
const Personal: FC<IPersonal> = ({ handleUpdated }) => {
  const [gender, setGender] = useState({
    femme: false,
    homme: false
  });

  return (
    <>
      <div className="shadow-2xl rounded-md p-[15px]">
        <h1 className="font-bold text-xl  pl-6 pb-6">Mes informations personnelles</h1>
        <div className="flex">
          <div className=" flex flex-col ml-6 w-1/2">
            <label className="opacity-50 mb-2 w-1/5" htmlFor="">
              PRENOM
            </label>
            <input className="border-b-[1px] outline-none mb-5" type="text" name="" id="" />
            <label className="opacity-50 mb-2 w-1/5" htmlFor="">
              NOM
            </label>
            <input className=" border-b-[1px] outline-none mb-5 " type="text" name="" id="" />
            <label className="opacity-50 mb-2 w-1/5" htmlFor="">
              SEXE
            </label>
            <div className="flex ">
              <button
                className={
                  gender.femme === true
                    ? 'bg-orange  w-[100px] h-[40px] rounded-full text-white font-bold border-[1px] mr-3'
                    : 'border-[1px]  w-[100px] h-[40px] rounded-full text-orange font-bold mr-3'
                }
                onClick={() => setGender({ ...gender, femme: true, homme: false })}
              >
                Homme
              </button>

              <button
                className={
                  gender.homme === true
                    ? 'bg-orange  w-[100px] h-[40px] rounded-full text-white font-bold border-[1px] mr-3'
                    : ' border-[1px] w-[100px] h-[40px] rounded-full text-orange font-bold mr-3'
                }
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
            <input
              className="outline-none indent-1 opacity-70 font-bold border-b-[1px] bg-white"
              type="date"
            />
            <label className=" opacity-50 mb-2   pt-4" htmlFor="">
              PAYS DE RÉSIDENCE
            </label>
            <input className="border-b-[1px]  outline-none mb-5" type="text" />
          </div>
        </div>
        <div className="flex justify-end mt-10 mb-10 mr-5">
          <button
            onClick={handleUpdated}
            className="w-[369px] h-[49px] opacity-50 text-white font-bold bg-gradient rounded-full"
          >
            ENREGISTRER LES MODIFICATIONS
          </button>
        </div>
      </div>
    </>
  );
};

export default Personal;
