import { FunctionComponent } from "react";

export type FrameComponent1Type = {
  className?: string;
  avatar?: string;
  depositReceived?: string;
  dividedIn4SavingGoals?: string;
  detailSeparator?: string;
};

const FrameComponent1: FunctionComponent<FrameComponent1Type> = ({
  className = "",
  avatar,
  depositReceived,
  dividedIn4SavingGoals,
  detailSeparator,
}) => {
  return (
    <div
      className={`self-stretch flex flex-row items-start justify-center max-w-full text-left text-base text-neutral-900 font-paragraph-small-bold ${className}`}
    >
      <div className="flex-1 rounded-spacing-md bg-success-50 box-border flex flex-col items-start justify-center py-1.5 px-[15px] max-w-full border-[1px] border-solid border-success-600">
        <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[8px]">
          <img
            className="h-[22.4px] w-[22.4px] relative rounded-7xs-6 overflow-hidden shrink-0 object-cover"
            alt=""
            src={avatar}
          />
          <div className="flex-1 flex flex-col items-start justify-start py-0 pr-[26px] pl-0 box-border gap-[8px] min-w-[157px]">
            <div className="self-stretch flex flex-col items-start justify-start gap-[4px]">
              <b className="self-stretch relative leading-[24px]">
                {depositReceived}
              </b>
              <div className="self-stretch relative text-sm leading-[20px] font-medium">
                {dividedIn4SavingGoals}
              </div>
            </div>
            <div className="w-[145px] flex flex-row items-center justify-start gap-[4px] text-sm text-neutral-700">
              <div className="h-5 flex-1 relative leading-[20px] font-medium flex items-center">
                View more details
              </div>
              <img
                className="h-6 w-6 relative overflow-hidden shrink-0 object-contain"
                alt=""
                src="/chevronleft@2x.png"
              />
            </div>
          </div>
          <div className="relative text-lg tracking-[-0.02em] leading-[24px] font-semibold font-heading-mobile-h6-semi-bold text-black-500 inline-block min-w-[50px]">
            {detailSeparator}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent1;
