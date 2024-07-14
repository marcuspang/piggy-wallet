import { FunctionComponent } from "react";

export type CurrentTasksType = {
  className?: string;
};

const CurrentTasks: FunctionComponent<CurrentTasksType> = ({
  className = "",
}) => {
  return (
    <div
      className={`self-stretch flex flex-col items-start justify-start gap-[12px] text-left text-lg text-black-500 font-paragraph-small-bold ${className}`}
    >
      <div className="self-stretch flex flex-row items-center justify-start gap-[16px]">
        <b className="relative leading-[28px] inline-block min-w-[121px]">
          Today’s Tasks
        </b>
        <div className="h-9 w-9 rounded-scale-06 overflow-hidden shrink-0 hidden flex-row items-center justify-center p-2 box-border">
          <img
            className="h-5 w-5 relative overflow-hidden shrink-0"
            alt=""
            src="/edit02.svg"
          />
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start gap-[8px] text-base text-neutral-900">
        <div className="self-stretch flex flex-row items-start justify-between py-0 px-0 gap-[0px] [row-gap:20px]">
          <div className="rounded-tl-spacing-md rounded-tr-none rounded-br-none rounded-bl-spacing-md bg-brand-50 flex flex-col items-center justify-center py-3.5 px-[29px] border-t-[1px] border-solid border-neutral-200 border-b-[1px] border-l-[1px]">
            <img
              className="w-8 h-8 relative"
              loading="lazy"
              alt=""
              src="/-3.svg"
            />
          </div>
          <div className="w-[271px] rounded-tl-none rounded-tr-spacing-md rounded-br-spacing-md rounded-bl-none bg-whitesmoke box-border flex flex-col items-start justify-center py-1.5 px-[15px] border-[1px] border-solid border-neutral-200">
            <div className="self-stretch flex flex-row items-center justify-start gap-[8px]">
              <div className="flex-1 flex flex-col items-start justify-start py-0 pr-5 pl-0">
                <div className="relative leading-[24px] font-medium inline-block min-w-[105px]">
                  Tidy your bed
                </div>
                <div className="relative text-lg tracking-[-0.02em] leading-[24px] font-semibold font-heading-mobile-h6-semi-bold text-black-500 inline-block min-w-[57px]">
                  Earn $1
                </div>
              </div>
              <div className="h-8 w-8 rounded-lg bg-base-white box-border overflow-hidden shrink-0 flex flex-row items-center justify-center border-[1.5px] border-solid border-neutral-400">
                <img
                  className="h-8 w-8 relative overflow-hidden shrink-0 hidden"
                  alt=""
                  src="/check.svg"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-between py-0 px-0 gap-[0px] [row-gap:20px]">
          <div className="rounded-tl-spacing-md rounded-tr-none rounded-br-none rounded-bl-spacing-md bg-brand-50 flex flex-col items-center justify-center py-3.5 px-[29px] border-t-[1px] border-solid border-neutral-200 border-b-[1px] border-l-[1px]">
            <img
              className="w-8 h-8 relative"
              loading="lazy"
              alt=""
              src="/-21.svg"
            />
          </div>
          <div className="w-[271px] rounded-tl-none rounded-tr-spacing-md rounded-br-spacing-md rounded-bl-none bg-whitesmoke box-border flex flex-col items-start justify-center py-1.5 px-[15px] border-[1px] border-solid border-neutral-200">
            <div className="self-stretch flex flex-row items-center justify-start gap-[8px]">
              <div className="flex-1 flex flex-col items-start justify-start py-0 pr-5 pl-0">
                <div className="relative leading-[24px] font-medium inline-block min-w-[101px]">
                  Walk the dog
                </div>
                <div className="relative text-lg tracking-[-0.02em] leading-[24px] font-semibold font-heading-mobile-h6-semi-bold text-black-500 inline-block min-w-[60px]">
                  Earn $2
                </div>
              </div>
              <div className="h-8 w-8 rounded-lg bg-base-white box-border overflow-hidden shrink-0 flex flex-row items-center justify-center border-[1.5px] border-solid border-neutral-400">
                <img
                  className="h-8 w-8 relative overflow-hidden shrink-0 hidden"
                  alt=""
                  src="/check.svg"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-between py-0 px-0 gap-[0px] [row-gap:20px]">
          <div className="rounded-tl-spacing-md rounded-tr-none rounded-br-none rounded-bl-spacing-md bg-brand-50 flex flex-col items-center justify-center py-3.5 px-[29px] border-t-[1px] border-solid border-neutral-200 border-b-[1px] border-l-[1px]">
            <img
              className="w-8 h-8 relative"
              loading="lazy"
              alt=""
              src="/1.svg"
            />
          </div>
          <div className="w-[271px] rounded-tl-none rounded-tr-spacing-md rounded-br-spacing-md rounded-bl-none bg-whitesmoke box-border flex flex-col items-start justify-center py-1.5 px-[15px] border-[1px] border-solid border-neutral-200">
            <div className="self-stretch flex flex-row items-center justify-start gap-[8px]">
              <div className="flex-1 flex flex-col items-start justify-start py-0 pr-5 pl-0">
                <div className="relative leading-[24px] font-medium">
                  Do your homework
                </div>
                <div className="relative text-lg tracking-[-0.02em] leading-[24px] font-semibold font-heading-mobile-h6-semi-bold text-black-500 inline-block min-w-[72px]">
                  Earn $2.5
                </div>
              </div>
              <div className="h-8 w-8 rounded-lg bg-base-white box-border overflow-hidden shrink-0 flex flex-row items-center justify-center border-[1.5px] border-solid border-neutral-400">
                <img
                  className="h-8 w-8 relative overflow-hidden shrink-0 hidden"
                  alt=""
                  src="/check.svg"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-between py-0 px-0 gap-[0px] [row-gap:20px]">
          <div className="rounded-tl-spacing-md rounded-tr-none rounded-br-none rounded-bl-spacing-md bg-brand-50 flex flex-col items-center justify-center py-3.5 px-[29px] border-t-[1px] border-solid border-neutral-200 border-b-[1px] border-l-[1px]">
            <img
              className="w-8 h-8 relative"
              loading="lazy"
              alt=""
              src="/-11.svg"
            />
          </div>
          <div className="w-[271px] rounded-tl-none rounded-tr-spacing-md rounded-br-spacing-md rounded-bl-none bg-whitesmoke box-border flex flex-col items-start justify-center py-1.5 px-[15px] border-[1px] border-solid border-neutral-200">
            <div className="self-stretch flex flex-row items-center justify-start gap-[8px]">
              <div className="flex-1 flex flex-col items-start justify-start py-0 pr-5 pl-0">
                <div className="relative leading-[24px] font-medium inline-block min-w-[103px]">
                  Call grandma
                </div>
                <div className="relative text-lg tracking-[-0.02em] leading-[24px] font-semibold font-heading-mobile-h6-semi-bold text-black-500 inline-block min-w-[59px]">
                  Earn $5
                </div>
              </div>
              <div className="h-8 w-8 rounded-lg bg-base-white box-border overflow-hidden shrink-0 flex flex-row items-center justify-center border-[1.5px] border-solid border-neutral-400">
                <img
                  className="h-8 w-8 relative overflow-hidden shrink-0 hidden"
                  alt=""
                  src="/check.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentTasks;
