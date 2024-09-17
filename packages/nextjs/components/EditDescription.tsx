import { FunctionComponent } from "react";

export type EditDescriptionType = {
  className?: string;
};

const EditDescription: FunctionComponent<EditDescriptionType> = ({
  className = "",
}) => {
  return (
    <div
      className={`self-stretch flex flex-col items-start justify-start gap-[12px] text-center text-5xl text-neutral-900 font-paragraph-small-bold ${className}`}
    >
      <h3 className="m-0 self-stretch relative text-inherit tracking-[-0.02em] leading-[32px] font-semibold font-heading-mobile-h6-semi-bold">
        Edit Matt’s Weekly Allowance
      </h3>
      <div className="self-stretch relative text-sm leading-[20px] font-medium text-black-500">
        Piggy Wallet will send the money you setup as long as your account has
        enough balance
      </div>
      <div className="self-stretch rounded-spacing-md bg-whitesmoke flex flex-col items-start justify-center py-1.5 px-[15px] text-left text-base text-neutral-700 border-[1px] border-solid border-neutral-200">
        <div className="self-stretch flex flex-row items-center justify-between gap-[20px]">
          <div className="relative leading-[24px] font-medium">
            Matt’s Weekly Allowance
          </div>
          <div className="relative text-xl tracking-[-0.02em] leading-[28px] font-semibold font-heading-mobile-h6-semi-bold text-black-500 inline-block min-w-[38px] whitespace-nowrap">
            $170
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditDescription;
