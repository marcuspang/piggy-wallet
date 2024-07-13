import { FunctionComponent } from "react";
import styles from "./Inputs3.module.css";

export type Inputs3Type = {
  className?: string;
};

const Inputs3: FunctionComponent<Inputs3Type> = ({ className = "" }) => {
  return (
    <div className={[styles.inputs, className].join(" ")}>
      <div className={styles.savingsHeader}>
        <b className={styles.savingsOverview}>Savings Overview</b>
        <div className={styles.savingsSubtitle}>$3,300.10</div>
      </div>
      <div className={styles.savingsDivider} />
      <div className={styles.savingsCards}>
        <div className={styles.savingsCardParent}>
          <div className={styles.savingsCard}>
            <img
              className={styles.avatarIcon}
              loading="lazy"
              alt=""
              src="/avatar1@2x.png"
            />
            <div className={styles.mattsSavings}>Matt’s Savings</div>
          </div>
          <div className={styles.cardSeparator}>$2,300.10</div>
        </div>
        <div className={styles.frameParent}>
          <div className={styles.avatarParent}>
            <img
              className={styles.avatarIcon1}
              loading="lazy"
              alt=""
              src="/avatar-14@2x.png"
            />
            <div className={styles.lucysSavings}>Lucy’s Savings</div>
          </div>
          <div className={styles.div}>$1,000</div>
        </div>
      </div>
      <div className={styles.savingsCardActions}>
        <button className={styles.button}>
          <img className={styles.starIcon} alt="" src="/star7.svg" />
          <a className={styles.button1}>Add Funds</a>
          <img className={styles.xIcon} alt="" src="/x8.svg" />
        </button>
        <button className={styles.button2}>
          <img className={styles.starIcon1} alt="" src="/star3.svg" />
          <div className={styles.button3}>Withdraw Funds</div>
          <img className={styles.xIcon1} alt="" src="/x4.svg" />
        </button>
      </div>
    </div>
  );
};

export default Inputs3;
