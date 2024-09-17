import { FunctionComponent } from "react";

export type SavingsOverviewType = {
  className?: string;
};

const SavingsOverview: FunctionComponent<SavingsOverviewType> = ({
  className = "",
}) => {
  return (
    <div
      className={`self-stretch flex flex-row items-start justify-start py-0 px-4 box-border max-w-full text-left text-lg text-neutral-700 font-paragraph-small-bold ${className}`}
    >
      <div className="flex-1 rounded-spacing-md bg-whitesmoke box-border flex flex-col items-start justify-start py-3.5 px-[15px] relative gap-[12px] max-w-full border-[1px] border-solid border-neutral-200">
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
        <div className="w-full !m-[0] absolute top-[-93px] right-[0px] left-[0px] rounded-spacing-md bg-base-white box-border flex flex-row flex-wrap items-start justify-start py-[22px] px-[23px] gap-[24px] min-w-[240px] z-[3] text-5xl text-neutral-900 border-[1px] border-solid border-border-default-default">
          <img
            className="h-8 w-8 relative overflow-hidden shrink-0 hidden"
            alt=""
            src="/info.svg"
          />
          <div className="flex-1 flex flex-col items-start justify-start gap-[24px] min-w-[160px]">
            <div className="self-stretch flex flex-col items-start justify-start gap-[12px]">
              <h3 className="m-0 self-stretch relative text-inherit tracking-[-0.02em] leading-[32px] font-semibold font-heading-mobile-h6-semi-bold text-center">
                Enter amount to send
              </h3>
              <div className="self-stretch flex flex-col items-start justify-start py-0 pr-[89px] pl-0 gap-[8px] text-base text-neutral-700">
                <div className="flex flex-row items-center justify-center gap-[8px]">
                  <div className="relative leading-[24px] font-medium inline-block min-w-[61px]">
                    Send to:
                  </div>
                  <div className="flex flex-row items-center justify-start gap-[4px]">
                    <img
                      className="h-[22.4px] w-[22.4px] relative rounded-7xs-6 overflow-hidden shrink-0 object-cover"
                      alt=""
                      src="/avatar@2x.png"
                    />
                    <div className="relative leading-[24px] font-medium inline-block min-w-[108px]">
                      Matt’s Savings
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-center justify-start gap-[8px]">
                  <div className="relative leading-[24px] font-medium">
                    Balance available:
                  </div>
                  <div className="relative leading-[24px] font-medium text-center inline-block min-w-[79px] whitespace-nowrap">
                    $18,000.50
                  </div>
                </div>
              </div>
              <div className="self-stretch rounded-radius-200 bg-base-white box-border overflow-hidden flex flex-row items-center justify-start py-2.5 px-[15px] gap-[8px] min-w-[240px] text-lg text-neutral-400 border-[1px] border-solid border-border-default-default">
                <div className="flex-1 relative leading-[28px] font-medium inline-block overflow-hidden text-ellipsis whitespace-nowrap min-w-[36px]">
                  $0.00
                </div>
                <div className="w-10 rounded-spacing-xxx-huge bg-base-white box-border overflow-hidden shrink-0 flex flex-row items-center justify-center py-0 px-[7px] gap-[8px] text-xs text-neutral-900 border-[1px] border-solid border-brand-500">
                  <img
                    className="h-4 w-4 relative overflow-hidden shrink-0 hidden"
                    alt=""
                    src="/star.svg"
                  />
                  <div className="relative leading-[20px] font-medium inline-block min-w-[24px]">
                    Max
                  </div>
                  <img
                    className="h-4 w-4 relative overflow-hidden shrink-0 hidden"
                    alt=""
                    src="/x.svg"
                  />
                </div>
              </div>
            </div>
            <button className="cursor-pointer py-2.5 px-5 bg-border-default-default self-stretch rounded-radius-200 overflow-hidden flex flex-row items-center justify-center gap-[8px] border-[1px] border-solid border-border-disabled-default">
              <img
                className="h-4 w-4 relative overflow-hidden shrink-0 hidden"
                alt=""
                src="/star6.svg"
              />
              <b className="relative text-base leading-[24px] inline-block font-paragraph-small-bold text-border-disabled-default text-left min-w-[121px]">{`Confirm & Send`}</b>
              <img
                className="h-4 w-4 relative overflow-hidden shrink-0 hidden"
                alt=""
                src="/x7.svg"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SavingsOverview;
