import { FunctionComponent } from "react";
import styles from "./Card.module.css";

export type CardType = {
  className?: string;
};

const Card: FunctionComponent<CardType> = ({ className = "" }) => {
  return (
    <section className={[styles.card, className].join(" ")}>
      <img className={styles.infoIcon} alt="" src="/info.svg" />
      <div className={styles.body}>
        <div className={styles.text}>
          <h3 className={styles.showThisQrContainer}>
            <p className={styles.showThisQr}>Show this QR Code to</p>
            <p className={styles.receiveAnyCrypto}>receive any crypto</p>
          </h3>
          <div className={styles.cryptoWillBeContainer}>
            <p className={styles.cryptoWillBe}>
              Crypto will be exchange for USDC
            </p>
            <p className={styles.soYouWill}>
              so you will keep your balance stable
            </p>
          </div>
        </div>
        <div className={styles.buttonGroup}>
          <div className={styles.button}>
            <img className={styles.starIcon} alt="" src="/star3.svg" />
            <div className={styles.button1}>Cancel</div>
            <img className={styles.xIcon} alt="" src="/x4.svg" />
          </div>
          <div className={styles.button2}>
            <img className={styles.starIcon1} alt="" src="/star1.svg" />
            <b className={styles.button3}>Share Payment Link</b>
            <img className={styles.xIcon1} alt="" src="/x1.svg" />
          </div>
        </div>
      </div>
      <img className={styles.qrIcon} loading="lazy" alt="" src="/qr@2x.png" />
    </section>
  );
};

export default Card;
