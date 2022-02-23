import { FC } from 'react';
import { useRouter } from 'next/router';

const Retour: FC = () => {
  const router = useRouter();

  return (
    <div className="retour">
      <i className="fa-solid fa-arrow-left">
        <span onClick={() => router.back()} className="ml-4">
          Retour
        </span>
      </i>
    </div>
  );
};

export default Retour;
