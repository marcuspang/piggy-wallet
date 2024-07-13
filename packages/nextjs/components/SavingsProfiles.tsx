import { FunctionComponent } from "react";
import styles from "./SavingsProfiles.module.css";

export type SavingsProfilesType = {
  className?: string;
  avatar1?: string;
};

const SavingsProfiles: FunctionComponent<SavingsProfilesType> = ({
  className = "",
  avatar1,
}) => {
  return (
    <div className={[styles.savingsProfiles, className].join(" ")}>
      <div className={styles.profilesRow}>
        <div className={styles.profilePair}>
          <img
            className={styles.avatarIcon}
            loading="lazy"
            alt=""
            src="/avatar1@2x.png"
          />
          <div className={styles.mattsSavings}>Matt’s Savings</div>
        </div>
        <div className={styles.profileDivider}>$1,800.10</div>
      </div>
      <div className={styles.profilesRow1}>
        <div className={styles.avatarParent}>
          <img
            className={styles.avatarIcon1}
            loading="lazy"
            alt=""
            src={avatar1}
          />
          <div className={styles.lucysSavings}>Lucy’s Savings</div>
        </div>
        <div className={styles.div}>$1,000</div>
      </div>
    </div>
  );
};

export default SavingsProfiles;
