import { FC } from 'react';
import PropTypes from 'prop-types';

const Abonement: FC = ({ children }: any) => {
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

Abonement.propTypes = {
  children: PropTypes.any
};

export default Abonement;
