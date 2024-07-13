import { FunctionComponent } from "react";
import styles from "./Inputs5.module.css";

export type Inputs5Type = {
  className?: string;
  allowanceAmount?: string;
  actionSeparator?: string;
};

const Inputs5: FunctionComponent<Inputs5Type> = ({
  className = "",
  allowanceAmount,
  actionSeparator,
}) => {
  return (
    <div className={[styles.inputs, className].join(" ")}>
      <div className={styles.frameParent}>
        <div className={styles.weeklyAllowanceParent}>
          <div className={styles.weeklyAllowance}>Weekly Allowance</div>
          <div className={styles.allowanceAmount}>{allowanceAmount}</div>
        </div>
        <div className={styles.frameGroup}>
          <div className={styles.nextPaymentWrapper}>
            <div className={styles.nextPayment}>Next Payment</div>
          </div>
          <div className={styles.nextPaymentDate}>07/20/24</div>
        </div>
      </div>
      <div className={styles.allowanceChart} />
      <div className={styles.allowanceDetails}>
        <div className={styles.allowanceDetailContainer}>
          <div className={styles.allowanceUser}>
            <img
              className={styles.avatarIcon}
              loading="lazy"
              alt=""
              src="/avatar1@2x.png"
            />
            <div className={styles.mattsAllowance}>Matt’s Allowance</div>
          </div>
          <div className={styles.allowanceAction}>
            <div className={styles.actionSeparator}>{actionSeparator}</div>
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
        <div className={styles.allowanceDetailContainer1}>
          <div className={styles.avatarParent}>
            <img
              className={styles.avatarIcon1}
              loading="lazy"
              alt=""
              src="/avatar-31@2x.png"
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

export default Inputs5;
