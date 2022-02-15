import styles from '../styles/Main.module.scss';
import { FC } from 'react';

const LastTips: FC = () => {
  return (
    <article className={styles.main__right_bottom}>
      <div className={styles.main__section_tips}>
        <h1 className={styles.main__section_tips_title}>Mes derniers Tips</h1>
        <div className={styles.tips__container}>
          <div className={styles.tips__container_content}>
            <div className={styles.tips__container_img}></div>
            <ul className={styles.tips__container_list}>
              <li className={styles.tips__container_list_name}>Tendry</li>
              <li className={styles.tips__container_list_when}>Il y a 10 minutes</li>
            </ul>
            <span className={styles.tips__container_amount}>10Tc</span>
          </div>
          <div className={styles.tips__container_content}>
            <div className={styles.tips__container_img}></div>
            <ul className={styles.tips__container_list}>
              <li className={styles.tips__container_list_name}>Tendry</li>
              <li className={styles.tips__container_list_when}>Il y a 10 minutes</li>
            </ul>
            <span className={styles.tips__container_amount}>10Tc</span>
          </div>
          <div className={styles.tips__container_content}>
            <div className={styles.tips__container_img}></div>
            <ul className={styles.tips__container_list}>
              <li className={styles.tips__container_list_name}>Tendry</li>
              <li className={styles.tips__container_list_when}>Il y a 10 minutes</li>
            </ul>
            <span className={styles.tips__container_amount}>10Tc</span>
          </div>
          <div className={styles.tips__container_content}>
            <div className={styles.tips__container_img}></div>
            <ul className={styles.tips__container_list}>
              <li className={styles.tips__container_list_name}>Tendry</li>
              <li className={styles.tips__container_list_when}>Il y a 10 minutes</li>
            </ul>
            <span className={styles.tips__container_amount}>10Tc</span>
          </div>
          <div className={styles.tips__container_content}>
            <div className={styles.tips__container_img}></div>
            <ul className={styles.tips__container_list}>
              <li className={styles.tips__container_list_name}>Tendry</li>
              <li className={styles.tips__container_list_when}>Il y a 10 minutes</li>
            </ul>
            <span className={styles.tips__container_amount}>10Tc</span>
          </div>
        </div>
        <div className={styles.main__right_bottom_more}>VOIR PLUS</div>
      </div>
    </article>
  );
};
export default LastTips;
