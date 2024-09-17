import { FunctionComponent } from "react";
import SavingsProfiles from "./SavingsProfiles";

export type SavingsType = {
  className?: string;
};

const Savings: FunctionComponent<SavingsType> = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-start py-0 px-4 box-border max-w-full shrink-0 text-left text-lg text-neutral-700 font-paragraph-small-bold ${className}`}
    >
      <div className="flex-1 flex flex-col items-start justify-start gap-[12px] shrink-0 max-w-full">
        <div className="self-stretch rounded-spacing-md bg-whitesmoke flex flex-col items-start justify-start py-3.5 px-[15px] gap-[12px] border-[1px] border-solid border-neutral-200">
          <div className="self-stretch flex flex-col items-start justify-start gap-[4px]">
            <b className="relative leading-[28px]">Savings Overview</b>
            <div className="self-stretch relative text-25xl tracking-[-0.02em] leading-[48px] font-semibold font-heading-mobile-h6-semi-bold text-black-500 whitespace-nowrap">
              $2,800.10
            </div>
          </div>
          <div className="self-stretch h-px relative bg-neutral-200" />
          <SavingsProfiles avatar1="/avatar-112@2x.png" />
          <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[8px]">
            <button className="cursor-pointer py-1.5 pr-[38px] pl-10 bg-base-white rounded-radius-200 overflow-hidden flex flex-row items-start justify-start gap-[8px] border-[1px] border-solid border-brand-500">
              <img
                className="h-4 w-4 relative overflow-hidden shrink-0 hidden"
                alt=""
                src="/star3.svg"
              />
              <div className="relative text-base leading-[24px] font-medium font-paragraph-small-bold text-neutral-900 text-left inline-block min-w-[80px]">
                Add Funds
              </div>
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
        <div className="self-stretch rounded-spacing-md bg-whitesmoke flex flex-col items-start justify-start py-1.5 px-[15px] gap-[12px] border-[1px] border-solid border-neutral-200">
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
      </div>
    </section>
  );
};

export default Savings;
