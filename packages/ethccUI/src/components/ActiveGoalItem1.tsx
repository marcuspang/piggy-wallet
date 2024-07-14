import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type ActiveGoalItem1Type = {
  className?: string;
  mattsGeneralSavings?: string;
  avatar?: string;
  goalSeparator?: string;
  autosave50?: string;

  /** Style props */
  propMarginTop?: CSSProperties["marginTop"];
};

const ActiveGoalItem1: FunctionComponent<ActiveGoalItem1Type> = ({
  className = "",
  mattsGeneralSavings,
  avatar,
  goalSeparator,
  autosave50,
  propMarginTop,
}) => {
  const activeGoalItemStyle: CSSProperties = useMemo(() => {
    return {
      marginTop: propMarginTop,
    };
  }, [propMarginTop]);

  return (
    <div
      className={`self-stretch flex flex-row items-start justify-between py-0 px-0 gap-[0px] [row-gap:20px] text-left text-base text-neutral-900 font-paragraph-small-bold ${className}`}
      style={activeGoalItemStyle}
    >
      <div className="rounded-tl-spacing-md rounded-tr-none rounded-br-none rounded-bl-spacing-md bg-brand-50 flex flex-col items-center justify-center py-5 px-[21px] border-t-[1px] border-solid border-neutral-200 border-b-[1px] border-l-[1px]">
        <img
          className="w-12 h-12 relative"
          loading="lazy"
          alt=""
          src="/-22.svg"
        />
      </div>
      <div className="w-[271px] rounded-tl-none rounded-tr-spacing-md rounded-br-spacing-md rounded-bl-none bg-whitesmoke box-border flex flex-col items-start justify-center py-1.5 px-[15px] border-[1px] border-solid border-neutral-200">
        <div className="self-stretch flex flex-col items-start justify-start">
          <div className="self-stretch flex flex-row items-center justify-between gap-[20px]">
            <div className="relative leading-[24px] font-medium">
              {mattsGeneralSavings}
            </div>
            <img
              className="h-[22.4px] w-[22.4px] relative rounded-7xs-6 overflow-hidden shrink-0 object-contain"
              alt=""
              src={avatar}
            />
          </div>
          <div className="self-stretch relative text-5xl tracking-[-0.02em] leading-[32px] font-semibold font-heading-mobile-h6-semi-bold text-black-500 whitespace-nowrap">
            {goalSeparator}
          </div>
          <div className="relative text-sm leading-[20px] text-neutral-800 inline-block min-w-[88px]">
            {autosave50}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActiveGoalItem1;
