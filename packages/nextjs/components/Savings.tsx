import { FunctionComponent } from "react";
import SavingsProfiles from "./SavingsProfiles";
import styles from "./Savings.module.css";

export type SavingsType = {
  className?: string;
};

const Savings: FunctionComponent<SavingsType> = ({ className = "" }) => {
  return (
    <section className={[styles.savings, className].join(" ")}>
      <div className={styles.savingsContent}>
        <div className={styles.inputs}>
          <div className={styles.savingsHeader}>
            <b className={styles.savingsOverview}>Savings Overview</b>
            <div className={styles.savingsSubtitle}>$2,800.10</div>
          </div>
          <div className={styles.savingsChart} />
          <SavingsProfiles avatar1="/avatar-15@2x.png" />
          <div className={styles.savingsButtons}>
            <button className={styles.button}>
              <img className={styles.starIcon} alt="" src="/star7.svg" />
              <div className={styles.button1}>Add Funds</div>
              <img className={styles.xIcon} alt="" src="/x8.svg" />
            </button>
            <button className={styles.button2}>
              <img className={styles.starIcon1} alt="" src="/star3.svg" />
              <div className={styles.button3}>Withdraw Funds</div>
              <img className={styles.xIcon1} alt="" src="/x4.svg" />
            </button>
          </div>
        </div>
        <div className={styles.inputs1}>
          <div className={styles.allowanceHeader}>
            <div className={styles.allowanceLabel}>
              <b className={styles.weeklyAllowance}>Weekly Allowance</b>
            </div>
            <div className={styles.allowanceSubtitle}>$340</div>
          </div>
          <div className={styles.allowanceChart} />
          <div className={styles.allowanceProfiles}>
            <div className={styles.allowanceRow}>
              <div className={styles.allowancePair}>
                <img
                  className={styles.avatarIcon}
                  loading="lazy"
                  alt=""
                  src="/avatar1@2x.png"
                />
                <div className={styles.mattsAllowance}>Matt’s Allowance</div>
              </div>
              <div className={styles.editButtons}>
                <div className={styles.editDivider}>$170</div>
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
            <div className={styles.allowanceRow1}>
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
      </div>
    </section>
  );
};

export default Savings;
