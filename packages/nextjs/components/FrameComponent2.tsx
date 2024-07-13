import { FunctionComponent } from "react";
import styles from "./FrameComponent2.module.css";

export type FrameComponent2Type = {
  className?: string;
};

const FrameComponent2: FunctionComponent<FrameComponent2Type> = ({
  className = "",
}) => {
  return (
    <section className={[styles.inputContainerWrapper, className].join(" ")}>
      <div className={styles.inputContainer}>
        <div className={styles.letsSetUpYourPiggyWalletParent}>
          <div className={styles.letsSetUp}>Let’s set up your Piggy Wallet</div>
          <div className={styles.howManyChildren}>
            How many children do you have?
          </div>
        </div>
        <div className={styles.inputField}>
          <div className={styles.label} />
          <div className={styles.description}>Description</div>
          <div className={styles.input}>
            <input className={styles.value} placeholder="2" type="text" />
          </div>
          <div className={styles.error}>Error</div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent2;
