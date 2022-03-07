import { FC, useState, useContext, useEffect } from 'react';
import Link from 'next/link';
import RechargeModal from './rechargeModal';
import Modal from './modal';
import { DEFAULT_VALUE, ZERO, CHANGE_VALUE } from '../constants/constants';
import Notification from './notification';
import { Context } from 'pages/_app';

const WalletManage: FC = () => {
  const [mensuellement, setMensuellement] = useState<Boolean>(false);
  const [ponctuellement, setPonctuellement] = useState<Boolean>(false);
  const { isShow }: any = useContext(Context);
  const [show, setShow] = useState(false);
  const [value, setValue] = useState(0);

  const [activeButton, setActive] = useState({
    first: false,
    second: false,
    third: false,
    fourth: false,
    fifth: false,
    sixth: false
  });

  const handleClick = (activeButton: any, value: any) => {
    return;
  };

  useEffect(() => {
    const handlerUpdated = () => {
      setMensuellement(false);
      setPonctuellement(false);
      setShow(true);
      const intervalId = setTimeout(() => {
        setShow(false);
      }, 3000);
      return clearTimeout(intervalId);
    };
  }, []);

  return (
    <>
      <article className="shadow-2xl p-6 h-max rounded-md w-4/6">
        <h1 className="text-2xl font-bold mb-6">Gérer ma cagnotte</h1>
        <div className="">
          <div className="mb-6 mt-6 flex justify-center ml-5">
            <button
              onClick={() =>
                handleClick(setActive({ ...DEFAULT_VALUE, first: true }), setValue(10))
              }
              className={
                activeButton.first
                  ? 'bg-orange w-[124px] h-[46px] text-white rounded-3xl font-bold mr-5'
                  : 'bg-white w-[124px] h-[46px] text-orange border-solid border-[1px] rounded-3xl font-bold mr-5'
              }
            >
              10Tc
            </button>
            <button
              onClick={() =>
                handleClick(setActive({ ...DEFAULT_VALUE, second: true }), setValue(20))
              }
              className={
                activeButton.second
                  ? 'bg-orange w-[124px] h-[46px] text-white rounded-3xl font-bold mr-5'
                  : 'bg-white w-[124px] h-[46px] text-orange border-solid border-[1px] rounded-3xl font-bold mr-5'
              }
            >
              20Tc
            </button>
            <button
              onClick={() =>
                handleClick(setActive({ ...DEFAULT_VALUE, third: true }), setValue(30))
              }
              className={
                activeButton.third
                  ? 'bg-orange w-[124px] h-[46px] text-white rounded-3xl font-bold mr-5'
                  : 'bg-white w-[124px] h-[46px] text-orange border-solid border-[1px] rounded-3xl font-bold mr-5'
              }
            >
              30Tc
            </button>
          </div>
          <div className="flex justify-center  mt-8">
            <button
              disabled={value <= ZERO}
              onClick={() => setValue(value - CHANGE_VALUE)}
              className="w-[38px] h-[38px] mr-5 ml-5 rounded-full cursor-pointer border-[1px] text-2xl text-gray "
            >
              -
            </button>
            <div className="w-36 h-12 bg-orange flex items-center justify-center text-white font-bold rounded-full ">{`${value} Tc`}</div>
            <button
              onClick={() => setValue(value + CHANGE_VALUE)}
              className="w-[38px] h-[38px] mr-5 ml-5 rounded-full cursor-pointer border-[1px] text-2xl text-gray pb-[5px]"
            >
              +
            </button>
          </div>
          <button
            onClick={() => setMensuellement(!mensuellement)}
            className="flex m-auto mb-4 mt-4 text-sm font-bold cursor-pointer text-pink"
          >
            RECHARGER MENSUELLEMENT
          </button>
          <div className="mb-6 mt-6 flex justify-center ml-5">
            <button
              onClick={() =>
                handleClick(setActive({ ...DEFAULT_VALUE, fourth: true }), setValue(30))
              }
              className={
                activeButton.fourth
                  ? 'bg-orange w-[124px] h-[46px] text-white rounded-3xl font-bold mr-5'
                  : 'bg-white w-[124px] h-[46px] text-orange border-solid border-[1px] rounded-3xl font-bold mr-5'
              }
            >
              30Tc
            </button>
            <button
              onClick={() =>
                handleClick(setActive({ ...DEFAULT_VALUE, fifth: true }), setValue(50))
              }
              className={
                activeButton.fifth
                  ? 'bg-orange w-[124px] h-[46px] text-white rounded-3xl font-bold mr-5'
                  : 'bg-white w-[124px] h-[46px] text-orange border-solid border-[1px] rounded-3xl font-bold mr-5'
              }
            >
              50Tc
            </button>
            <button
              onClick={() =>
                handleClick(setActive({ ...DEFAULT_VALUE, sixth: true }), setValue(100))
              }
              className={
                activeButton.sixth
                  ? 'bg-orange w-[124px] h-[46px] text-white rounded-3xl font-bold mr-5'
                  : 'bg-white w-[124px] h-[46px] text-orange border-solid border-[1px] rounded-3xl font-bold mr-5'
              }
            >
              100Tc
            </button>
          </div>
          <button
            onClick={() => setPonctuellement(!ponctuellement)}
            className="flex m-auto mb-4 text-sm font-bold cursor-pointer text-pink"
          >
            RECHARGER PONCTUELLEMENT
          </button>
          <span className="opacity-50 flex justify-center ">
            Utilisables jusqu'au 14 octobre 2021
          </span>
          <Link href="/montant-mise-a-jour">
            <a className="flex  justify-center mt-4 m-auto mb-4 text-sm font-bold cursor-pointer text-pink">
              MODIFIER LE MONTANT DE MA CAGNOTTE
            </a>
          </Link>
        </div>
      </article>
      {mensuellement && (
        <Modal closeHandler={setMensuellement}>
          <RechargeModal
            handlerUpdated={handlerUpdated}
            closeHandler={setMensuellement}
            value={value}
          >
            mensuellement
          </RechargeModal>
        </Modal>
      )}
      {ponctuellement && (
        <Modal closeHandler={setPonctuellement}>
          <RechargeModal
            handlerUpdated={handlerUpdated}
            closeHandler={setPonctuellement}
            value={value}
          >
            ponctuellement
          </RechargeModal>
        </Modal>
      )}
      {(show || isShow) && <Notification>Vos données ont été mises à jour.</Notification>}
    </>
  );
};
export default WalletManage;
