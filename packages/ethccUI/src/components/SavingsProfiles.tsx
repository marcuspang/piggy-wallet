import { FunctionComponent } from "react";

export type SavingsProfilesType = {
  className?: string;
  avatar1?: string;
};

const SavingsProfiles: FunctionComponent<SavingsProfilesType> = ({
  className = "",
  avatar1,
}) => {
  return (
    <div
      className={`self-stretch flex flex-col items-start justify-start gap-[8px] text-left text-sm text-neutral-700 font-paragraph-small-bold ${className}`}
    >
      <div className="self-stretch flex flex-row items-center justify-between gap-[20px]">
        <div className="flex flex-row items-center justify-start gap-[4px]">
          <img
            className="h-[22.4px] w-[22.4px] relative rounded-7xs-6 overflow-hidden shrink-0 object-cover min-h-[22px]"
            loading="lazy"
            alt=""
            src="/avatar@2x.png"
          />
          <div className="relative leading-[20px] font-medium inline-block min-w-[95px]">
            Matt’s Savings
          </div>
        </div>
        <div className="relative text-xl tracking-[-0.02em] leading-[28px] font-semibold font-heading-mobile-h6-semi-bold text-black-500 inline-block min-w-[76px] whitespace-nowrap">
          $1,800.10
        </div>
      </div>
      <div className="self-stretch flex flex-row items-center justify-between gap-[20px]">
        <div className="flex flex-row items-center justify-start gap-[4px]">
          <img
            className="h-[22.4px] w-[22.4px] relative rounded-7xs-6 overflow-hidden shrink-0 object-cover min-h-[22px]"
            loading="lazy"
            alt=""
            src={avatar1}
          />
          <div className="relative leading-[20px] font-medium inline-block min-w-[96px]">
            Lucy’s Savings
          </div>
        </div>
        <div className="relative text-xl tracking-[-0.02em] leading-[28px] font-semibold font-heading-mobile-h6-semi-bold text-black-500 inline-block min-w-[54px] whitespace-nowrap">
          $1,000
        </div>
      </div>
    </div>
  );
};

export default SavingsProfiles;
