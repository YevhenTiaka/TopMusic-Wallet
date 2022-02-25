import Link from 'next/link';
const ModifierPaiement = ({ children }: any) => {
  return (
    <div className="modifier__passe">
      <h1 className="font-bold text-2xl mb-6">Moyen de paiement</h1>
      <div className="flex items-center">
        <div className="card__img"></div>
        <ul className="paiement">
          <li className="paiement__item_carte">Carte bancaire</li>
          <li className="paiement__item_visa">Visa se terminant par 4242</li>
          <li className="paiement__item_expiration">Expire le 12/21</li>
        </ul>
      </div>

      {children}

      <Link href="/receipt-history">
        <a className="paiement__historique">HISTORIQUE DE PAIEMENT</a>
      </Link>
    </div>
  );
};

export default ModifierPaiement;
