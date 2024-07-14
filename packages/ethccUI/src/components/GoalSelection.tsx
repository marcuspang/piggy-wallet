import { FunctionComponent } from "react";

export type GoalSelectionType = {
  className?: string;
};

const GoalSelection: FunctionComponent<GoalSelectionType> = ({
  className = "",
}) => {
  return (
    <div
      className={`self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[42px] box-border max-w-full mt-[-97px] text-center text-5xl text-neutral-900 font-heading-mobile-h6-semi-bold ${className}`}
    >
      <div className="flex-1 rounded-spacing-md bg-base-white box-border flex flex-row flex-wrap items-start justify-start py-[22px] px-[23px] gap-[24px] min-w-[240px] shrink-0 max-w-full z-[3] border-[1px] border-solid border-border-default-default">
        <img
          className="h-8 w-8 relative overflow-hidden shrink-0 hidden"
          alt=""
          src="/info.svg"
        />
        <div className="flex-1 flex flex-col items-start justify-start gap-[24px] min-w-[160px]">
          <h2 className="m-0 self-stretch relative text-inherit tracking-[-0.02em] leading-[32px] font-semibold font-inherit">
            <p className="m-0">Select one of your children</p>
            <p className="m-0">to set a new savings goal</p>
          </h2>
          <div className="self-stretch flex flex-col items-start justify-start gap-[12px] text-left text-lg text-neutral-700 font-paragraph-small-bold">
            <div className="self-stretch flex flex-row items-center justify-between gap-[20px]">
              <div className="flex flex-row items-center justify-start gap-[4px]">
                <img
                  className="h-12 w-12 relative rounded-3xs-6 overflow-hidden shrink-0 object-cover min-h-[48px]"
                  loading="lazy"
                  alt=""
                  src="/avatar-17@2x.png"
                />
                <div className="flex flex-col items-start justify-start">
                  <div className="relative leading-[28px] font-medium inline-block min-w-[39px]">
                    Matt
                  </div>
                  <div className="relative text-sm leading-[20px] font-medium inline-block min-w-[57px] whitespace-nowrap">
                    $1,800.10
                  </div>
                </div>
              </div>
              <img
                className="h-6 w-6 relative rounded-14979xl-5 overflow-hidden shrink-0"
                loading="lazy"
                alt=""
                src="/radio.svg"
              />
            </div>
            <div className="self-stretch flex flex-row items-center justify-between gap-[20px]">
              <div className="flex flex-row items-center justify-start gap-[4px]">
                <img
                  className="h-12 w-12 relative rounded-3xs-6 overflow-hidden shrink-0 object-cover min-h-[48px]"
                  loading="lazy"
                  alt=""
                  src="/avatar-44@2x.png"
                />
                <div className="flex flex-col items-start justify-start">
                  <div className="relative leading-[28px] font-medium inline-block min-w-[40px]">
                    Lucy
                  </div>
                  <div className="relative text-sm leading-[20px] font-medium inline-block min-w-[42px] whitespace-nowrap">
                    $1,000
                  </div>
                </div>
              </div>
              <img
                className="h-6 w-6 relative rounded-14979xl-5 overflow-hidden shrink-0"
                loading="lazy"
                alt=""
                src="/radio-1.svg"
              />
            </div>
          </div>
          <button className="cursor-pointer py-2.5 px-5 bg-brand-500 self-stretch rounded-radius-200 overflow-hidden flex flex-row items-center justify-center gap-[8px] border-[1px] border-solid border-brand-600">
            <img
              className="h-4 w-4 relative overflow-hidden shrink-0 hidden"
              alt=""
              src="/star7.svg"
            />
            <b className="relative text-base leading-[24px] inline-block font-paragraph-small-bold text-text-brand-on-brand text-left min-w-[69px]">
              Continue
            </b>
            <img
              className="h-4 w-4 relative overflow-hidden shrink-0 hidden"
              alt=""
              src="/x8.svg"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default GoalSelection;
