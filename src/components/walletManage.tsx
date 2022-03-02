import { FC, useState, useContext } from 'react';
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

  const handlerUpdated = () => {
    setMensuellement(false);
    setPonctuellement(false);
    setShow(true);
    setTimeout(() => {
      setShow(false);
    }, 3000);
  };
  return (
    <>
      <article className="shadow-2xl p-6 h-max rounded-md w-4/6">
        <h1 className="text-2xl font-bold mb-6">Gérer ma cagnotte</h1>
        <div className="">
          <div className="mb-6 mt-6 flex justify-center">
            <button
              onClick={() =>
                handleClick(setActive({ ...DEFAULT_VALUE, first: true }), setValue(10))
              }
              className={activeButton.first ? 'main__btns_item_active' : 'main__btns_item_disabled'}
            >
              10Tc
            </button>
            <button
              onClick={() =>
                handleClick(setActive({ ...DEFAULT_VALUE, second: true }), setValue(20))
              }
              className={
                activeButton.second ? 'main__btns_item_active' : 'main__btns_item_disabled'
              }
            >
              20Tc
            </button>
            <button
              onClick={() =>
                handleClick(setActive({ ...DEFAULT_VALUE, third: true }), setValue(30))
              }
              className={activeButton.third ? 'main__btns_item_active' : 'main__btns_item_disabled'}
            >
              30Tc
            </button>
          </div>
          <div className="flex justify-center  mt-8">
            <button
              disabled={value <= ZERO}
              onClick={() => setValue(value - CHANGE_VALUE)}
              className="change__value_btn"
            >
              -
            </button>
            <div className="container__value">{`${value} Tc`}</div>
            <button onClick={() => setValue(value + CHANGE_VALUE)} className="change__value_btn">
              +
            </button>
          </div>
          <button
            onClick={() => setMensuellement(!mensuellement)}
            className="mounthlyRecharged__btn"
          >
            RECHARGER MENSUELLEMENT
          </button>
          <div className="mb-6 mt-6 flex justify-center">
            <button
              onClick={() =>
                handleClick(setActive({ ...DEFAULT_VALUE, fourth: true }), setValue(30))
              }
              className={
                activeButton.fourth ? 'main__btns_item_active' : 'main__btns_item_disabled'
              }
            >
              30Tc
            </button>
            <button
              onClick={() =>
                handleClick(setActive({ ...DEFAULT_VALUE, fifth: true }), setValue(50))
              }
              className={activeButton.fifth ? 'main__btns_item_active' : 'main__btns_item_disabled'}
            >
              50Tc
            </button>
            <button
              onClick={() =>
                handleClick(setActive({ ...DEFAULT_VALUE, sixth: true }), setValue(100))
              }
              className={activeButton.sixth ? 'main__btns_item_active' : 'main__btns_item_disabled'}
            >
              100Tc
            </button>
          </div>
          <button
            onClick={() => setPonctuellement(!ponctuellement)}
            className="mounthlyRecharged__btn"
          >
            RECHARGER PONCTUELLEMENT
          </button>
          <span className="opacity-50 flex justify-center ">
            Utilisables jusqu'au 14 octobre 2021
          </span>
          <Link href="/update-amount">
            <a className="chargeCagnotte__btn">MODIFIER LE MONTANT DE MA CAGNOTTE</a>
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
