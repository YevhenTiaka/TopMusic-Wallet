import styles from 'styles/Main.module.scss';
import { FC } from 'react';

const WalletAmount: FC = () => {
  return (
    <article className={styles.main__right_upper}>
      <div className={styles.main__section_right}>
        <div className={styles.main__right_block}>
          <span className={styles.main__right_block_text_u}>Vous possédez dans votre cagnotte</span>
          <div className={styles.main__right_block_container}>
            <span className={styles.main__right_block_num}>13</span>
            <span className={styles.main__right_block_tc}>Tc</span>
          </div>
        </div>
        <span className={styles.main__right_block_text_b}>Renouvellé le 14 octobre</span>
      </div>
    </article>
  );
};
export default WalletAmount;
