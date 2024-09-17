import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type BottomNavigationBarType = {
  className?: string;
  avatar?: string;

  /** Style props */
  propHeight?: CSSProperties["height"];
};

const BottomNavigationBar: FunctionComponent<BottomNavigationBarType> = ({
  className = "",
  avatar,
  propHeight,
}) => {
  const bottomNavigationBarStyle: CSSProperties = useMemo(() => {
    return {
      height: propHeight,
    };
  }, [propHeight]);

  return (
    <section
      className={`self-stretch h-[111px] flex flex-row items-start justify-start pt-0 pb-[26px] pr-4 pl-0 box-border shrink-0 max-w-full text-center text-sm text-neutral-500 font-paragraph-small-bold ${className}`}
      style={bottomNavigationBarStyle}
    >
      <div className="flex-1 flex flex-col items-start justify-start pt-3 px-0 pb-0 box-border max-w-[105%] shrink-0">
        <div className="self-stretch bg-gray-100 flex flex-col items-end justify-start pt-3.5 px-4 pb-[3px] gap-[9px] z-[1]">
          <div className="self-stretch flex flex-row flex-wrap items-start justify-start py-1 pr-[17px] pl-[25px] gap-[52.2px]">
            <div className="flex-1 flex flex-row items-start justify-between min-w-[84px] gap-[20px]">
              <div className="flex flex-col items-start justify-start gap-[4px]">
                <div className="flex flex-row items-start justify-start py-0 px-2">
                  <img
                    className="h-6 w-6 relative overflow-hidden shrink-0"
                    loading="lazy"
                    alt=""
                    src="/home033.svg"
                  />
                </div>
                <b className="relative leading-[20px] inline-block min-w-[40px]">
                  Home
                </b>
              </div>
              <div className="flex flex-col items-start justify-start gap-[4px] text-brand-500">
                <div className="flex flex-row items-start justify-start py-0 px-[7px]">
                  <img
                    className="h-6 w-6 relative overflow-hidden shrink-0"
                    loading="lazy"
                    alt=""
                    src="/flag022.svg"
                  />
                </div>
                <b className="relative leading-[20px] inline-block min-w-[38px]">
                  Goals
                </b>
              </div>
            </div>
            <div className="flex-1 flex flex-row items-start justify-between min-w-[89px] gap-[20px] text-text-default-secondary">
              <div className="flex flex-col items-start justify-start gap-[4px]">
                <div className="flex flex-row items-start justify-start py-0 px-[7px]">
                  <img
                    className="h-6 w-6 relative overflow-hidden shrink-0"
                    loading="lazy"
                    alt=""
                    src="/checksquarebroken.svg"
                  />
                </div>
                <b className="relative leading-[20px] inline-block min-w-[38px]">
                  Tasks
                </b>
              </div>
              <div className="flex flex-col items-start justify-start gap-[4px]">
                <div className="flex flex-row items-start justify-start py-0 px-4">
                  <img
                    className="h-6 w-6 relative overflow-hidden shrink-0"
                    alt=""
                    src="/settings01.svg"
                  />
                </div>
                <b className="relative leading-[20px] inline-block min-w-[56px]">
                  Settings
                </b>
              </div>
            </div>
          </div>
          <div className="self-stretch hidden flex-row items-start justify-between gap-[20px] text-xs text-brand-green-500 font-text-xs-light">
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
          <div className="self-stretch flex flex-row items-start justify-center py-0 pr-5 pl-[22px]">
            <div className="h-1 w-[136.2px] relative rounded bg-gainsboro" />
          </div>
        </div>
      </div>
      <div className="w-[361px] flex flex-row flex-wrap items-start justify-start max-w-[calc(100%_-_16px)] [row-gap:20px] shrink-0 ml-[-377px] text-left text-base text-neutral-900">
        <div className="h-[111px] w-[90.3px] rounded-tl-spacing-md rounded-tr-none rounded-br-none rounded-bl-spacing-md bg-brand-50 box-border flex flex-col items-center justify-center p-4 shrink-0 border-t-[1px] border-solid border-neutral-200 border-b-[1px] border-l-[1px]">
          <img className="w-12 h-12 relative" alt="" src="/-23.svg" />
        </div>
        <div className="flex-1 rounded-tl-none rounded-tr-spacing-md rounded-br-spacing-md rounded-bl-none bg-whitesmoke box-border flex flex-col items-start justify-start py-1.5 px-[15px] gap-[8px] min-w-[176px] shrink-0 border-[1px] border-solid border-neutral-200">
          <div className="self-stretch flex flex-col items-start justify-start">
            <div className="self-stretch flex flex-row items-start justify-between gap-[20px]">
              <div className="relative leading-[24px] font-medium inline-block min-w-[98px]">
                Playstation 5
              </div>
              <img
                className="h-[22.4px] w-[22.4px] relative rounded-7xs-6 overflow-hidden shrink-0 object-contain"
                loading="lazy"
                alt=""
                src={avatar}
              />
            </div>
            <div className="self-stretch relative text-5xl tracking-[-0.02em] leading-[32px] font-semibold font-heading-mobile-h6-semi-bold text-black-500 whitespace-nowrap">
              $150.05
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[4px] text-sm text-neutral-800">
            <div className="self-stretch h-[7px] relative rounded-3xl bg-neutral-200">
              <div className="absolute top-[0px] left-[0px] rounded-spacing-x-big bg-neutral-200 w-full h-full hidden" />
              <div className="absolute top-[calc(50%_-_3.5px)] left-[0px] rounded-spacing-x-big bg-brand-500 w-[23.9px] h-[7px] z-[1]" />
            </div>
            <div className="self-stretch flex flex-row items-start justify-between gap-[20px]">
              <div className="relative leading-[20px] inline-block min-w-[85px]">
                Autosave $15
              </div>
              <div className="relative leading-[20px] inline-block min-w-[74px]">
                Goal $1,500
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BottomNavigationBar;
