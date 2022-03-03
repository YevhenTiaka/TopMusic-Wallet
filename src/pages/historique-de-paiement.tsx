import { FC } from 'react';
import Retour from 'components/retour';

const Receipt: FC = () => {
  return (
    <main className="w-7/12 m-auto h-screen mt-20">
      <Retour />
      <div className="receipt__block">
        <h1 className="font-bold text-xl mb-4">Historique de paiements</h1>
        <div className="opacity-50">
          <div className="flex justify-between  ">
            <div className=" pl-6">DATE</div>
            <div className="">RÉFÉRENCE</div>
            <div className="">PRIX</div>
            <div className="">TYPE</div>
            <div></div>
            <br />
          </div>
          <br />
          <ul className="flex justify-between items-center h-10 bg-slate-100 mt-4 mb-4 pl-4 pr-4">
            <li>08.09.21</li>
            <li>565165165165-1-1651</li>
            <li>15,90 €</li>
            <li className=" bg-red-500 p-1 rounded-2xl ">TOPMUSIC PREMIUM</li>
            <li>TÉLÉCHARGER</li>
          </ul>
          <ul className="flex justify-between items-center h-10  mt-4 mb-4  pl-4 pr-4">
            <li>08.09.21</li>
            <li>565165165165-1-1651</li>
            <li>15,90 €</li>
            <li>TOPMUSIC PREMIUM</li>
            <li>TÉLÉCHARGER</li>
          </ul>
          <ul className="flex justify-between items-center h-10 bg-slate-100 mt-4 mb-4  pl-4 pr-4 ">
            <li>08.09.21</li>
            <li>565165165165-1-1651</li>
            <li>15,90 €</li>
            <li>TOPMUSIC PREMIUM</li>
            <li>TÉLÉCHARGER</li>
          </ul>
          <ul className="flex justify-between items-center h-10 bg-slate-100 mt-4 mb-4  pl-4 pr-4 ">
            <li>08.09.21</li>
            <li>565165165165-1-1651</li>
            <li>15,90 €</li>
            <li>TOPMUSIC PREMIUM</li>
            <li>TÉLÉCHARGER</li>
          </ul>
          <ul className="flex justify-between items-center h-10 bg-slate-100 mt-4 mb-4  pl-4 pr-4 ">
            <li>08.09.21</li>
            <li>565165165165-1-1651</li>
            <li>15,90 €</li>
            <li>TOPMUSIC PREMIUM</li>
            <li>TÉLÉCHARGER</li>
          </ul>
        </div>
      </div>
    </main>
  );
};

export default Receipt;
