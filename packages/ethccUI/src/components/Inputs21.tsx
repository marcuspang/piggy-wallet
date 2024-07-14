import { FunctionComponent } from "react";

export type Inputs2Type = {
  className?: string;
};

const Inputs2: FunctionComponent<Inputs2Type> = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch rounded-spacing-md bg-whitesmoke flex flex-col items-start justify-start py-1.5 px-[15px] gap-[12px] text-left text-lg text-neutral-700 font-paragraph-small-bold border-[1px] border-solid border-neutral-200 ${className}`}
    >
      <div className="self-stretch flex flex-row items-start justify-between gap-[20px]">
        <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
          <b className="relative leading-[28px]">Weekly Allowance</b>
        </div>
        <div className="relative text-5xl tracking-[-0.02em] leading-[32px] font-semibold font-heading-mobile-h6-semi-bold text-black-500 inline-block min-w-[51px] whitespace-nowrap">
          $340
        </div>
      </div>
      <div className="self-stretch h-px relative bg-neutral-200" />
      <div className="self-stretch flex flex-col items-start justify-start gap-[8px] text-sm">
        <div className="self-stretch flex flex-row items-center justify-between gap-[20px]">
          <div className="flex flex-row items-center justify-start gap-[4px]">
            <img
              className="h-[22.4px] w-[22.4px] relative rounded-7xs-6 overflow-hidden shrink-0 object-cover min-h-[22px]"
              loading="lazy"
              alt=""
              src="/avatar@2x.png"
            />
            <div className="relative leading-[20px] font-medium inline-block min-w-[111px]">
              Matt’s Allowance
            </div>
          </div>
          <div className="flex flex-row items-center justify-start gap-[8px] text-xl text-black-500 font-heading-mobile-h6-semi-bold">
            <div className="relative tracking-[-0.02em] leading-[28px] font-semibold inline-block min-w-[38px] whitespace-nowrap">
              $170
            </div>
            <div className="h-6 w-6 rounded-[21.33px] bg-base-white box-border overflow-hidden shrink-0 flex flex-row items-center justify-center pt-[5.3px] px-[5px] pb-[5.4px] border-[0.7px] border-solid border-neutral-200">
              <img
                className="h-[13.3px] w-[13.3px] relative overflow-hidden shrink-0"
                loading="lazy"
                alt=""
                src="/edit02-1.svg"
              />
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-center justify-between gap-[20px]">
          <div className="flex flex-row items-center justify-start gap-[4px]">
            <img
              className="h-[22.4px] w-[22.4px] relative rounded-7xs-6 overflow-hidden shrink-0 object-cover min-h-[22px]"
              loading="lazy"
              alt=""
              src="/avatar-3@2x.png"
            />
            <div className="relative leading-[20px] font-medium inline-block min-w-[112px]">
              Lucy’s Allowance
            </div>
          </div>
          <div className="flex flex-row items-center justify-start gap-[8px] text-xl text-black-500 font-heading-mobile-h6-semi-bold">
            <div className="relative tracking-[-0.02em] leading-[28px] font-semibold inline-block min-w-[38px] whitespace-nowrap">
              $170
            </div>
            <div className="h-6 w-6 rounded-[21.33px] bg-base-white box-border overflow-hidden shrink-0 flex flex-row items-center justify-center pt-[5.3px] px-[5px] pb-[5.4px] border-[0.7px] border-solid border-neutral-200">
              <img
                className="h-[13.3px] w-[13.3px] relative overflow-hidden shrink-0"
                loading="lazy"
                alt=""
                src="/edit02-1.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inputs2;