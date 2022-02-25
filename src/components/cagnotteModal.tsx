import styles from 'styles/RechargeModal.module.scss';
import { FC, useContext } from 'react';
import Link from 'next/link';
import { Context } from 'pages/_app';
const CagnotteModal: FC<any> = ({ children, value, closeHandler }: any) => {
  const { isShow, setIsShow }: any = useContext(Context);

  const handler = () => {
    if (!isShow) {
      setIsShow(true);
      setTimeout(() => {
        setIsShow(false);
      }, 3000);
    }
  };
  return (
    <>
      <h1 className={styles.modal_title}>Mise à jour de votre cagnotte</h1>
      <div className={styles.modal__block}>
        <div className=" p-4">
          <div className="flex justify-between">
            <div className={styles.modal__block_wallet_container}>
              <div className={styles.modal__block_wallet_container_textU}>{children}</div>
              Votre nouvelle cagnotte
            </div>
            <div className={styles.modal__block_wallet_tc}>{value}Tc</div>
          </div>

          <div className="w-10/12 text-right ml-auto">
            À compter du 14/10, votre cagnotte mensuelle sera désormais de {value}Tc/mois{' '}
            {`soit 
            ${value / 10}`}
            €/mois.
          </div>
        </div>
      </div>
      <span className={styles.modal_text}>Votre carte de paiement</span>
      <div className={styles.modal__card}>
        <div className="card__img"></div>
        <ul className={styles.modal__card_list}>
          <li className={styles.modal__card_list_item}>Carte Visa terminant par 4242</li>
          <li className={styles.modal__card_list_item_exp}>Expire le 12/24</li>
        </ul>
      </div>
      <button className={styles.modal_updateBtn}>METTRE À JOUR</button>
      <span className={styles.modal_general}>
        Lorsque vous changez le montant de votre cagnotte, vous autorisez TopMusic à vous facturer
        automatiquement tous les mois, jusqu'à annulation. Aucun remboursement partiel. Vous pouvez
        annuler ou modifier le montant de votre abonnement à tout moment.
        <br />
        <br />
        <u>Consulter les conditions générales d'utilisation et les modalités d'annulation.</u>.
      </span>
      <div className={styles.modal__rechargeBtns}>
        <Link href="/cagnotte">
          <a onClick={handler} className={styles.modal__rechargeBtns_valider}>
            VALIDER ET PAYER
          </a>
        </Link>

        <button onClick={() => closeHandler(false)} className={styles.modal__rechargeBtns_annuler}>
          ANNULER
        </button>
      </div>
    </>
  );
};

export default CagnotteModal;
