import { FunctionComponent } from "react";

export type Inputs5Type = {
  className?: string;
};

const Inputs5: FunctionComponent<Inputs5Type> = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch rounded-spacing-md bg-whitesmoke flex flex-col items-start justify-start py-3.5 px-[15px] gap-[12px] shrink-0 text-left text-lg text-neutral-700 font-paragraph-small-bold border-[1px] border-solid border-neutral-200 ${className}`}
    >
      <div className="self-stretch flex flex-col items-start justify-start gap-[4px]">
        <b className="relative leading-[28px]">Savings Overview</b>
        <div className="self-stretch relative text-25xl tracking-[-0.02em] leading-[48px] font-semibold font-heading-mobile-h6-semi-bold text-black-500 whitespace-nowrap">
          $2,800.10
        </div>
      </div>
      <div className="self-stretch h-px relative bg-neutral-200" />
      <div className="self-stretch flex flex-col items-start justify-start gap-[8px] text-sm">
        <div className="self-stretch flex flex-row items-center justify-between gap-[20px]">
          <div className="flex flex-row items-center justify-start gap-[4px]">
            <input
              className="m-0 h-[22.4px] w-[22.4px] relative rounded-7xs-6 overflow-hidden shrink-0 min-h-[22px]"
              type="checkbox"
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
            <input
              className="m-0 h-[22.4px] w-[22.4px] relative shadow-[0px_0.7px_2.8px_rgba(12,_12,_13,_0.1),_0px_0.7px_2.8px_rgba(12,_12,_13,_0.05)] rounded-7xs-6 overflow-hidden shrink-0 min-h-[22px]"
              type="checkbox"
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
    </div>
  );
};

export default Inputs5;
