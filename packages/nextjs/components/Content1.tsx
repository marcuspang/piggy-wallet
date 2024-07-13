import { FunctionComponent } from "react";
import styles from "./Content1.module.css";

export type ContentType = {
  className?: string;
};

const Content: FunctionComponent<ContentType> = ({ className = "" }) => {
  return (
    <section className={[styles.content, className].join(" ")}>
      <div className={styles.welcomeContainer}>
        <div className={styles.welcomeToPiggyWalletParent}>
          <h1 className={styles.welcomeToPiggyWalletContainer}>
            <p className={styles.welcomeTo}>Welcome to</p>
            <p className={styles.piggyWallet}>Piggy Wallet</p>
          </h1>
          <div className={styles.empoweringKidsIn}>
            Empowering kids in high-inflation economies with secure crypto
            savings accounts.
          </div>
        </div>
        <div className={styles.buttonGroup}>
          <button className={styles.button}>
            <img className={styles.starIcon} alt="" src="/star1.svg" />
            <b className={styles.button1}>Sign Up</b>
            <img className={styles.xIcon} alt="" src="/x1.svg" />
          </button>
          <div className={styles.button2}>
            <img className={styles.starIcon1} alt="" src="/star2.svg" />
            <div className={styles.button3}>
              <span>
                <span className={styles.alreadyHaveAn}>
                  Already have an account?
                </span>
                <b className={styles.b}>{` `}</b>
              </span>
              <b className={styles.logIn}>
                <span>Log In</span>
              </b>
            </div>
            <img className={styles.xIcon1} alt="" src="/x3.svg" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Content;
