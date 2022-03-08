import { FC, ReactNode } from 'react';

interface IChildren {
  children: ReactNode;
}

const Abonement: FC<IChildren> = ({ children }) => {
  return (
    <>
      <section className="w-full h-auto p-6 mb-10 shadow-2xl rounded-md">
        <div>
          <h1 className="text-xl font-bold mb-4">Mon abonnement</h1>
          {children}
        </div>
      </section>
    </>
  );
};

export default Abonement;
