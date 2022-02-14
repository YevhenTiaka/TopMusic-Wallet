import styles from '../styles/Main.module.scss';
import { useState } from 'react';
import { FC } from 'react';

const Main: FC = () => {
  const [value, setValue] = useState(50);

  return (
    <main className={styles.main}>
      <section className={styles.main__container}>
        <article className={styles.main__container_left}>
          <h1 className={styles.main__section_title}>Gérer ma cagnotte</h1>
          <div className={styles.main__section}>
            <div className={styles.main__btns}>
              <button className={styles.main__btns_item}>10Tc</button>
              <button className={styles.main__btns_item}>20Tc</button>
              <button className={styles.main__btns_item}>30Tc</button>
            </div>
            <div className={styles.main__section_btns_container}>
              <button
                onClick={() => setValue(value / 2)}
                className={styles.main__section_btns_container_item}
              >
                -
              </button>
              <div className={styles.main__section_btns_container_value}>{`${value} Tc`}</div>
              <button
                onClick={() => setValue(value * 2)}
                className={styles.main__section_btns_container_item}
              >
                +
              </button>
            </div>
            <span className={styles.main__section_mounthlyRecharged}>RECHARGER MENSUELLEMENT</span>
            <div className={styles.main__btns}>
              <button className={styles.main__btns_item}>30Tc</button>
              <button className={styles.main__btns_item}>50Tc</button>
              <button className={styles.main__btns_item}>100Tc</button>
            </div>
            <span className={styles.main__section_punctuallyRecharged}>
              RECHARGER PONCTUELLEMENT
            </span>
            <span className={styles.main__section_usageText}>
              Utilisables jusqu'au 14 octobre 2021
            </span>
            <span className={styles.main__section_chargeCagnotte}>
              MODIFIER LE MONTANT DE MA CAGNOTTE
            </span>
          </div>
        </article>
        <section className={styles.main__right}>
          <article className={styles.main__right_upper}>
            <div className={styles.main__section}>
              <div className={styles.main__right_block}>
                <span className={styles.main__right_block_text_u}>
                  Vous possédez dans votre cagnotte
                </span>
                <div className={styles.main__right_block_container}>
                  <span className={styles.main__right_block_num}>13</span>
                  <span className={styles.main__right_block_tc}>Tc</span>
                </div>
              </div>
              <span className={styles.main__right_block_text_b}>Renouvellé le 14 octobre</span>
            </div>
          </article>
          <article className={styles.main__right_bottom}>
            <h1>Mes derniers Tips</h1>
            <div className={styles.main__section}>
              <div>
                <div></div>
                <ul>
                  <li>Tendry</li>
                  <li>Il y a 10 minutes</li>
                </ul>
                <span>10Tc</span>
              </div>
            </div>
          </article>
        </section>
      </section>
    </main>
  );
};

export default Main;
