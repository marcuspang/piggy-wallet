import { FunctionComponent } from "react";

export type Inputs3Type = {
  className?: string;
};

const Inputs3: FunctionComponent<Inputs3Type> = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch rounded-spacing-md bg-whitesmoke flex flex-col items-start justify-start py-3.5 px-[15px] gap-[12px] text-left text-lg text-neutral-700 font-paragraph-small-bold border-[1px] border-solid border-neutral-200 ${className}`}
    >
      <div className="self-stretch flex flex-col items-start justify-start gap-[4px]">
        <b className="relative leading-[28px]">Savings Overview</b>
        <div className="self-stretch relative text-25xl tracking-[-0.02em] leading-[48px] font-semibold font-heading-mobile-h6-semi-bold text-black-500 whitespace-nowrap">
          $3,300.10
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
            <div className="relative leading-[20px] font-medium inline-block min-w-[95px]">
              Matt’s Savings
            </div>
          </div>
          <div className="relative text-xl tracking-[-0.02em] leading-[28px] font-semibold font-heading-mobile-h6-semi-bold text-black-500 inline-block min-w-[80px] whitespace-nowrap">
            $2,300.10
          </div>
        </div>
        <div className="self-stretch flex flex-row items-center justify-between gap-[20px]">
          <div className="flex flex-row items-center justify-start gap-[4px]">
            <img
              className="h-[22.4px] w-[22.4px] relative rounded-7xs-6 overflow-hidden shrink-0 object-cover min-h-[22px]"
              loading="lazy"
              alt=""
              src="/avatar-11@2x.png"
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
      <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[8px]">
        <button className="cursor-pointer py-1.5 pr-[38px] pl-10 bg-base-white rounded-radius-200 overflow-hidden flex flex-row items-start justify-start gap-[8px] border-[1px] border-solid border-brand-500">
          <img
            className="h-4 w-4 relative overflow-hidden shrink-0 hidden"
            alt=""
            src="/star3.svg"
          />
          <a className="[text-decoration:none] relative text-base leading-[24px] font-medium font-paragraph-small-bold text-neutral-900 text-left inline-block min-w-[80px]">
            Add Funds
          </a>
          <img
            className="h-4 w-4 relative overflow-hidden shrink-0 hidden"
            alt=""
            src="/x3.svg"
          />
        </button>
        <button className="cursor-pointer py-1.5 pr-[18px] pl-[19px] bg-base-white rounded-radius-200 overflow-hidden flex flex-row items-start justify-start gap-[8px] border-[1px] border-solid border-brand-500">
          <img
            className="h-4 w-4 relative overflow-hidden shrink-0 hidden"
            alt=""
            src="/star4.svg"
          />
          <div className="relative text-base leading-[24px] font-medium font-paragraph-small-bold text-neutral-900 text-left inline-block min-w-[121px]">
            Withdraw Funds
          </div>
          <img
            className="h-4 w-4 relative overflow-hidden shrink-0 hidden"
            alt=""
            src="/x4.svg"
          />
        </button>
      </div>
    </div>
  );
};

export default Inputs3;
