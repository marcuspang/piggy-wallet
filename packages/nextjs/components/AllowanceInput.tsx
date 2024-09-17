import { FunctionComponent } from "react";

export type AllowanceInputType = {
  className?: string;
  radio?: string;
  star?: string;
  x?: string;
};

const AllowanceInput: FunctionComponent<AllowanceInputType> = ({
  className = "",
  radio,
  star,
  x,
}) => {
  return (
    <section
      className={`w-[361px] !m-[0] absolute top-[190px] left-[16px] flex flex-row items-start justify-start max-w-full text-left text-base text-neutral-700 font-paragraph-small-bold ${className}`}
    >
      <div className="w-full !m-[0] absolute right-[0px] bottom-[-37px] left-[0px] rounded-spacing-md bg-whitesmoke box-border flex flex-col items-start justify-start py-1.5 px-[15px] gap-[12px] border-[1px] border-solid border-neutral-200">
        <div className="self-stretch flex flex-row items-start justify-between gap-[20px]">
          <div className="flex flex-col items-start justify-start pt-1 px-0 pb-0">
            <div className="relative leading-[24px] font-medium">
              Weekly Allowance
            </div>
          </div>
          <div className="relative text-5xl tracking-[-0.02em] leading-[32px] font-semibold font-heading-mobile-h6-semi-bold text-black-500 inline-block min-w-[51px] whitespace-nowrap">
            $340
          </div>
        </div>
        <div className="self-stretch h-px relative bg-neutral-200" />
        <div className="self-stretch flex flex-col items-start justify-start gap-[8px] text-sm">
          <div className="self-stretch flex flex-row items-center justify-between gap-[20px]">
            <div className="flex flex-row items-center justify-start gap-[4px]">
              <input
                className="m-0 h-[22.4px] w-[22.4px] relative rounded-7xs-6 overflow-hidden shrink-0 min-h-[22px]"
                type="checkbox"
              />
              <div className="relative leading-[20px] font-medium inline-block min-w-[111px]">
                Matt’s Allowance
              </div>
            </div>
            <div className="flex flex-row items-center justify-start gap-[8px] text-xl text-black-500 font-heading-mobile-h6-semi-bold">
              <div className="relative tracking-[-0.02em] leading-[28px] font-semibold inline-block min-w-[38px] whitespace-nowrap">
                $170
              </div>
              <div className="h-6 w-6 rounded-[21.33px] bg-base-white box-border overflow-hidden shrink-0 flex flex-row items-center justify-center pt-[5.3px] px-[5px] pb-[5.4px] border-[0.7px] border-solid border-neutral-200">
                <img
                  className="h-[13.3px] w-[13.3px] relative overflow-hidden shrink-0"
                  alt=""
                  src="/edit02-1.svg"
                />
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-center justify-between gap-[20px]">
            <div className="flex flex-row items-center justify-start gap-[4px]">
              <img
                className="h-[22.4px] w-[22.4px] relative rounded-7xs-6 overflow-hidden shrink-0 object-cover min-h-[22px]"
                alt=""
                src="/avatar-3@2x.png"
              />
              <div className="relative leading-[20px] font-medium inline-block min-w-[112px]">
                Lucy’s Allowance
              </div>
            </div>
            <div className="flex flex-row items-center justify-start gap-[8px] text-xl text-black-500 font-heading-mobile-h6-semi-bold">
              <div className="relative tracking-[-0.02em] leading-[28px] font-semibold inline-block min-w-[38px] whitespace-nowrap">
                $170
              </div>
              <div className="h-6 w-6 rounded-[21.33px] bg-base-white box-border overflow-hidden shrink-0 flex flex-row items-center justify-center pt-[5.3px] px-[5px] pb-[5.4px] border-[0.7px] border-solid border-neutral-200">
                <img
                  className="h-[13.3px] w-[13.3px] relative overflow-hidden shrink-0"
                  alt=""
                  src="/edit02-1.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-1 rounded-spacing-md bg-base-white box-border flex flex-row flex-wrap items-start justify-start py-[22px] px-[23px] gap-[24px] min-w-[240px] max-w-full z-[3] text-center text-5xl text-neutral-900 font-heading-mobile-h6-semi-bold border-[1px] border-solid border-border-default-default">
        <img
          className="h-8 w-8 relative overflow-hidden shrink-0 hidden"
          alt=""
          src="/info.svg"
        />
        <div className="flex-1 flex flex-col items-start justify-start gap-[24px] min-w-[160px]">
          <div className="self-stretch flex flex-col items-start justify-start gap-[12px]">
            <h3 className="m-0 self-stretch relative text-inherit tracking-[-0.02em] leading-[32px] font-semibold font-inherit">
              <p className="m-0">Select one of your</p>
              <p className="m-0">children to send funds</p>
            </h3>
            <div className="self-stretch flex flex-col items-start justify-start gap-[12px] text-left text-lg text-neutral-700 font-paragraph-small-bold">
              <div className="self-stretch flex flex-row items-center justify-between gap-[20px]">
                <div className="flex flex-row items-center justify-start gap-[4px]">
                  <img
                    className="h-12 w-12 relative rounded-3xs-6 overflow-hidden shrink-0 object-cover min-h-[48px]"
                    alt=""
                    src="/avatar-17@2x.png"
                  />
                  <div className="flex flex-col items-start justify-start">
                    <div className="relative leading-[28px] font-medium inline-block min-w-[39px]">
                      Matt
                    </div>
                    <div className="relative text-sm leading-[20px] font-medium inline-block min-w-[57px] whitespace-nowrap">
                      $1,800.10
                    </div>
                  </div>
                </div>
                <img
                  className="h-6 w-6 relative rounded-14979xl-5 overflow-hidden shrink-0"
                  loading="lazy"
                  alt=""
                  src={radio}
                />
              </div>
              <div className="self-stretch flex flex-row items-center justify-between gap-[20px]">
                <div className="flex flex-row items-center justify-start gap-[4px]">
                  <img
                    className="h-12 w-12 relative rounded-3xs-6 overflow-hidden shrink-0 object-cover min-h-[48px]"
                    alt=""
                    src="/avatar-18@2x.png"
                  />
                  <div className="flex flex-col items-start justify-start">
                    <div className="relative leading-[28px] font-medium inline-block min-w-[40px]">
                      Lucy
                    </div>
                    <div className="relative text-sm leading-[20px] font-medium inline-block min-w-[42px] whitespace-nowrap">
                      $1,000
                    </div>
                  </div>
                </div>
                <img
                  className="h-6 w-6 relative rounded-14979xl-5 overflow-hidden shrink-0"
                  alt=""
                  src="/radio-1.svg"
                />
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[12px] text-sm text-neutral-500 font-paragraph-small-bold">
            <div className="self-stretch relative leading-[20px] font-medium">
              <p className="m-0">Or you can insert an</p>
              <p className="m-0">external address to do a withdrawal</p>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[8px] text-left text-base text-text-default-default font-single-line-body-base">
              <div className="self-stretch relative leading-[24px] font-medium font-paragraph-small-bold">
                External Address
              </div>
              <div className="w-60 relative leading-[140%] text-text-default-secondary hidden">
                Description
              </div>
              <div className="self-stretch rounded-radius-200 bg-base-white box-border overflow-hidden flex flex-row items-center justify-start py-2.5 px-[15px] min-w-[240px] border-[1px] border-solid border-border-default-default">
                <input
                  className="w-full [border:none] [outline:none] font-paragraph-small-bold text-base bg-[transparent] h-6 flex-1 relative leading-[24px] text-neutral-400 text-left inline-block overflow-hidden text-ellipsis whitespace-nowrap min-w-[169px] p-0"
                  placeholder="0xC5869DDF544620B377Cf2C79458F51070683cA37"
                  type="text"
                />
              </div>
              <div className="w-[37px] relative leading-[140%] hidden">
                Error
              </div>
            </div>
          </div>
          <button className="cursor-pointer py-2.5 px-5 bg-border-default-default self-stretch rounded-radius-200 overflow-hidden flex flex-row items-center justify-center gap-[8px] border-[1px] border-solid border-border-disabled-default">
            <img
              className="h-4 w-4 relative overflow-hidden shrink-0 hidden"
              alt=""
              src={star}
            />
            <b className="relative text-base leading-[24px] inline-block font-paragraph-small-bold text-border-disabled-default text-left min-w-[69px]">
              Continue
            </b>
            <img
              className="h-4 w-4 relative overflow-hidden shrink-0 hidden"
              alt=""
              src={x}
            />
          </button>
        </div>
      </div>
    </section>
  );
};

export default AllowanceInput;
