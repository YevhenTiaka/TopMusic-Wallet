import { FC } from 'react';

const Abonement: FC = ({ children }: any) => {
  return (
    <>
      <section className="w-full h-auto p-6 mb-10 shadow">
        <div>
          <h1 className="text-xl font-bold mb-4">Mon abonnement</h1>
          {children}
        </div>
      </section>
    </>
  );
};

export default Abonement;
