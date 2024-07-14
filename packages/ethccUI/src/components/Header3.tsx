import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type Header3Type = {
  className?: string;
  tasks?: string;

  /** Style props */
  iconButtonSubtleDefaultmdAlignSelf?: CSSProperties["alignSelf"];
  iconButtonSubtleDefaultmdPosition?: CSSProperties["position"];
  iconButtonSubtleDefaultmdTop?: CSSProperties["top"];
  iconButtonSubtleDefaultmdLeft?: CSSProperties["left"];
  iconButtonSubtleDefaultmdWidth?: CSSProperties["width"];
};

const Header3: FunctionComponent<Header3Type> = ({
  className = "",
  tasks,
  iconButtonSubtleDefaultmdAlignSelf,
  iconButtonSubtleDefaultmdPosition,
  iconButtonSubtleDefaultmdTop,
  iconButtonSubtleDefaultmdLeft,
  iconButtonSubtleDefaultmdWidth,
}) => {
  const header1Style: CSSProperties = useMemo(() => {
    return {
      alignSelf: iconButtonSubtleDefaultmdAlignSelf,
      position: iconButtonSubtleDefaultmdPosition,
      top: iconButtonSubtleDefaultmdTop,
      left: iconButtonSubtleDefaultmdLeft,
      width: iconButtonSubtleDefaultmdWidth,
    };
  }, [
    iconButtonSubtleDefaultmdAlignSelf,
    iconButtonSubtleDefaultmdPosition,
    iconButtonSubtleDefaultmdTop,
    iconButtonSubtleDefaultmdLeft,
    iconButtonSubtleDefaultmdWidth,
  ]);

  return (
    <section
      className={`self-stretch h-[100px] bg-gray-100 box-border overflow-hidden shrink-0 flex flex-row flex-wrap items-center justify-start pt-spacing-x-lg px-space-600 pb-spacing-sm relative gap-[0px_5px] text-center text-lg text-black-500 font-single-line-body-base border-b-[1px] border-solid border-neutral-100 ${className}`}
      style={header1Style}
    >
      <div className="h-scale-07 w-scale-07 !m-[0] absolute top-[48px] left-[24px] rounded-scale-06 overflow-hidden shrink-0 flex flex-row items-center justify-center py-padding-md px-2 box-border">
        <img
          className="h-6 w-6 relative overflow-hidden shrink-0"
          loading="lazy"
          alt=""
          src="/chevronleft.svg"
        />
      </div>
      <a className="[text-decoration:none] flex-1 absolute !m-[0] top-[56px] left-[72px] tracking-[-0.02em] leading-[24px] font-medium font-heading-mobile-h6-semi-bold text-[inherit] inline-block">
        {tasks}
      </a>
      <div className="h-scale-07 w-scale-07 !m-[0] absolute top-[48px] left-[329px] rounded-scale-06 overflow-hidden shrink-0 flex flex-row items-center justify-center py-padding-md px-2 box-border opacity-[0]">
        <img
          className="h-6 w-6 relative overflow-hidden shrink-0"
          loading="lazy"
          alt=""
          src="/chevronleft-1.svg"
        />
      </div>
      <div className="h-[72px] w-[262px] hidden flex-row flex-wrap items-center justify-end gap-[8px] z-[3] text-left text-base text-text-default-default">
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
        className="h-10 w-10 relative overflow-hidden shrink-0 hidden z-[4]"
        alt=""
        src="/menu.svg"
      />
      <div className="w-full !m-[0] absolute top-[0px] left-[0px] overflow-hidden shrink-0 flex flex-row items-end justify-between pt-3.5 pb-2 pr-[23px] pl-[27px] box-border gap-[20px] text-mid">
        <img
          className="h-8 w-[172px] relative hidden"
          alt=""
          src="/notch.svg"
        />
        <div className="w-[54px] rounded-3xl flex flex-row items-start justify-start pt-px px-0 pb-0 box-border">
          <div className="flex-1 relative tracking-[-0.41px] leading-[22px] font-semibold">
            9:41
          </div>
        </div>
        <div className="flex flex-col items-start justify-end pt-0 px-0 pb-[3px]">
          <div className="flex flex-row items-end justify-start gap-[7.5px]">
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
    </section>
  );
};

export default Header3;
