import { FunctionComponent } from "react";

export type Inputs1Type = {
  className?: string;
  avatar?: string;
  prop?: string;
  walkTheDog?: string;
  historySpacer?: string;
};

const Inputs1: FunctionComponent<Inputs1Type> = ({
  className = "",
  avatar,
  prop,
  walkTheDog,
  historySpacer,
}) => {
  return (
    <div
      className={`self-stretch rounded-spacing-md bg-success-50 flex flex-col items-start justify-center py-1.5 px-[15px] text-left text-base text-neutral-900 font-paragraph-small-bold border-[1px] border-solid border-success-600 ${className}`}
    >
      <div className="self-stretch flex flex-row flex-wrap items-start justify-center gap-[8px]">
        <img
          className="h-[22.4px] w-[22.4px] relative rounded-7xs-6 overflow-hidden shrink-0 object-cover"
          alt=""
          src={avatar}
        />
        <div className="flex-1 flex flex-col items-start justify-start py-0 pr-[151px] pl-0 box-border gap-[4px] min-w-[169px]">
          <b className="w-[103px] h-6 relative leading-[24px] flex items-center">
            Task Finished
          </b>
          <div className="self-stretch h-5 flex flex-row items-center justify-start gap-[4px] text-sm">
            <img className="h-4 w-4 relative" alt="" src={prop} />
            <div className="self-stretch flex-1 relative leading-[20px] font-medium flex items-center">
              {walkTheDog}
            </div>
          </div>
        </div>
        <div className="h-6 w-[31px] relative text-lg tracking-[-0.02em] leading-[24px] font-semibold font-heading-mobile-h6-semi-bold text-black-500 flex items-center">
          {historySpacer}
        </div>
      </div>
    </div>
  );
};

export default Inputs1;
