import { FunctionComponent } from "react";
import SaturdayInput from "./SaturdayInput";

export type SaturdayListType = {
  className?: string;
};

const SaturdayList: FunctionComponent<SaturdayListType> = ({
  className = "",
}) => {
  return (
    <div
      className={`self-stretch flex flex-col items-start justify-start gap-[12px] text-left text-base text-neutral-900 font-paragraph-small-bold ${className}`}
    >
      <div className="self-stretch flex flex-row items-center justify-start gap-[16px] text-lg text-black-500">
        <b className="relative leading-[28px] inline-block min-w-[127px]">
          Previous Tasks
        </b>
        <div className="h-9 w-9 rounded-scale-06 overflow-hidden shrink-0 hidden flex-row items-center justify-center p-2 box-border">
          <img
            className="h-5 w-5 relative overflow-hidden shrink-0"
            alt=""
            src="/edit02.svg"
          />
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
        <div className="self-stretch flex flex-row items-center justify-start gap-[16px] text-black-500">
          <b className="relative leading-[24px]">Saturday 12, July</b>
          <div className="h-9 w-9 rounded-scale-06 overflow-hidden shrink-0 hidden flex-row items-center justify-center p-2 box-border">
            <img
              className="h-5 w-5 relative overflow-hidden shrink-0"
              alt=""
              src="/edit02.svg"
            />
          </div>
        </div>
        <SaturdayInput
          prop="/-21.svg"
          walkTheDog="Walk the dog"
          earned2="Earned $2"
        />
        <SaturdayInput
          prop="/-3.svg"
          walkTheDog="Tidy your bed"
          earned2="Earned $1"
        />
        <div className="self-stretch flex flex-row items-start justify-between py-0 px-0 gap-[0px] [row-gap:20px]">
          <div className="rounded-tl-spacing-md rounded-tr-none rounded-br-none rounded-bl-spacing-md bg-error-300 flex flex-col items-center justify-center py-3.5 px-[29px] border-t-[1px] border-solid border-error-600 border-b-[1px] border-l-[1px]">
            <img
              className="w-8 h-8 relative"
              loading="lazy"
              alt=""
              src="/1.svg"
            />
          </div>
          <div className="w-[271px] rounded-tl-none rounded-tr-spacing-md rounded-br-spacing-md rounded-bl-none bg-error-50 box-border flex flex-col items-start justify-center py-1.5 px-[15px] border-[1px] border-solid border-error-600">
            <div className="self-stretch flex flex-row items-center justify-start gap-[8px]">
              <div className="flex-1 flex flex-col items-start justify-start py-0 pr-5 pl-0">
                <div className="relative leading-[24px] font-medium">
                  Do your homework
                </div>
                <div className="relative text-lg tracking-[-0.02em] leading-[24px] font-semibold font-heading-mobile-h6-semi-bold text-black-500 inline-block min-w-[88px]">
                  Missed $2.5
                </div>
              </div>
              <div className="rounded-lg bg-error-500 overflow-hidden flex flex-row items-center justify-center">
                <img
                  className="h-8 w-8 relative overflow-hidden shrink-0"
                  alt=""
                  src="/x6.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
        <div className="self-stretch flex flex-row items-center justify-start gap-[16px] text-black-500">
          <b className="relative leading-[24px] inline-block min-w-[107px]">
            Friday 11, July
          </b>
          <div className="h-9 w-9 rounded-scale-06 overflow-hidden shrink-0 hidden flex-row items-center justify-center p-2 box-border">
            <img
              className="h-5 w-5 relative overflow-hidden shrink-0"
              alt=""
              src="/edit02.svg"
            />
          </div>
        </div>
        <SaturdayInput
          prop="/1.svg"
          walkTheDog="Do your homework"
          earned2="Earned $2.5"
        />
        <div className="self-stretch flex flex-row items-start justify-between py-0 px-0 gap-[0px] [row-gap:20px]">
          <div className="rounded-tl-spacing-md rounded-tr-none rounded-br-none rounded-bl-spacing-md bg-success-300 flex flex-col items-center justify-center py-3.5 px-[29px] border-t-[1px] border-solid border-success-600 border-b-[1px] border-l-[1px]">
            <img className="w-8 h-8 relative" alt="" src="/-3.svg" />
          </div>
          <div className="w-[271px] rounded-tl-none rounded-tr-spacing-md rounded-br-spacing-md rounded-bl-none bg-success-50 box-border flex flex-col items-start justify-center py-1.5 px-[15px] border-[1px] border-solid border-success-600">
            <div className="self-stretch flex flex-row items-center justify-start gap-[8px]">
              <div className="flex-1 flex flex-col items-start justify-start py-0 pr-5 pl-0">
                <div className="w-[105px] h-6 relative leading-[24px] font-medium flex items-center">
                  Tidy your bed
                </div>
                <div className="w-[79px] h-6 relative text-lg tracking-[-0.02em] leading-[24px] font-semibold font-heading-mobile-h6-semi-bold text-black-500 flex items-center">
                  Earned $2
                </div>
              </div>
              <div className="rounded-lg bg-success-500 overflow-hidden flex flex-row items-center justify-center">
                <img
                  className="h-8 w-8 relative overflow-hidden shrink-0"
                  alt=""
                  src="/check1.svg"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-between py-0 px-0 gap-[0px] [row-gap:20px]">
          <div className="rounded-tl-spacing-md rounded-tr-none rounded-br-none rounded-bl-spacing-md bg-error-300 flex flex-col items-center justify-center py-3.5 px-[29px] border-t-[1px] border-solid border-error-600 border-b-[1px] border-l-[1px]">
            <img className="w-8 h-8 relative" alt="" src="/-21.svg" />
          </div>
          <div className="w-[271px] rounded-tl-none rounded-tr-spacing-md rounded-br-spacing-md rounded-bl-none bg-error-50 box-border flex flex-col items-start justify-center py-1.5 px-[15px] border-[1px] border-solid border-error-600">
            <div className="self-stretch flex flex-row items-center justify-start gap-[8px]">
              <div className="flex-1 flex flex-col items-start justify-start py-0 pr-5 pl-0">
                <div className="w-[101px] h-6 relative leading-[24px] font-medium flex items-center">
                  Walk the dog
                </div>
                <div className="w-[76px] h-6 relative text-lg tracking-[-0.02em] leading-[24px] font-semibold font-heading-mobile-h6-semi-bold text-black-500 flex items-center">
                  Missed $2
                </div>
              </div>
              <div className="rounded-lg bg-error-500 overflow-hidden flex flex-row items-center justify-center">
                <img
                  className="h-8 w-8 relative overflow-hidden shrink-0"
                  alt=""
                  src="/x6.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SaturdayList;
