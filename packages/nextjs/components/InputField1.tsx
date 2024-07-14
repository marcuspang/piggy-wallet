import { FunctionComponent } from "react";

export type InputField1Type = {
  className?: string;
  clickIconOnTheRiPlacehold?: string;
};

const InputField1: FunctionComponent<InputField1Type> = ({
  className = "",
  clickIconOnTheRiPlacehold,
}) => {
  return (
    <div
      className={`self-stretch flex flex-col items-start justify-start gap-[8px] text-left text-base text-text-default-default font-single-line-body-base ${className}`}
    >
      <div className="self-stretch relative leading-[24px] font-medium font-paragraph-small-bold">
        Select an emoji
      </div>
      <div className="w-60 relative leading-[140%] text-text-default-secondary hidden">
        Description
      </div>
      <div className="self-stretch rounded-radius-200 bg-base-white box-border overflow-hidden flex flex-row items-center justify-start py-2.5 px-[15px] min-w-[240px] border-[1px] border-solid border-border-default-default">
        <input
          className="w-[calc(100%_-_54px)] [border:none] [outline:none] font-paragraph-small-bold text-base bg-[transparent] h-6 flex-1 relative leading-[24px] text-neutral-400 text-left inline-block overflow-hidden text-ellipsis whitespace-nowrap min-w-[150px] p-0"
          placeholder={clickIconOnTheRiPlacehold}
          type="text"
        />
        <img
          className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
          alt=""
          src="/facesmile.svg"
        />
      </div>
      <div className="w-[37px] relative leading-[140%] hidden">Error</div>
    </div>
  );
};

export default InputField1;
