import { FunctionComponent } from "react";
import ActiveGoalItem from "./ActiveGoalItem";

export type UniversitySavingsType = {
  className?: string;
};

const UniversitySavings: FunctionComponent<UniversitySavingsType> = ({
  className = "",
}) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-start pt-0 px-4 pb-4 box-border max-w-full shrink-0 ${className}`}
    >
      <div className="flex-1 flex flex-col items-start justify-start gap-[8px] shrink-0 max-w-full">
        <ActiveGoalItem
          prop="/-4.svg"
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
          prop="/-4.svg"
          campingTrip="University"
          avatar="/avatar-32@2x.png"
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
