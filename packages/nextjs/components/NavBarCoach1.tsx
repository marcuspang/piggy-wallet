import { FunctionComponent } from "react";

export type NavBarCoach1Type = {
  className?: string;
};

const NavBarCoach1: FunctionComponent<NavBarCoach1Type> = ({
  className = "",
}) => {
  return (
    <section
      className={`w-full h-[86px] !m-[0] absolute right-[0px] bottom-[0px] left-[0px] bg-gray-100 flex flex-col items-end justify-start pt-[79px] px-4 pb-[3px] box-border gap-[9px] z-[1] text-center text-xs text-brand-green-500 font-text-xs-light ${className}`}
    >
      <div className="self-stretch hidden flex-row items-start justify-between gap-[20px]">
        <div className="w-[160.7px] flex flex-row items-center justify-start gap-[20px]">
          <div className="h-[42px] flex flex-col items-center justify-between py-0 px-[5px] box-border">
            <img
              className="w-[27px] h-[27px] relative overflow-hidden shrink-0"
              alt=""
              src="/icons.svg"
            />
            <div className="w-[50px] h-[9px] relative leading-[16px] flex items-center justify-center shrink-0">
              Home
            </div>
          </div>
          <div className="self-stretch hidden flex-col items-center justify-between py-0 px-[5px] text-black-500">
            <img
              className="w-[26.1px] h-[27px] relative overflow-hidden shrink-0 hidden"
              alt=""
              src="/icongolfclub.svg"
            />
            <div className="w-[50px] h-[9px] relative leading-[16px] font-light flex items-center justify-center shrink-0">
              Lessons
            </div>
          </div>
        </div>
        <div className="w-[160.7px] flex flex-row items-center justify-end py-0 pr-0 pl-[21px] box-border gap-[20px] text-black-500">
          <div className="h-[42px] flex-1 flex flex-col items-center justify-between py-0 px-[5px] box-border">
            <img
              className="w-[27px] h-[27px] relative overflow-hidden shrink-0"
              alt=""
              src="/iconbookopen.svg"
            />
            <div className="self-stretch h-[9px] relative leading-[16px] font-light flex items-center justify-center shrink-0">
              Library
            </div>
          </div>
          <div className="h-[42px] flex-1 flex flex-col items-center justify-between py-0 px-[5px] box-border">
            <img
              className="w-[27px] h-[27px] relative overflow-hidden shrink-0"
              alt=""
              src="/icongear.svg"
            />
            <div className="self-stretch h-[9px] relative leading-[16px] font-light flex items-center justify-center shrink-0">
              Settings
            </div>
          </div>
        </div>
      </div>
      <div className="mt-[-86px] self-stretch h-[77px] relative shrink-0 text-sm text-neutral-500 font-paragraph-small-bold">
        <div className="absolute top-[21px] left-[0px] w-full flex flex-row items-center justify-between gap-[20px]">
          <div className="flex flex-row flex-wrap items-start justify-start">
            <div className="flex flex-col items-center justify-start py-spacing-xx-sm px-[19px] gap-[4px]">
              <img
                className="w-6 h-6 relative overflow-hidden shrink-0"
                loading="lazy"
                alt=""
                src="/home031.svg"
              />
              <b className="relative leading-[20px] inline-block min-w-[40px]">
                Home
              </b>
            </div>
            <div className="flex flex-col items-center justify-start py-spacing-xx-sm px-5 gap-[4px]">
              <img
                className="w-6 h-6 relative overflow-hidden shrink-0"
                loading="lazy"
                alt=""
                src="/flag021.svg"
              />
              <b className="relative leading-[20px] inline-block min-w-[38px]">
                Goals
              </b>
            </div>
          </div>
          <div className="flex flex-row flex-wrap items-start justify-start text-brand-500">
            <div className="flex flex-col items-center justify-start py-spacing-xx-sm px-[19px] gap-[4px]">
              <input
                className="m-0 w-6 h-6 relative overflow-hidden shrink-0"
                type="checkbox"
              />
              <b className="relative leading-[20px] inline-block min-w-[38px]">
                Tasks
              </b>
            </div>
            <div className="flex flex-col items-center justify-start py-spacing-xx-sm px-[22px] gap-[4px] text-text-default-secondary">
              <img
                className="w-6 h-6 relative overflow-hidden shrink-0"
                loading="lazy"
                alt=""
                src="/messagechatcircle.svg"
              />
              <b className="relative leading-[20px] inline-block min-w-[32px]">
                Chat
              </b>
            </div>
          </div>
        </div>
        <div className="absolute top-[0px] left-[156px] rounded-81xl w-[78px] h-[78px] flex flex-row items-center justify-center py-4 px-2.5 box-border bg-[url('/public/action-button@3x.png')] bg-cover bg-no-repeat bg-[top] z-[1]">
          <img
            className="h-[30px] w-[30px] relative overflow-hidden shrink-0"
            loading="lazy"
            alt=""
            src="/qrcode02.svg"
          />
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-center py-0 pr-5 pl-[22px]">
        <div className="h-1 w-[136.2px] relative rounded bg-gainsboro shrink-0" />
      </div>
    </section>
  );
};

export default NavBarCoach1;
