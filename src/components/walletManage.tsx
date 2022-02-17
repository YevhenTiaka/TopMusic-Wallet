import { FC, useEffect, useState } from 'react';
import Link from 'next/link';
import styles from 'styles/Main.module.scss';
import RechargeModal from './rechargeModal';
import Modal from './modal';

const DEFAULTVALUE = {
  first: false,
  second: false,
  third: false
};

const ZERO = 0;
const CHANGEVALUE = 5;

const WalletManage: FC = () => {
  const [mensuellement, setMensuellement] = useState(false);
  const [ponctuellement, setPonctuellement] = useState(false);
  const [value, setValue] = useState(0);

  const [activeButton, setActive] = useState({ first: false, second: false, third: false });

  const handlerFirst = () => {
    setActive({ ...DEFAULTVALUE, first: true });
    setValue(10);
  };
  const handlerSecond = () => {
    setActive({ ...DEFAULTVALUE, second: true });
    setValue(20);
  };
  const handlerThird = () => {
    setActive({ ...DEFAULTVALUE, third: true });
    setValue(30);
  };

  return (
    <>
      <article className={styles.main__container_left}>
        <h1 className={styles.main__section_title}>Gérer ma cagnotte</h1>
        <div className={styles.main__section}>
          <div className={styles.main__btns}>
            <button
              onClick={handlerFirst}
              className={
                activeButton.first
                  ? `${styles.main__btns_item_active}`
                  : `${styles.main__btns_item_disabled}`
              }
            >
              10Tc
            </button>
            <button
              onClick={handlerSecond}
              className={
                activeButton.second
                  ? `${styles.main__btns_item_active}`
                  : `${styles.main__btns_item_disabled}`
              }
            >
              20Tc
            </button>
            <button
              onClick={handlerThird}
              className={
                activeButton.third
                  ? `${styles.main__btns_item_active}`
                  : `${styles.main__btns_item_disabled}`
              }
            >
              30Tc
            </button>
          </div>
          <div className={styles.main__section_btns_container}>
            <button
              disabled={value <= ZERO}
              onClick={() => setValue(value - CHANGEVALUE)}
              className={styles.main__section_btns_container_item}
            >
              -
            </button>
            <div className={styles.main__section_btns_container_value}>{`${value} Tc`}</div>
            <button
              onClick={() => setValue(value + CHANGEVALUE)}
              className={styles.main__section_btns_container_item}
            >
              +
            </button>
          </div>
          <button
            onClick={() => setMensuellement(!mensuellement)}
            className={styles.main__section_mounthlyRecharged}
          >
            RECHARGER MENSUELLEMENT
          </button>
          <div className={styles.main__btns}>
            <button onClick={() => setValue(value + 30)} className={styles.main__btns_item}>
              30Tc
            </button>
            <button onClick={() => setValue(value + 50)} className={styles.main__btns_item}>
              50Tc
            </button>
            <button onClick={() => setValue(value + 100)} className={styles.main__btns_item}>
              100Tc
            </button>
          </div>
          <button
            onClick={() => setPonctuellement(!ponctuellement)}
            className={styles.main__section_punctuallyRecharged}
          >
            RECHARGER PONCTUELLEMENT
          </button>
          <span className={styles.main__section_usageText}>
            Utilisables jusqu'au 14 octobre 2021
          </span>
          <Link href="/cagnotte">
            <a className={styles.main__section_chargeCagnotte}>
              MODIFIER LE MONTANT DE MA CAGNOTTE
            </a>
          </Link>
        </div>
      </article>
      {mensuellement && (
        <Modal closeHandler={setMensuellement}>
          <RechargeModal>mensuellement</RechargeModal>
        </Modal>
      )}
      {ponctuellement && (
        <Modal closeHandler={setPonctuellement}>
          <RechargeModal>ponctuellement</RechargeModal>
        </Modal>
      )}
    </>
  );
};
export default WalletManage;
