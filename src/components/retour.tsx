import { FC } from 'react';
import { useRouter } from 'next/router';

const Retour: FC = () => {
  const router = useRouter();

  return (
    <div className="fixed top-[145px] left-[140px] cursor-pointer opacity-50">
      <i className="fa-solid fa-arrow-left">
        <span onClick={() => router.back()} className="ml-4">
          Retour
        </span>
      </i>
    </div>
  );
};

export default Retour;
