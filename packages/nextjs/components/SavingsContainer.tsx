import { FunctionComponent } from "react";
import styles from "./SavingsContainer.module.css";

export type SavingsContainerType = {
  className?: string;
};

const SavingsContainer: FunctionComponent<SavingsContainerType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.savingsContainer, className].join(" ")}>
      <div className={styles.inputs}>
        <div className={styles.savingsTitle}>
          <b className={styles.savingsOverview}>Savings Overview</b>
          <div className={styles.savingsAmount}>$2,800.10</div>
        </div>
        <div className={styles.savingsDivider} />
        <div className={styles.savingsProfiles}>
          <div className={styles.profileList}>
            <div className={styles.profileItems}>
              <img
                className={styles.avatarIcon}
                loading="lazy"
                alt=""
                src="/avatar1@2x.png"
              />
              <div className={styles.mattsSavings}>Matt’s Savings</div>
            </div>
            <div className={styles.profileSeparator}>$1,800.10</div>
          </div>
          <div className={styles.profileList1}>
            <div className={styles.avatarParent}>
              <img
                className={styles.avatarIcon1}
                loading="lazy"
                alt=""
                src="/avatar-11@2x.png"
              />
              <div className={styles.lucysSavings}>Lucy’s Savings</div>
            </div>
            <div className={styles.div}>$1,000</div>
          </div>
        </div>
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
        <div className={styles.allowanceTitle}>
          <div className={styles.allowanceLabel}>
            <b className={styles.weeklyAllowance}>Weekly Allowance</b>
          </div>
          <div className={styles.allowanceAmount}>$340</div>
        </div>
        <div className={styles.allowanceDivider} />
        <div className={styles.allowanceProfiles}>
          <div className={styles.allowanceList}>
            <div className={styles.allowanceItems}>
              <img
                className={styles.avatarIcon2}
                loading="lazy"
                alt=""
                src="/avatar1@2x.png"
              />
              <div className={styles.mattsAllowance}>Matt’s Allowance</div>
            </div>
            <div className={styles.editButtons}>
              <div className={styles.editSeparator}>$170</div>
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
          <div className={styles.allowanceList1}>
            <div className={styles.avatarGroup}>
              <img
                className={styles.avatarIcon3}
                loading="lazy"
                alt=""
                src="/avatar-3@2x.png"
              />
              <div className={styles.lucysAllowance}>Lucy’s Allowance</div>
            </div>
            <div className={styles.parent}>
              <div className={styles.div1}>$170</div>
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
  );
};

export default SavingsContainer;
