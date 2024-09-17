import { FunctionComponent } from "react";

export type HeaderType = {
  className?: string;
};

const Header: FunctionComponent<HeaderType> = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch bg-brand-600 flex flex-col items-start justify-start pt-3.5 pb-7 pr-6 pl-7 gap-[34px] text-center text-xs text-base-white font-abeezee ${className}`}
    >
      <img className="w-[172px] h-8 relative hidden" alt="" src="/notch.svg" />
      <div className="w-[18px] flex flex-row items-start justify-start py-0 px-[5px] box-border">
        <div className="flex flex-row items-start justify-start flex-1">
          <a className="[text-decoration:none] flex-1 relative leading-[14px] text-[inherit] whitespace-nowrap">a</a>
        </div>
      </div>
    </section>
  );
};

export default Header;
