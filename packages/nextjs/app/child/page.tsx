import { FunctionComponent } from "react";
import ContentPane from "../../components/ContentPane";
import FrameComponent1 from "../../components/FrameComponent1";
import NavBarCoach from "../../components/NavBarCoach";

const ChildsHome: FunctionComponent = () => {
  return (
    <div className="w-full h-[840px] relative rounded-xl bg-base-white overflow-hidden flex flex-col items-end justify-start pt-3.5 px-4 pb-[805px] box-border gap-[24px] leading-[normal] tracking-[normal] text-center text-mid text-black-500 font-single-line-body-base">
      <img
        className="w-[172px] h-8 relative hidden z-[0]"
        alt=""
        src="/notch.svg"
      />
      <div className="self-stretch flex flex-row items-start justify-end py-0 pr-1.5 pl-3 box-border max-w-full shrink-0">
        <div className="flex-1 flex flex-row items-end justify-between shrink-0 max-w-full gap-[20px]">
          <div className="w-[54px] rounded-3xl flex flex-row items-start justify-start pt-px px-0 pb-0 box-border">
            <a className="[text-decoration:none] flex-1 relative tracking-[-0.41px] leading-[22px] font-semibold text-[inherit]">
              9:41
            </a>
          </div>
          <div className="w-[77.4px] flex flex-col items-start justify-end pt-0 px-0 pb-[3px] box-border">
            <div className="self-stretch flex flex-row items-end justify-start gap-[7.5px]">
              <img
                className="h-3 w-[18px] relative"
                loading="lazy"
                alt=""
                src="/icon--mobile-signal.svg"
              />
              <img
                className="h-[11.8px] w-[17px] relative"
                loading="lazy"
                alt=""
                src="/wifi.svg"
              />
              <img
                className="self-stretch w-[27.4px] relative max-h-full min-h-[13px]"
                loading="lazy"
                alt=""
                src="/-statusbarbattery.svg"
              />
            </div>
          </div>
        </div>
      </div>
      <form className="m-0 self-stretch flex flex-col items-start justify-start gap-[24px] shrink-0">
        <ContentPane />
        <FrameComponent1 />
        <div className="self-stretch flex flex-col items-start justify-start gap-[12px]">
          <div className="self-stretch flex flex-row items-center justify-start gap-[16px]">
            <b className="relative text-lg leading-[28px] inline-block font-paragraph-small-bold text-black-500 text-left min-w-[113px]">
              Saving Goals
            </b>
            <div className="h-9 w-9 rounded-scale-06 overflow-hidden shrink-0 hidden flex-row items-center justify-center p-2 box-border">
              <img
                className="h-5 w-5 relative overflow-hidden shrink-0"
                alt=""
                src="/edit02.svg"
              />
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
            <div className="self-stretch flex flex-row items-start justify-between py-0 px-0 gap-[0px] [row-gap:20px]">
              <div className="rounded-tl-spacing-md rounded-tr-none rounded-br-none rounded-bl-spacing-md bg-brand-50 flex flex-col items-center justify-center py-5 px-[21px] border-t-[1px] border-solid border-neutral-200 border-b-[1px] border-l-[1px]">
                <img className="w-12 h-12 relative" alt="" src="/-22.svg" />
              </div>
              <div className="w-[271px] rounded-tl-none rounded-tr-spacing-md rounded-br-spacing-md rounded-bl-none bg-whitesmoke box-border flex flex-col items-start justify-center py-1.5 px-[15px] border-[1px] border-solid border-neutral-200">
                <div className="self-stretch flex flex-col items-start justify-start">
                  <div className="self-stretch relative text-base leading-[24px] font-medium font-paragraph-small-bold text-neutral-900 text-left">
                    General Savings
                  </div>
                  <div className="self-stretch relative text-5xl tracking-[-0.02em] leading-[32px] font-semibold font-heading-mobile-h6-semi-bold text-black-500 text-left whitespace-nowrap">
                    $800.10
                  </div>
                  <div className="relative text-sm leading-[20px] font-paragraph-small-bold text-neutral-800 text-left inline-block min-w-[88px]">
                    Autosave $50
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch h-[88px] rounded-spacing-md bg-whitesmoke box-border flex flex-col items-start justify-center py-spacing-x-sm px-[15px] border-[1px] border-solid border-neutral-200">
              <div className="self-stretch flex-1 flex flex-col items-center justify-start gap-[8px]">
                <div className="relative text-base leading-[24px] font-medium font-paragraph-small-bold text-neutral-700 text-left">
                  You have 3 more saving goals
                </div>
                <div className="self-stretch flex-1 rounded-radius-200 bg-base-white overflow-hidden flex flex-row items-center justify-center py-space-200 px-5 gap-[8px] border-[1px] border-solid border-brand-500">
                  <img
                    className="h-4 w-4 relative overflow-hidden shrink-0 hidden"
                    alt=""
                    src="/star5.svg"
                  />
                  <div className="self-stretch w-[152px] relative text-base leading-[24px] font-medium font-paragraph-small-bold text-neutral-900 text-left inline-block">
                    See All Saving Goals
                  </div>
                  <img
                    className="h-4 w-4 relative overflow-hidden shrink-0 hidden"
                    alt=""
                    src="/x5.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
      <NavBarCoach />
    </div>
  );
};

export default ChildsHome;
