import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./Inputs2.module.css";

export type Inputs2Type = {
  className?: string;

  /** Style props */
  propFlex?: CSSProperties["flex"];
};

const Inputs2: FunctionComponent<Inputs2Type> = ({
  className = "",
  propFlex,
}) => {
  const inputsStyle: CSSProperties = useMemo(() => {
    return {
      flex: propFlex,
    };
  }, [propFlex]);

  return (
    <div className={[styles.inputs, className].join(" ")} style={inputsStyle}>
      <div className={styles.withdrawHistory}>
        <img className={styles.avatarIcon} alt="" src="/avatar-4@2x.png" />
        <div className={styles.withdrawItem}>
          <b className={styles.withdrawal}>{`Withdrawal `}</b>
          <div className={styles.withdrawDetail}>
            <img className={styles.icon} alt="" src="/-4.svg" />
            <div className={styles.substractedFromFortniteYearContainer}>
              <span>
                <p className={styles.substractedFrom}>Substracted from</p>
                <p
                  className={styles.fortniteYearlySubscription}
                >{`Fortnite Yearly Subscription `}</p>
              </span>
            </div>
          </div>
        </div>
        <div className={styles.withdrawSpacer}>- $144</div>
      </div>
    </div>
  );
};

export default Inputs2;
