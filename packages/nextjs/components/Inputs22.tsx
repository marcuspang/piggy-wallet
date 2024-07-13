import { FunctionComponent } from "react";
import styles from "./Inputs22.module.css";

export type Inputs2Type = {
  className?: string;
};

const Inputs2: FunctionComponent<Inputs2Type> = ({ className = "" }) => {
  return (
    <div className={[styles.inputs, className].join(" ")}>
      <div className={styles.allowanceHeader}>
        <div className={styles.allowanceLabel}>
          <b className={styles.weeklyAllowance}>Weekly Allowance</b>
        </div>
        <div className={styles.allowanceSubtitle}>$340</div>
      </div>
      <div className={styles.allowanceDivider} />
      <div className={styles.allowanceCards}>
        <div className={styles.allowanceCardParent}>
          <div className={styles.allowanceCard}>
            <img
              className={styles.avatarIcon}
              loading="lazy"
              alt=""
              src="/avatar1@2x.png"
            />
            <div className={styles.mattsAllowance}>Matt’s Allowance</div>
          </div>
          <div className={styles.allowanceActions}>
            <div className={styles.actionSeparator}>$170</div>
            <div className={styles.iconButton}>
              <img
                className={styles.edit02Icon}
                loading="lazy"
                alt=""
                src="/edit02-1.svg"
              />
            </div>
          </div>
        </div>
        <div className={styles.frameParent}>
          <div className={styles.avatarParent}>
            <img
              className={styles.avatarIcon1}
              loading="lazy"
              alt=""
              src="/avatar-3@2x.png"
            />
            <div className={styles.lucysAllowance}>Lucy’s Allowance</div>
          </div>
          <div className={styles.parent}>
            <div className={styles.div}>$170</div>
            <div className={styles.iconButton1}>
              <img
                className={styles.edit02Icon1}
                loading="lazy"
                alt=""
                src="/edit02-1.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inputs2;
