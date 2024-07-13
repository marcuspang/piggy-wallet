import { FunctionComponent } from "react";
import styles from "./ScreenContent.module.css";

export type ScreenContentType = {
  className?: string;
  optionText?: string;
};

const ScreenContent: FunctionComponent<ScreenContentType> = ({
  className = "",
  optionText,
}) => {
  return (
    <section className={[styles.screenContent, className].join(" ")}>
      <div className={styles.setupContainer}>
        <div className={styles.setupInstructions}>
          <h2 className={styles.letsSetUp}>Let’s set up your Piggy Wallet</h2>
          <div className={styles.howManyChildren}>
            How many children do you have?
          </div>
        </div>
        <div className={styles.inputField}>
          <div className={styles.label} />
          <div className={styles.description}>Description</div>
          <div className={styles.input}>
            <div className={styles.value}>{optionText}</div>
          </div>
          <div className={styles.error}>Error</div>
        </div>
      </div>
    </section>
  );
};

export default ScreenContent;
