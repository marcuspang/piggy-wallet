import { FunctionComponent } from "react";

export type Header1Type = {
  className?: string;
};

const Header1: FunctionComponent<Header1Type> = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch bg-brand-600 flex flex-col items-start justify-start pt-3.5 pb-7 pr-6 pl-7 gap-[34px] text-center text-mid text-base-white font-single-line-body-base ${className}`}
    >
      <div className="w-[18px] flex flex-row items-start justify-start py-0 px-[5px] box-border text-xs font-abeezee">
        <div className="flex flex-row items-start justify-start flex-1">
          <a className="[text-decoration:none] flex-1 relative leading-[14px] text-[inherit] whitespace-nowrap">
            <img src="/chevron-left.svg" alt="chevron-left" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Header1;
