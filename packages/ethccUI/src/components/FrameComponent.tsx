import { FunctionComponent } from "react";

export type FrameComponentType = {
  className?: string;
};

const FrameComponent: FunctionComponent<FrameComponentType> = ({
  className = "",
}) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-start py-0 px-4 box-border max-w-full text-left text-9xl text-black-500 font-heading-mobile-h6-semi-bold ${className}`}
    >
      <div className="flex-1 flex flex-col items-start justify-start gap-[24px] max-w-full">
        <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
          <div className="relative tracking-[-0.02em] leading-[36px] font-semibold">
            Let’s set up your Piggy Wallet
          </div>
          <div className="self-stretch relative text-base leading-[24px] font-medium font-paragraph-small-bold">
            How many children do you have?
          </div>
        </div>
        <div className="self-stretch h-12 flex flex-row items-start justify-start gap-[8px] max-w-full text-base text-text-default-default font-single-line-body-base">
          <div className="w-60 relative leading-[24px] font-medium font-paragraph-small-bold hidden" />
          <div className="w-60 relative leading-[140%] text-text-default-secondary hidden">
            Description
          </div>
          <div className="h-[49px] flex-1 rounded-radius-200 bg-base-white box-border overflow-hidden flex flex-row items-start justify-start py-space-300 pr-[15px] pl-space-400 min-w-[240px] max-w-full border-[1px] border-solid border-border-default-default">
            <input
              className="w-full [border:none] [outline:none] font-paragraph-small-bold text-base bg-[transparent] h-6 flex-1 relative leading-[24px] text-text-default-default text-left inline-block min-w-[197px] max-w-full p-0"
              placeholder="2"
              type="text"
            />
          </div>
          <div className="w-[37px] relative leading-[140%] hidden">Error</div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent;
