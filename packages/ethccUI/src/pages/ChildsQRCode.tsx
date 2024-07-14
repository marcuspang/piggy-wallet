import { FunctionComponent } from "react";
import Profile from "../components/Profile";
import BottomFooter from "../components/BottomFooter";
import Card1 from "../components/Card1";

const ChildsQRCode: FunctionComponent = () => {
  return (
    <div className="w-full h-[840px] relative rounded-xl bg-base-white overflow-hidden leading-[normal] tracking-[normal] text-center text-mid text-black-500 font-single-line-body-base">
      <img
        className="absolute top-[0px] left-[111px] w-[172px] h-8 hidden"
        alt=""
        src="/notch.svg"
      />
      <div className="absolute top-[14px] left-[28px] rounded-3xl w-[54px] flex flex-row items-start justify-start pt-px px-0 pb-0 box-border">
        <a className="[text-decoration:none] flex-1 relative tracking-[-0.41px] leading-[22px] font-semibold text-[inherit]">
          9:41
        </a>
      </div>
      <img
        className="absolute top-[19px] left-[343px] w-[27.4px] h-[13px]"
        loading="lazy"
        alt=""
        src="/-statusbarbattery.svg"
      />
      <img
        className="absolute top-[20px] left-[319px] w-[17px] h-[11.8px]"
        loading="lazy"
        alt=""
        src="/wifi.svg"
      />
      <img
        className="absolute top-[20px] left-[293px] w-[18px] h-3"
        loading="lazy"
        alt=""
        src="/icon--mobile-signal.svg"
      />
      <form className="m-0 absolute top-[59px] left-[16px] w-[361px] flex flex-col items-start justify-start gap-[24px]">
        <Profile />
        <div className="self-stretch flex flex-col items-start justify-start gap-[12px]">
          <div className="self-stretch flex flex-row items-center justify-start gap-[16px]">
            <b className="relative text-lg leading-[28px] inline-block font-paragraph-small-bold text-black-500 text-left min-w-[121px]">
              Today’s Tasks
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
              <div className="rounded-tl-spacing-md rounded-tr-none rounded-br-none rounded-bl-spacing-md bg-brand-50 flex flex-col items-center justify-center py-3.5 px-[29px] border-t-[1px] border-solid border-neutral-200 border-b-[1px] border-l-[1px]">
                <img
                  className="w-8 h-8 relative"
                  loading="lazy"
                  alt=""
                  src="/-21.svg"
                />
              </div>
              <div className="w-[271px] rounded-tl-none rounded-tr-spacing-md rounded-br-spacing-md rounded-bl-none bg-whitesmoke box-border flex flex-col items-start justify-center py-1.5 px-[15px] border-[1px] border-solid border-neutral-200">
                <div className="self-stretch flex flex-row items-center justify-start gap-[8px]">
                  <div className="flex-1 flex flex-col items-start justify-start py-0 pr-5 pl-0">
                    <div className="relative text-base leading-[24px] font-medium font-paragraph-small-bold text-neutral-900 text-left inline-block min-w-[101px]">
                      Walk the dog
                    </div>
                    <div className="relative text-lg tracking-[-0.02em] leading-[24px] font-semibold font-heading-mobile-h6-semi-bold text-black-500 text-left inline-block min-w-[60px]">
                      Earn $2
                    </div>
                  </div>
                  <div className="h-8 w-8 rounded-lg bg-base-white box-border overflow-hidden shrink-0 flex flex-row items-center justify-center border-[1.5px] border-solid border-neutral-400">
                    <img
                      className="h-8 w-8 relative overflow-hidden shrink-0 hidden"
                      alt=""
                      src="/check.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-between py-0 px-0 gap-[0px] [row-gap:20px]">
              <div className="rounded-tl-spacing-md rounded-tr-none rounded-br-none rounded-bl-spacing-md bg-brand-50 flex flex-col items-center justify-center py-3.5 px-[29px] border-t-[1px] border-solid border-neutral-200 border-b-[1px] border-l-[1px]">
                <img className="w-8 h-8 relative" alt="" src="/-3.svg" />
              </div>
              <div className="w-[271px] rounded-tl-none rounded-tr-spacing-md rounded-br-spacing-md rounded-bl-none bg-whitesmoke box-border flex flex-col items-start justify-center py-1.5 px-[15px] border-[1px] border-solid border-neutral-200">
                <div className="self-stretch flex flex-row items-center justify-start gap-[8px]">
                  <div className="flex-1 flex flex-col items-start justify-start py-0 pr-5 pl-0">
                    <div className="relative text-base leading-[24px] font-medium font-paragraph-small-bold text-neutral-900 text-left inline-block min-w-[105px]">
                      Tidy your bed
                    </div>
                    <div className="relative text-lg tracking-[-0.02em] leading-[24px] font-semibold font-heading-mobile-h6-semi-bold text-black-500 text-left inline-block min-w-[57px]">
                      Earn $1
                    </div>
                  </div>
                  <div className="h-8 w-8 rounded-lg bg-base-white box-border overflow-hidden shrink-0 flex flex-row items-center justify-center border-[1.5px] border-solid border-neutral-400">
                    <img
                      className="h-8 w-8 relative overflow-hidden shrink-0 hidden"
                      alt=""
                      src="/check.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch rounded-spacing-md bg-whitesmoke flex flex-col items-start justify-center py-1.5 px-[15px] border-[1px] border-solid border-neutral-200">
              <div className="self-stretch flex flex-col items-center justify-start gap-[8px]">
                <div className="w-[276px] relative text-base leading-[24px] font-medium font-paragraph-small-bold text-neutral-700 text-left flex items-center box-border pl-5 pr-5">
                  You have 2 more pending tasks
                </div>
                <button className="cursor-pointer py-1.5 px-5 bg-base-white self-stretch rounded-radius-200 overflow-hidden flex flex-row items-center justify-center gap-[8px] border-[1px] border-solid border-brand-500">
                  <img
                    className="h-4 w-4 relative overflow-hidden shrink-0 hidden"
                    alt=""
                    src="/star.svg"
                  />
                  <div className="relative text-base leading-[24px] font-medium font-paragraph-small-bold text-neutral-900 text-left inline-block min-w-[97px]">
                    See All Tasks
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
        </div>
        <footer className="self-stretch h-[228px] flex flex-col items-start justify-start gap-[12px]">
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
          <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-[8px]">
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
            <div className="self-stretch flex-1 rounded-spacing-md bg-whitesmoke flex flex-col items-start justify-center py-spacing-x-sm px-[15px] border-[1px] border-solid border-neutral-200">
              <div className="self-stretch flex-1 flex flex-col items-center justify-start gap-[8px]">
                <div className="w-[276px] relative text-base leading-[24px] font-medium font-paragraph-small-bold text-neutral-700 text-left flex items-center box-border pl-5 pr-5">
                  You have 2 more pending tasks
                </div>
                <div className="self-stretch flex-1 rounded-radius-200 bg-base-white overflow-hidden flex flex-row items-center justify-center py-space-200 px-5 gap-[8px] border-[1px] border-solid border-brand-500">
                  <img
                    className="h-4 w-4 relative overflow-hidden shrink-0 hidden"
                    alt=""
                    src="/star.svg"
                  />
                  <div className="self-stretch w-[97px] relative text-base leading-[24px] font-medium font-paragraph-small-bold text-neutral-900 text-left inline-block">
                    See All Tasks
                  </div>
                  <img
                    className="h-4 w-4 relative overflow-hidden shrink-0 hidden"
                    alt=""
                    src="/x.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </footer>
      </form>
      <BottomFooter />
      <section className="absolute top-[0px] left-[0px] rounded-xl bg-gray-200 w-full h-full z-[2]" />
      <Card1 />
    </div>
  );
};

export default ChildsQRCode;
