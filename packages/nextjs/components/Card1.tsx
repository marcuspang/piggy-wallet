import { FunctionComponent } from "react";

export type Card1Type = {
  className?: string;
};

const Card1: FunctionComponent<Card1Type> = ({ className = "" }) => {
  return (
    <section
      className={`absolute top-[calc(50%_-_164px)] left-[calc(50%_-_180.5px)] rounded-spacing-md bg-base-white box-border w-[361px] h-[] flex flex-row flex-wrap items-start justify-start pt-0 px-[23px] pb-space-600 gap-[24px] min-w-[240px] z-[3] text-center text-5xl text-text-default-default font-heading-mobile-h6-semi-bold border-[1px] border-solid border-border-default-default ${className}`}
    >
      <img
        className="h-8 w-8 relative overflow-hidden shrink-0 hidden z-[0]"
        alt=""
        src="/info.svg"
      />
      <div className="flex-1 flex flex-col items-start justify-start gap-[16px] min-w-[160px]">
        <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
          <h3 className="m-0 self-stretch relative text-inherit tracking-[-0.02em] leading-[32px] font-semibold font-inherit">
            <p className="m-0">Show this QR Code to</p>
            <p className="m-0">receive any crypto</p>
          </h3>
          <div className="self-stretch relative text-base leading-[24px] font-medium font-paragraph-small-bold text-text-default-secondary">
            <p className="m-0">Crypto will be exchange for USDC</p>
            <p className="m-0">so you will keep your balance stable</p>
          </div>
        </div>
        <div className="flex flex-row items-center justify-start gap-[16px] text-left text-base text-text-neutral-default font-single-line-body-base">
          <div className="h-10 w-[75px] rounded-radius-200 overflow-hidden hidden flex-row items-center justify-center py-space-300 px-[11px] box-border gap-[8px]">
            <img
              className="h-4 w-4 relative overflow-hidden shrink-0 hidden min-h-[16px]"
              alt=""
              src="/star4.svg"
            />
            <div className="self-stretch flex-1 relative leading-[100%]">
              Cancel
            </div>
            <img
              className="h-4 w-4 relative overflow-hidden shrink-0 hidden min-h-[16px]"
              alt=""
              src="/x4.svg"
            />
          </div>
          <div className="rounded-radius-200 bg-brand-500 overflow-hidden flex flex-row items-center justify-center py-2.5 px-[78px] gap-[8px] text-text-brand-on-brand font-paragraph-small-bold border-[1px] border-solid border-brand-600">
            <img
              className="h-4 w-4 relative overflow-hidden shrink-0 hidden"
              alt=""
              src="/star7.svg"
            />
            <b className="relative leading-[24px]">Share Payment Link</b>
            <img
              className="h-4 w-4 relative overflow-hidden shrink-0 hidden"
              alt=""
              src="/x8.svg"
            />
          </div>
        </div>
      </div>
      <img
        className="h-60 w-60 absolute !m-[0] top-[-72px] left-[calc(50%_-_119.5px)] rounded-[13.71px] object-cover"
        loading="lazy"
        alt=""
        src="/qr@2x.png"
      />
    </section>
  );
};

export default Card1;
