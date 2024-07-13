import { FunctionComponent } from "react";
import styles from "./Content.module.css";

export type ContentType = {
  className?: string;
  value?: string;
};

const Content: FunctionComponent<ContentType> = ({ className = "", value }) => {
  return (
    <section className={[styles.content, className].join(" ")}>
      <div className={styles.setup}>
        <div className={styles.letsSetUpYourPiggyWalletParent}>
          <h2 className={styles.letsSetUp}>Let’s set up your Piggy Wallet</h2>
          <div className={styles.howManyChildren}>
            How many children do you have?
          </div>
        </div>
        <div className={styles.inputField}>
          <div className={styles.label} />
          <div className={styles.description}>Description</div>
          <div className={styles.input}>
            <div className={styles.value}>{value}</div>
          </div>
          <div className={styles.error}>Error</div>
        </div>
      </div>
    </section>
  );
};

export default Content;
