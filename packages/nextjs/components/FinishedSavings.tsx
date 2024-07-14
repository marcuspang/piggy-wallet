import { FunctionComponent } from "react";

export type FinishedSavingsType = {
  className?: string;
};

const FinishedSavings: FunctionComponent<FinishedSavingsType> = ({
  className = "",
}) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-start pt-0 px-4 pb-1 box-border max-w-full shrink-0 text-left text-lg text-black-500 font-paragraph-small-bold ${className}`}
    >
      <div className="flex-1 flex flex-col items-start justify-start gap-[12px] shrink-0 max-w-full">
        <b className="w-[188px] h-7 relative leading-[28px] flex items-center">
          Finished Saving Goals
        </b>
        <div className="self-stretch flex flex-row flex-wrap items-start justify-start [row-gap:20px] text-base text-neutral-900">
          <div className="h-[111px] w-[90.3px] rounded-tl-spacing-x-sm rounded-tr-none rounded-br-none rounded-bl-spacing-x-sm bg-brand-50 box-border flex flex-col items-center justify-center p-4 shrink-0 border-t-[1px] border-solid border-neutral-200 border-b-[1px] border-l-[1px]">
            <img className="w-12 h-12 relative" alt="" src="/-5.svg" />
          </div>
          <div className="flex-1 rounded-tl-none rounded-tr-spacing-md rounded-br-spacing-md rounded-bl-none bg-whitesmoke box-border flex flex-col items-start justify-start py-1.5 pr-3.5 pl-4 gap-[8px] min-w-[176px] shrink-0 border-[1px] border-solid border-neutral-200">
            <div className="self-stretch h-14 flex flex-col items-start justify-start">
              <div className="self-stretch flex-1 flex flex-row items-start justify-start gap-[9.6px]">
                <div className="self-stretch flex-1 relative leading-[24px] font-medium flex items-center">
                  Fortnite Yearly Subscription
                </div>
                <img
                  className="h-[22.4px] w-[22.4px] relative rounded-7xs-6 overflow-hidden shrink-0 object-cover"
                  alt=""
                  src="/avatar-2@2x.png"
                />
              </div>
              <div className="self-stretch h-8 relative text-5xl tracking-[-0.02em] leading-[32px] font-semibold font-heading-mobile-h6-semi-bold text-black-500 flex items-center shrink-0 whitespace-nowrap">
                $144
              </div>
            </div>
            <div className="self-stretch h-[31px] flex flex-col items-start justify-start gap-[4px] text-sm text-neutral-800">
              <div className="self-stretch h-[7px] rounded-3xl bg-brand-500 flex flex-row items-start justify-start z-[1]">
                <div className="h-[7px] w-[239px] relative rounded-spacing-x-big bg-neutral-200 hidden" />
                <div className="h-[7px] w-[239px] relative rounded-spacing-x-big bg-brand-500 hidden" />
              </div>
              <div className="self-stretch flex-1 flex flex-row items-start justify-between gap-[20px]">
                <div className="self-stretch w-[136px] relative leading-[20px] flex items-center">
                  Finished on 06/13/24
                </div>
                <div className="self-stretch w-[62px] relative leading-[20px] flex items-center">
                  Goal $144
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinishedSavings;
