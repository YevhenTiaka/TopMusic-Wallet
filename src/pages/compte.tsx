import WalletAmount from '../сomponents/walletAmount';
import styles from '../styles/Account.module.scss';

const Compte = () => {
  return (
    <>
      <section className={styles.account}>
        <div className={styles.account__container}>
          <div className={styles.account__container_block}>
            <h1 className="">Mes informations personnelles</h1>
            <div className={styles.account__container_inputs}>
              <div>
                <input className=" bg-red-600 " type="text" name="" id="" />
                <input type="text" name="" id="" />
                <label htmlFor="">Homme</label>
                <input type="radio" name="" id="" />
                <label htmlFor="">Femme</label>
                <input type="radio" name="" id="" />
              </div>
              <div>
                <input type="text" />
                <input type="text" />
                <input type="text" />
              </div>
            </div>
          </div>
          <WalletAmount />
        </div>
      </section>
    </>
  );
};

export default Compte;
