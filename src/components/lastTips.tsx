import { FC, useEffect } from 'react';

const LastTips: FC<any> = ({ setShowList }: any) => {
  const handleClick = () => {
    setShowList(true);
    document.body.scrollIntoView({
      block: 'start',
      behavior: 'smooth'
    });
  };

  return (
    <article className="h-auto w-full mt-20 rounded-md shadow-2xl ">
      <div className="pb-8">
        <h1 className="pt-6 pl-6 font-bold text-xl mb-8">Mes derniers Tips</h1>
        <div className="flex justify-between  border-b-[1px]  mr-6 ml-6">
          <div className="flex items-center mb-4">
            <div className="w-10 h-10 rounded-full mr-5 bg-slate-500 "></div>
            <ul>
              <li className="font-bold">Tendry</li>
              <li className="text-base decoration-gray-300">Il y a 10 minutes</li>
            </ul>
          </div>

          <div className="flex items-center font-bold  text-red-400">10Tc</div>
        </div>

        <a
          onClick={handleClick}
          className="flex justify-center font-bold cursor-pointer text-pink mt-4 "
        >
          VOIR PLUS
        </a>
      </div>
    </article>
  );
};
export default LastTips;
