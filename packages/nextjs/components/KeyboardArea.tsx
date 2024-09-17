import { FunctionComponent } from "react";

export type KeyboardAreaType = {
  className?: string;
};

const KeyboardArea: FunctionComponent<KeyboardAreaType> = ({
  className = "",
}) => {
  return (
    <section
      className={`self-stretch flex flex-col items-start justify-start min-h-[291px] max-w-full text-center text-6xl text-black-500 font-sf-pro ${className}`}
    >
      <div className="self-stretch flex flex-col items-start justify-start pt-1.5 px-0 pb-0 box-border relative gap-[58px] max-w-full z-[1]">
        <div className="w-full h-full !m-[0] absolute top-[0px] right-[0px] bottom-[0px] left-[0px] [backdrop-filter:blur(150px)] [background:linear-gradient(#939393,_#939393),_linear-gradient(rgba(86,_88,_92,_0.87),_rgba(86,_88,_92,_0.87)),_rgba(85,_85,_85,_0.9)]" />
        <div className="self-stretch flex flex-row items-start justify-start py-0 px-1.5 box-border max-w-full">
          <div className="flex-1 flex flex-col items-start justify-start pt-0 px-0 pb-px box-border gap-[7px] max-w-full z-[1]">
            <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[6px]">
              <div className="h-[46px] flex-1 relative rounded-8xs min-w-[92px]">
                <div className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] shadow-[0px_1px_0px_rgba(0,_0,_0,_0.35)] rounded-8xs-6 bg-base-white" />
                <div className="absolute top-[calc(50%_-_23px)] left-[calc(50%_-_9.5px)] w-5 h-10 flex flex-col items-end justify-start pt-0 pb-2.5 pr-1 pl-0.5 box-border z-[1]">
                  <div className="relative inline-block min-w-[13px] shrink-0">
                    1
                  </div>
                  <div className="self-stretch h-3 flex flex-row items-start justify-end py-0 pr-[5px] pl-[9px] box-border shrink-0 text-3xs">
                    <b className="self-stretch flex-1 relative tracking-[2px] flex items-center justify-center shrink-0">{` `}</b>
                  </div>
                </div>
              </div>
              <div className="h-[46px] flex-1 relative rounded-8xs min-w-[92px]">
                <div className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] shadow-[0px_1px_0px_rgba(0,_0,_0,_0.35)] rounded-8xs-6 bg-base-white" />
                <div className="absolute top-[calc(50%_-_23px)] left-[calc(50%_-_9.5px)] w-5 h-10 flex flex-col items-start justify-start pt-0 px-0.5 pb-2.5 box-border z-[1]">
                  <div className="w-[15px] relative inline-block min-w-[15px] shrink-0">
                    2
                  </div>
                  <b className="ml-[-5px] relative text-3xs tracking-[2px] inline-block min-w-[26px] shrink-0">
                    ABC
                  </b>
                </div>
              </div>
              <div className="h-[46px] flex-1 relative rounded-8xs min-w-[92px]">
                <div className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] shadow-[0px_1px_0px_rgba(0,_0,_0,_0.35)] rounded-8xs-6 bg-base-white" />
                <div className="absolute top-[calc(50%_-_23px)] left-[calc(50%_-_9.5px)] h-10 flex flex-col items-start justify-start pt-0 px-0.5 pb-2.5 box-border z-[1]">
                  <div className="w-[15px] relative inline-block min-w-[15px] shrink-0">
                    3
                  </div>
                  <b className="ml-[-4px] relative text-3xs tracking-[2px] inline-block min-w-[24px] shrink-0">
                    DEF
                  </b>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[6px]">
              <div className="h-[46px] flex-1 relative rounded-8xs min-w-[92px]">
                <div className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] shadow-[0px_1px_0px_rgba(0,_0,_0,_0.35)] rounded-8xs-6 bg-base-white" />
                <div className="absolute top-[calc(50%_-_23px)] left-[calc(50%_-_9.5px)] h-10 flex flex-col items-start justify-start pt-0 px-px pb-2.5 box-border z-[1]">
                  <div className="w-4 relative inline-block min-w-[16px] shrink-0">
                    4
                  </div>
                  <b className="ml-[-2px] relative text-3xs tracking-[2px] inline-block min-w-[23px] shrink-0">
                    GHI
                  </b>
                </div>
              </div>
              <div className="h-[46px] flex-1 relative rounded-8xs min-w-[92px]">
                <div className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] shadow-[0px_1px_0px_rgba(0,_0,_0,_0.35)] rounded-8xs-6 bg-base-white" />
                <div className="absolute top-[calc(50%_-_23px)] left-[calc(50%_-_9.5px)] h-10 flex flex-col items-start justify-start pt-0 px-0.5 pb-2.5 box-border z-[1]">
                  <div className="w-[15px] relative inline-block min-w-[15px] shrink-0">
                    5
                  </div>
                  <b className="ml-[-4px] relative text-3xs tracking-[2px] inline-block min-w-[24px] shrink-0">
                    JKL
                  </b>
                </div>
              </div>
              <div className="h-[46px] flex-1 relative rounded-8xs min-w-[92px]">
                <div className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] shadow-[0px_1px_0px_rgba(0,_0,_0,_0.35)] rounded-8xs-6 bg-base-white" />
                <div className="absolute top-[calc(50%_-_23px)] left-[calc(50%_-_9.5px)] w-5 h-10 flex flex-col items-start justify-start pt-0 px-px pb-2.5 box-border z-[1]">
                  <div className="w-4 relative inline-block min-w-[16px] shrink-0">
                    6
                  </div>
                  <b className="ml-[-5px] relative text-3xs tracking-[2px] inline-block min-w-[29px] shrink-0">
                    MNO
                  </b>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[6px]">
              <div className="h-[46px] flex-1 relative rounded-8xs min-w-[92px]">
                <div className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] shadow-[0px_1px_0px_rgba(0,_0,_0,_0.35)] rounded-8xs-6 bg-base-white" />
                <div className="absolute top-[calc(50%_-_23px)] left-[calc(50%_-_9.5px)] w-5 h-10 flex flex-col items-start justify-start pt-0 px-0.5 pb-2.5 box-border z-[1]">
                  <div className="w-3.5 relative inline-block min-w-[14px] shrink-0">
                    7
                  </div>
                  <b className="ml-[-9px] relative text-3xs tracking-[2px] inline-block min-w-[35px] shrink-0">
                    PQRS
                  </b>
                </div>
              </div>
              <div className="h-[46px] flex-1 relative rounded-8xs min-w-[92px]">
                <div className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] shadow-[0px_1px_0px_rgba(0,_0,_0,_0.35)] rounded-8xs-6 bg-base-white" />
                <div className="absolute top-[calc(50%_-_23px)] left-[calc(50%_-_9.5px)] h-10 flex flex-col items-start justify-start pt-0 px-px pb-2.5 box-border z-[1]">
                  <div className="w-4 relative inline-block min-w-[16px] shrink-0">
                    8
                  </div>
                  <b className="ml-[-4px] relative text-3xs tracking-[2px] inline-block min-w-[26px] shrink-0">
                    TUV
                  </b>
                </div>
              </div>
              <div className="h-[46px] flex-1 relative rounded-8xs min-w-[92px]">
                <div className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] shadow-[0px_1px_0px_rgba(0,_0,_0,_0.35)] rounded-8xs-6 bg-base-white" />
                <div className="absolute top-[calc(50%_-_23px)] left-[calc(50%_-_9.5px)] w-5 h-10 flex flex-col items-start justify-start pt-0 px-px pb-2.5 box-border z-[1]">
                  <div className="w-4 relative inline-block min-w-[16px] shrink-0">
                    9
                  </div>
                  <b className="ml-[-10px] relative text-3xs tracking-[2px] inline-block min-w-[38px] shrink-0">
                    WXYZ
                  </b>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[6px]">
              <div className="h-[46px] flex-1 relative bg-crimson min-w-[92px]" />
              <div className="h-[46px] flex-1 relative rounded-8xs min-w-[92px]">
                <div className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] shadow-[0px_1px_0px_rgba(0,_0,_0,_0.35)] rounded-8xs-6 bg-base-white" />
                <div className="absolute top-[calc(50%_-_16px)] left-[calc(50%_-_8.5px)] inline-block min-w-[16px] z-[1]">
                  0
                </div>
              </div>
              <img
                className="self-stretch flex-1 relative rounded-8xs max-w-full overflow-hidden max-h-full min-w-[92px] min-h-[46px]"
                loading="lazy"
                alt=""
                src="/button.svg"
              />
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-center py-2 px-5 z-[1]">
          <div className="h-[5px] w-[139px] relative rounded-81xl bg-black-500 [transform:_rotate(180deg)]" />
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start py-0 px-4 box-border max-w-full mt-[-64px] text-left text-base text-text-brand-on-brand font-paragraph-small-bold">
        <div className="flex-1 rounded-radius-200 bg-brand-500 box-border overflow-hidden flex flex-row items-start justify-center py-2.5 px-5 gap-[8px] max-w-full border-[1px] border-solid border-brand-600">
          <img
            className="h-4 w-4 relative overflow-hidden shrink-0 hidden"
            alt=""
            src="/star7.svg"
          />
          <b className="relative leading-[24px] inline-block min-w-[69px]">
            Continue
          </b>
          <img
            className="h-4 w-4 relative overflow-hidden shrink-0 hidden"
            alt=""
            src="/x8.svg"
          />
        </div>
      </div>
    </section>
  );
};

export default KeyboardArea;
