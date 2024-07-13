import { FunctionComponent } from "react";
import ActiveGoalItem from "./ActiveGoalItem";
import styles from "./UniversitySavings.module.css";

export type UniversitySavingsType = {
  className?: string;
};

const UniversitySavings: FunctionComponent<UniversitySavingsType> = ({
  className = "",
}) => {
  return (
    <section className={[styles.universitySavings, className].join(" ")}>
      <div className={styles.savingsContentParent}>
        <ActiveGoalItem
          prop="/-41.svg"
          campingTrip="University"
          avatar="/avatar-2@2x.png"
          prop1="$500.03"
          autosave5="Autosave $100"
          goal200="Goal $250,000"
          propAlignSelf="stretch"
          propWidth="unset"
          propMarginLeft="unset"
        />
        <ActiveGoalItem
          prop="/-41.svg"
          campingTrip="University"
          avatar="/avatar-33@2x.png"
          prop1="$500.03"
          autosave5="Autosave $100"
          goal200="Goal $250,000"
          propAlignSelf="stretch"
          propWidth="unset"
          propMarginLeft="unset"
        />
      </div>
    </section>
  );
};

export default UniversitySavings;
