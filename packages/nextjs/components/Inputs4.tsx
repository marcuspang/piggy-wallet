import { FunctionComponent } from "react";
import styles from "./Inputs4.module.css";

export type Inputs4Type = {
  className?: string;
};

const Inputs4: FunctionComponent<Inputs4Type> = ({ className = "" }) => {
  return (
    <div className={[styles.inputs, className].join(" ")}>
      <div className={styles.savingsInfo}>
        <b className={styles.savingsOverview}>Savings Overview</b>
        <div className={styles.overviewSubtitle}>$2,800.10</div>
      </div>
      <div className={styles.inputsChild} />
      <div className={styles.savingsList}>
        <div className={styles.savingsItem}>
          <div className={styles.savingsDetails}>
            <input className={styles.avatar} type="checkbox" />
            <div className={styles.mattsSavings}>Matt’s Savings</div>
          </div>
          <div className={styles.listDivider}>$1,800.10</div>
        </div>
        <div className={styles.savingsItem1}>
          <div className={styles.avatarParent}>
            <input className={styles.avatar1} type="checkbox" />
            <div className={styles.lucysSavings}>Lucy’s Savings</div>
          </div>
          <div className={styles.div}>$1,000</div>
        </div>
      </div>
    </div>
  );
};

export default Inputs4;
