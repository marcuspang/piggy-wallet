import { FunctionComponent } from "react";

export type ContentPaneType = {
  className?: string;
};

const ContentPane: FunctionComponent<ContentPaneType> = ({
  className = "",
}) => {
  return (
    <div
      className={`self-stretch flex flex-col items-start justify-start gap-[12px] text-left text-lg text-neutral-700 font-paragraph-small-bold ${className}`}
    >
      <div className="self-stretch rounded-spacing-md bg-whitesmoke flex flex-col items-start justify-start py-3.5 px-[15px] gap-[12px] border-[1px] border-solid border-neutral-200">
        <div className="self-stretch flex flex-row items-center justify-between gap-[20px]">
          <a className="[text-decoration:none] relative leading-[28px] font-bold text-[inherit]">
            Welcome back, Matt!
          </a>
          <img
            className="h-icon-large w-icon-large relative rounded-radius-full overflow-hidden shrink-0 object-cover"
            loading="lazy"
            alt=""
            src="/avatar1@2x.png"
          />
          <div className="h-9 w-9 rounded-scale-06 overflow-hidden shrink-0 hidden flex-row items-center justify-center p-2 box-border">
            <img
              className="h-5 w-5 relative overflow-hidden shrink-0"
              alt=""
              src="/edit02.svg"
            />
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[4px]">
          <div className="self-stretch flex flex-row items-center justify-start gap-[16px]">
            <b className="relative leading-[28px] inline-block min-w-[112px]">
              Your Savings
            </b>
            <div className="h-9 w-9 rounded-scale-06 overflow-hidden shrink-0 hidden flex-row items-center justify-center p-2 box-border">
              <img
                className="h-5 w-5 relative overflow-hidden shrink-0"
                alt=""
                src="/edit02.svg"
              />
            </div>
          </div>
          <div className="self-stretch flex flex-row flex-wrap items-center justify-start gap-[12px] text-25xl text-black-500 font-heading-mobile-h6-semi-bold">
            <div className="flex-1 relative tracking-[-0.02em] leading-[48px] font-semibold inline-block min-w-[131px] whitespace-nowrap">
              $1,800.10
            </div>
            <div className="h-9 w-9 rounded-scale-06 overflow-hidden shrink-0 hidden flex-row items-center justify-center p-2 box-border">
              <img
                className="h-5 w-5 relative overflow-hidden shrink-0"
                alt=""
                src="/edit02.svg"
              />
            </div>
            <button className="cursor-pointer py-1.5 px-[7px] bg-base-white w-[70px] rounded-radius-200 box-border overflow-hidden shrink-0 flex flex-row items-center justify-center gap-[8px] border-[1px] border-solid border-brand-500">
              <img
                className="h-4 w-4 relative overflow-hidden shrink-0 hidden"
                alt=""
                src="/star.svg"
              />
              <div className="relative text-base leading-[24px] font-medium font-paragraph-small-bold text-neutral-900 text-left inline-block min-w-[54px]">
                History
              </div>
              <img
                className="h-4 w-4 relative overflow-hidden shrink-0 hidden"
                alt=""
                src="/x.svg"
              />
            </button>
          </div>
        </div>
      </div>
      <div className="self-stretch rounded-spacing-md bg-whitesmoke flex flex-col items-start justify-center py-1.5 px-[15px] text-base border-[1px] border-solid border-neutral-200">
        <div className="self-stretch flex flex-row items-center justify-between gap-[20px]">
          <div className="relative leading-[24px] font-medium">
            Weekly Allowance
          </div>
          <div className="relative text-5xl tracking-[-0.02em] leading-[32px] font-semibold font-heading-mobile-h6-semi-bold text-black-500 inline-block min-w-[46px] whitespace-nowrap">
            $170
          </div>
        </div>
      </div>
      <button className="cursor-pointer py-2.5 px-5 bg-brand-500 self-stretch rounded-radius-200 overflow-hidden flex flex-row items-center justify-center gap-[8px] border-[1px] border-solid border-brand-600">
        <img
          className="h-4 w-4 relative overflow-hidden shrink-0 hidden"
          alt=""
          src="/star7.svg"
        />
        <b className="relative text-base leading-[24px] font-paragraph-small-bold text-text-brand-on-brand text-left">
          Add Money to Your Piggy
        </b>
        <img
          className="h-4 w-4 relative overflow-hidden shrink-0 hidden"
          alt=""
          src="/x8.svg"
        />
      </button>
    </div>
  );
};

export default ContentPane;
