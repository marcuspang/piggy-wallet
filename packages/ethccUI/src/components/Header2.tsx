import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type Header2Type = {
  className?: string;

  /** Style props */
  navigationPillListAlignSelf?: CSSProperties["alignSelf"];
  navigationPillListFlex?: CSSProperties["flex"];
};

const Header2: FunctionComponent<Header2Type> = ({
  className = "",
  navigationPillListAlignSelf,
  navigationPillListFlex,
}) => {
  const headerStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: navigationPillListAlignSelf,
      flex: navigationPillListFlex,
    };
  }, [navigationPillListAlignSelf, navigationPillListFlex]);

  return (
    <section
      className={`self-stretch bg-gray-100 box-border overflow-hidden flex flex-col items-end justify-start pt-3.5 px-0 pb-0 gap-[24px] max-w-full text-left text-base text-text-default-default font-single-line-body-base border-b-[1px] border-solid border-neutral-100 ${className}`}
      style={headerStyle}
    >
      <div className="w-[262px] hidden flex-row flex-wrap items-center justify-end gap-[8px]">
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
      <div className="self-stretch flex flex-row items-start justify-end py-0 pr-[22px] pl-7 box-border max-w-full text-center text-mid text-black-500">
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
      <div className="self-stretch flex flex-col items-start justify-start gap-[24px] text-lg text-neutral-700 font-paragraph-small-bold">
        <div className="self-stretch flex flex-col items-start justify-start py-0 px-spacing-md gap-[12px]">
          <div className="self-stretch rounded-spacing-md flex flex-col items-start justify-start">
            <div className="self-stretch flex flex-col items-start justify-start gap-[4px]">
              <a className="[text-decoration:none] relative leading-[28px] font-bold text-[inherit] inline-block min-w-[115px]">
                Your Balance
              </a>
              <div className="self-stretch flex flex-row flex-wrap items-center justify-start gap-[12px] text-25xl text-black-500 font-heading-mobile-h6-semi-bold">
                <div className="flex-1 relative tracking-[-0.02em] leading-[48px] font-semibold inline-block min-w-[154px] whitespace-nowrap">
                  $18,000.50
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
                  <a className="[text-decoration:none] relative text-base leading-[24px] font-medium font-paragraph-small-bold text-neutral-900 text-left inline-block min-w-[54px]">
                    History
                  </a>
                  <img
                    className="h-4 w-4 relative overflow-hidden shrink-0 hidden"
                    alt=""
                    src="/x.svg"
                  />
                </button>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[8px]">
            <button className="cursor-pointer py-2.5 px-[57px] bg-brand-500 rounded-radius-200 overflow-hidden flex flex-row items-center justify-center gap-[8px] border-[1px] border-solid border-brand-600">
              <img
                className="h-4 w-4 relative overflow-hidden shrink-0 hidden"
                alt=""
                src="/star1.svg"
              />
              <b className="relative text-base leading-[24px] inline-block font-paragraph-small-bold text-text-brand-on-brand text-left min-w-[60px]">
                Deposit
              </b>
              <img
                className="h-4 w-4 relative overflow-hidden shrink-0 hidden"
                alt=""
                src="/x1.svg"
              />
            </button>
            <button className="cursor-pointer py-2.5 px-[68px] bg-brand-500 rounded-radius-200 overflow-hidden flex flex-row items-center justify-center gap-[8px] border-[1px] border-solid border-brand-600">
              <img
                className="h-4 w-4 relative overflow-hidden shrink-0 hidden"
                alt=""
                src="/star2.svg"
              />
              <b className="relative text-base leading-[24px] inline-block font-paragraph-small-bold text-text-brand-on-brand text-left min-w-[39px]">
                Send
              </b>
              <img
                className="h-4 w-4 relative overflow-hidden shrink-0 hidden"
                alt=""
                src="/x2.svg"
              />
            </button>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-px [row-gap:20px] text-base text-text-neutral-tertiary">
          <div className="rounded-t-radius-100 rounded-b-none flex flex-row items-center justify-center pt-space-100 px-[39px] pb-0.5 text-brand-500 border-b-[1px] border-solid border-brand-500">
            <a className="[text-decoration:none] relative leading-[24px] font-bold text-[inherit] inline-block min-w-[52px]">
              See All
            </a>
          </div>
          <div className="rounded-t-radius-100 rounded-b-none flex flex-row items-center justify-center pt-space-100 px-12 pb-0.5 border-b-[1px] border-solid border-border-neutral-tertiary">
            <div className="relative leading-[24px] font-medium inline-block min-w-[35px]">
              Matt
            </div>
          </div>
          <div className="rounded-t-radius-100 rounded-b-none flex flex-row items-center justify-center pt-space-100 px-[47px] pb-0.5 border-b-[1px] border-solid border-border-neutral-tertiary">
            <div className="relative leading-[24px] font-medium inline-block min-w-[36px]">
              Lucy
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header2;
