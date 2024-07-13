import { FunctionComponent } from "react";
import styles from "./SaturdayInput.module.css";

export type SaturdayInputType = {
  className?: string;
  prop?: string;
  walkTheDog?: string;
  earned2?: string;
};

const SaturdayInput: FunctionComponent<SaturdayInputType> = ({
  className = "",
  prop,
  walkTheDog,
  earned2,
}) => {
  return (
    <div className={[styles.saturdayInput, className].join(" ")}>
      <div className={styles.inputs}>
        <img className={styles.icon} loading="lazy" alt="" src={prop} />
      </div>
      <div className={styles.inputs1}>
        <div className={styles.saturdayName}>
          <div className={styles.saturdayTask}>
            <div className={styles.walkTheDog}>{walkTheDog}</div>
            <div className={styles.earned2}>{earned2}</div>
          </div>
          <div className={styles.checkbox}>
            <img className={styles.checkIcon} alt="" src="/check1.svg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SaturdayInput;
