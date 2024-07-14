import { FunctionComponent } from "react";

export type ScreenContentType = {
  className?: string;
  optionText?: string;
};

const ScreenContent: FunctionComponent<ScreenContentType> = ({
  className = "",
  optionText,
}) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-start pt-0 px-4 pb-[105px] box-border max-w-full text-left text-9xl text-black-500 font-heading-mobile-h6-semi-bold ${className}`}
    >
      <div className="flex-1 flex flex-col items-start justify-start gap-[24px] max-w-full">
        <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
          <h2 className="m-0 relative text-inherit tracking-[-0.02em] leading-[36px] font-semibold font-inherit">
            Let’s set up your Piggy Wallet
          </h2>
          <div className="self-stretch relative text-base leading-[24px] font-medium font-paragraph-small-bold">
            How many children do you have?
          </div>
        </div>
        <div className="self-stretch h-12 flex flex-row items-start justify-start gap-[8px] max-w-full text-base text-text-default-default font-paragraph-small-bold">
          <div className="w-60 relative leading-[24px] font-medium hidden" />
          <div className="w-60 relative leading-[140%] font-single-line-body-base text-text-default-secondary hidden">
            Description
          </div>
          <div className="flex-1 rounded-radius-200 bg-base-white box-border overflow-hidden flex flex-row items-start justify-start py-2.5 pr-[15px] pl-space-400 min-w-[240px] max-w-full shrink-0 text-neutral-400 border-[1px] border-solid border-border-default-default">
            <div className="flex-1 relative leading-[24px] inline-block max-w-full">
              {optionText}
            </div>
          </div>
          <div className="w-[37px] relative leading-[140%] font-single-line-body-base hidden">
            Error
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScreenContent;
