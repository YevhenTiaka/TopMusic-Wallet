import Link from 'next/link';
import { FC, ReactNode } from 'react';

interface IModifierPaiement {
  children: ReactNode;
}

const ModifierPaiement: FC<IModifierPaiement> = ({ children }) => {
  return (
    <div className="w-[45%] h-auto shadow-2xl rounded-md p-5">
      <h1 className="font-bold text-xl mb-6">Moyen de paiement</h1>
      <div className="flex items-center">
        <div className="w-[37px] h-[30px] bg-no-repeat bg-contain mr-4 bg-[url('./images/visa_img.png')]"></div>
        <ul className="mb-5">
          <li className="font-bold text-sm text-pink">Carte bancaire</li>
          <li className="font-bold text-sm text-gray">Visa se terminant par 4242</li>
          <li className="text-xs text-gray">Expire le 12/21</li>
        </ul>
      </div>

      {children}

      <Link href="/historique-de-paiement">
        <a className="flex justify-end text-pink font-bold cursor-pointer mt-6 mb-6">
          HISTORIQUE DE PAIEMENT
        </a>
      </Link>
    </div>
  );
};

export default ModifierPaiement;
