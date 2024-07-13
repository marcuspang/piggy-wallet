import { FunctionComponent } from "react";
import styles from "./Profile.module.css";

export type ProfileType = {
  className?: string;
};

const Profile: FunctionComponent<ProfileType> = ({ className = "" }) => {
  return (
    <div className={[styles.profile, className].join(" ")}>
      <div className={styles.inputs}>
        <div className={styles.welcomeMessage}>
          <a className={styles.welcomeBackMatt}>Welcome back, Matt!</a>
          <img
            className={styles.avatarIcon}
            loading="lazy"
            alt=""
            src="/avatar@2x.png"
          />
          <div className={styles.iconButton}>
            <img className={styles.edit02Icon} alt="" src="/edit02.svg" />
          </div>
        </div>
        <div className={styles.savings}>
          <div className={styles.savingsLabel}>
            <b className={styles.yourSavings}>Your Savings</b>
            <div className={styles.iconButton1}>
              <img className={styles.edit02Icon1} alt="" src="/edit02.svg" />
            </div>
          </div>
          <div className={styles.savingsAmount}>
            <div className={styles.savingsValue}>$1,800.10</div>
            <div className={styles.iconButton2}>
              <img className={styles.edit02Icon2} alt="" src="/edit02.svg" />
            </div>
            <div className={styles.button}>
              <img className={styles.starIcon} alt="" src="/star.svg" />
              <div className={styles.button1}>History</div>
              <img className={styles.xIcon} alt="" src="/x2.svg" />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.inputs1}>
        <div className={styles.allowanceLabel}>
          <div className={styles.weeklyAllowance}>Weekly Allowance</div>
          <div className={styles.allowanceValue}>$170</div>
        </div>
      </div>
      <button className={styles.button2}>
        <img className={styles.starIcon1} alt="" src="/star1.svg" />
        <b className={styles.button3}>Receive Money</b>
        <img className={styles.xIcon1} alt="" src="/x1.svg" />
      </button>
    </div>
  );
};

export default Profile;
