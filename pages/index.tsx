import type { NextPage } from 'next';

import styles from '../styles/Main.module.scss';

const Home: NextPage = () => {
  return (
    <>
      <main className={styles.main}>
        <section className={styles.main__container}>
          <article className={styles.main__container_left}>
            <div className={styles.main__section}></div>
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
              <div className={styles.main__section}></div>
            </article>
          </section>
        </section>
      </main>
    </>
  );
};

export default Home;
