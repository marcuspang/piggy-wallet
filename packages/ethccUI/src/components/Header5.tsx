import { FunctionComponent } from "react";

export type Header5Type = {
  className?: string;
  savingsGoals?: string;
};

const Header5: FunctionComponent<Header5Type> = ({
  className = "",
  savingsGoals,
}) => {
  return (
    <section
      className={`self-stretch bg-gray-100 box-border overflow-hidden flex flex-col items-end justify-start pt-3.5 px-0 pb-0 gap-[14px] shrink-0 max-w-full text-center text-base text-black-500 font-single-line-body-base border-b-[1px] border-solid border-neutral-100 ${className}`}
    >
      <div className="w-[262px] hidden flex-row flex-wrap items-center justify-end gap-[8px] text-left text-text-default-default">
        <div className="h-8 rounded-radius-200 bg-text-brand-on-brand flex flex-row items-center justify-center p-2 box-border">
          <div className="self-stretch relative leading-[100%] flex items-center">
            Link
          </div>
        </div>
        <div className="h-8 rounded-radius-200 flex flex-row items-center justify-center p-2 box-border">
          <div className="self-stretch relative leading-[100%] flex items-center">
            Link
          </div>
        </div>
        <div className="h-8 rounded-radius-200 flex flex-row items-center justify-center p-2 box-border">
          <div className="self-stretch relative leading-[100%] flex items-center">
            Link
          </div>
        </div>
        <div className="h-8 rounded-radius-200 flex flex-row items-center justify-center p-2 box-border">
          <div className="self-stretch relative leading-[100%] flex items-center">
            Link
          </div>
        </div>
        <div className="h-8 rounded-radius-200 flex flex-row items-center justify-center p-2 box-border">
          <div className="self-stretch relative leading-[100%] flex items-center">
            Link
          </div>
        </div>
        <div className="h-8 rounded-radius-200 flex flex-row items-center justify-center p-2 box-border">
          <div className="self-stretch relative leading-[100%] flex items-center">
            Link
          </div>
        </div>
      </div>
      <img
        className="w-10 h-10 relative overflow-hidden shrink-0 hidden"
        alt=""
      />
      <img className="w-[172px] h-8 relative hidden" alt="" src="/notch.svg" />
      <div className="self-stretch flex flex-row items-start justify-end py-0 pr-[22px] pl-7 box-border max-w-full text-mid">
        <div className="flex-1 flex flex-row items-end justify-between max-w-full gap-[20px]">
          <div className="w-[54px] rounded-3xl flex flex-row items-start justify-start pt-px px-0 pb-0 box-border">
            <a className="[text-decoration:none] flex-1 relative tracking-[-0.41px] leading-[22px] font-semibold text-[inherit]">
              9:41
            </a>
          </div>
          <div className="w-[77.4px] flex flex-col items-start justify-end pt-0 px-0 pb-[3px] box-border">
            <div className="self-stretch flex flex-row items-end justify-start gap-[7.5px]">
              <img
                className="h-3 w-[18px] relative"
                alt=""
                src="/icon--mobile-signal.svg"
              />
              <img
                className="h-[11.8px] w-[17px] relative"
                alt=""
                src="/wifi.svg"
              />
              <img
                className="self-stretch w-[27.4px] relative max-h-full min-h-[13px]"
                alt=""
                src="/-statusbarbattery.svg"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start max-w-full text-lg font-heading-mobile-h6-semi-bold">
        <div className="flex-1 flex flex-col items-start justify-start gap-[12px] max-w-full">
          <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-6">
            <div className="flex-1 flex flex-row items-start justify-start gap-[8px]">
              <div className="h-scale-07 w-scale-07 rounded-scale-06 overflow-hidden shrink-0 flex flex-row items-center justify-center py-padding-md px-2 box-border">
                <img
                  className="h-6 w-6 relative overflow-hidden shrink-0"
                  loading="lazy"
                  alt=""
                  src="/chevronleft.svg"
                />
              </div>
              <div className="flex-1 flex flex-col items-start justify-start pt-2 px-0 pb-0">
                <div className="self-stretch relative tracking-[-0.02em] leading-[24px] font-medium">
                  {savingsGoals}
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row items-start justify-start py-0 pr-5 pl-0 text-left text-base text-text-neutral-tertiary font-paragraph-small-bold">
            <button className="cursor-pointer [border:none] pt-space-100 px-[39px] pb-0.5 bg-[transparent] rounded-t-radius-100 rounded-b-none flex flex-row items-start justify-start border-b-[1px] border-solid border-brand-500">
              <a className="[text-decoration:none] relative text-base leading-[24px] font-bold font-paragraph-small-bold text-brand-500 text-left inline-block min-w-[52px]">
                See All
              </a>
            </button>
            <div className="rounded-t-radius-100 rounded-b-none flex flex-row items-start justify-start pt-space-100 px-12 pb-0.5 border-b-[1px] border-solid border-border-neutral-tertiary">
              <a className="[text-decoration:none] relative leading-[24px] font-medium text-[inherit] inline-block min-w-[35px]">
                Matt
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-end justify-start gap-[12px] ml-[-59px] text-left text-base text-text-neutral-tertiary font-paragraph-small-bold">
          <div className="flex flex-row items-start justify-end py-0 px-6">
            <div className="h-scale-07 w-scale-07 rounded-scale-06 overflow-hidden shrink-0 flex flex-row items-center justify-center py-padding-md px-2 box-border">
              <img
                className="h-6 w-6 relative overflow-hidden shrink-0"
                loading="lazy"
                alt=""
                src="/plus.svg"
              />
            </div>
          </div>
          <div className="rounded-t-radius-100 rounded-b-none flex flex-row items-start justify-start pt-space-100 px-[47px] pb-0.5 border-b-[1px] border-solid border-border-neutral-tertiary">
            <a className="[text-decoration:none] relative leading-[24px] font-medium text-[inherit] inline-block min-w-[36px]">
              Lucy
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header5;
