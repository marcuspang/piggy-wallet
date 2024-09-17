import { FunctionComponent } from "react";

export type ChildrenGoals1Type = {
  className?: string;
  avatar?: string;
};

const ChildrenGoals1: FunctionComponent<ChildrenGoals1Type> = ({
  className = "",
  avatar,
}) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-start py-0 px-4 box-border max-w-full shrink-0 text-left text-base text-neutral-900 font-paragraph-small-bold ${className}`}
    >
      <div className="flex-1 flex flex-row flex-wrap items-start justify-start shrink-0 max-w-full [row-gap:20px]">
        <div className="h-[111px] w-[90.3px] rounded-tl-spacing-md rounded-tr-none rounded-br-none rounded-bl-spacing-md bg-brand-50 box-border flex flex-col items-center justify-center p-4 shrink-0 border-t-[1px] border-solid border-neutral-200 border-b-[1px] border-l-[1px]">
          <img
            className="w-12 h-12 relative"
            loading="lazy"
            alt=""
            src="/-12.svg"
          />
        </div>
        <div className="flex-1 rounded-tl-none rounded-tr-spacing-md rounded-br-spacing-md rounded-bl-none bg-whitesmoke box-border flex flex-col items-start justify-start py-1.5 px-[15px] gap-[8px] min-w-[176px] shrink-0 border-[1px] border-solid border-neutral-200">
          <div className="self-stretch flex flex-col items-start justify-start">
            <div className="self-stretch flex flex-row items-start justify-between gap-[20px]">
              <div className="relative leading-[24px] font-medium inline-block min-w-[101px]">
                Camping Trip
              </div>
              <img
                className="h-[22.4px] w-[22.4px] relative rounded-7xs-6 overflow-hidden shrink-0 object-contain"
                loading="lazy"
                alt=""
                src={avatar}
              />
            </div>
            <div className="self-stretch relative text-5xl tracking-[-0.02em] leading-[32px] font-semibold font-heading-mobile-h6-semi-bold text-black-500 whitespace-nowrap">
              $150.02
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[4px] text-sm text-neutral-800">
            <div className="self-stretch h-[7px] relative rounded-3xl bg-neutral-200">
              <div className="absolute top-[0px] left-[1px] rounded-spacing-x-big bg-neutral-200 w-full h-full hidden" />
              <div className="absolute top-[calc(50%_-_3.5px)] left-[0px] rounded-spacing-x-big bg-brand-500 w-[179.3px] h-[7px] z-[1]" />
            </div>
            <div className="self-stretch flex flex-row items-start justify-between gap-[20px]">
              <div className="relative leading-[20px] inline-block min-w-[80px]">
                Autosave $5
              </div>
              <div className="relative leading-[20px] inline-block min-w-[66px]">
                Goal $200
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChildrenGoals1;
