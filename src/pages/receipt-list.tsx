import { FC } from 'react';
import { useRouter } from 'next/router';

const Cagnotte: FC = () => {
  const router = useRouter();

  return (
    <main className="receipt__main">
      <div className="retour">
        <i className="fa-solid fa-arrow-left">
          <span onClick={() => router.back()} className="ml-4">
            Retour
          </span>
        </i>
      </div>
      <section className="receipt__list_section">
        <h1 className="pt-6 pl-6 font-bold text-xl mb-8">Historique des Tips</h1>
        <div className="receipt__list_block">
          <div className="flex items-center">
            <div className="receipt__list_img"></div>
            <ul>
              <li className="font-bold">Tendry</li>
              <li className="text-base decoration-gray-300 ">Il y a 10 minutes</li>
            </ul>
          </div>

          <div className="receipt__list_amount">10Tc</div>
        </div>
        <div className="receipt__list_block">
          <div className="flex items-center">
            <div className="receipt__list_img"></div>
            <ul>
              <li>Tendry</li>
              <li>Il y a 10 minutes</li>
            </ul>
          </div>

          <div className="receipt__list_amount">10Tc</div>
        </div>
        <div className="receipt__list_block">
          <div className="flex items-center">
            <div className="receipt__list_img"></div>
            <ul>
              <li>Tendry</li>
              <li>Il y a 10 minutes</li>
            </ul>
          </div>

          <div className="flex items-center">10Tc</div>
        </div>
      </section>
    </main>
  );
};

export default Cagnotte;
