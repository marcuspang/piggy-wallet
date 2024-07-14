import { type CSSProperties, FunctionComponent, useMemo } from "react";

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
        <img className="relative w-6 h-6 overflow-hidden shrink-0" loading="lazy" alt="" src="/chevronleft.svg" />
      </div>
      <a className="[text-decoration:none] flex-1 absolute !m-[0] top-[56px] left-[72px] tracking-[-0.02em] leading-[24px] font-medium font-heading-mobile-h6-semi-bold text-[inherit] inline-block">
        {tasks}
      </a>
      <div className="h-scale-07 w-scale-07 !m-[0] absolute top-[48px] left-[329px] rounded-scale-06 overflow-hidden shrink-0 flex flex-row items-center justify-center py-padding-md px-2 box-border opacity-[0]">
        <img className="relative w-6 h-6 overflow-hidden shrink-0" loading="lazy" alt="" src="/chevronleft-1.svg" />
      </div>
      <img className="h-10 w-10 relative overflow-hidden shrink-0 hidden z-[4]" alt="" src="/menu.svg" />
      <div className="w-full !m-[0] absolute top-[0px] left-[0px] overflow-hidden shrink-0 flex flex-row items-end justify-between pt-3.5 pb-2 pr-[23px] pl-[27px] box-border gap-[20px] text-mid">
        <img className="h-8 w-[172px] relative hidden" alt="" src="/notch.svg" />
      </div>
    </section>
  );
};

export default Header3;
