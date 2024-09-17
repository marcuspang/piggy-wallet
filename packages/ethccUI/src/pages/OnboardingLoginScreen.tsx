import { FunctionComponent } from "react";
import FrameComponent from "../components/FrameComponent";

const OnboardingLoginScreen: FunctionComponent = () => {
  return (
    <div className="w-full relative rounded-xl bg-base-white overflow-hidden flex flex-col items-start justify-start pt-0 px-0 pb-4 box-border gap-[200.2px] leading-[normal] tracking-[normal]">
      <FrameComponent />
      <img
        className="w-full h-[388.8px] absolute !m-[0] top-[43px] right-[0px] left-[0px] max-w-full overflow-hidden shrink-0 object-cover z-[1]"
        alt=""
        src="/background2@2x.png"
      />
      <section className="self-stretch flex flex-row items-start justify-start py-0 px-4 box-border max-w-full text-center text-33xl text-black-500 font-heading-mobile-h6-semi-bold">
        <div className="flex-1 flex flex-col items-start justify-start gap-[16px] max-w-full">
          <h1 className="m-0 self-stretch relative text-inherit tracking-[-0.02em] leading-[56px] font-semibold font-inherit">
            Hello Matt!
          </h1>
          <div className="relative text-base leading-[24px] font-medium font-paragraph-small-bold">
            We are pleased to welcome you to piggy wallet!
          </div>
        </div>
      </section>
      <div className="self-stretch flex flex-row items-start justify-start py-0 px-4 box-border max-w-full">
        <button className="cursor-pointer py-2.5 px-5 bg-base-white flex-1 rounded-radius-200 box-border overflow-hidden flex flex-row items-start justify-center gap-[8px] max-w-full border-[1px] border-solid border-neutral-200">
          <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
            <img
              className="w-5 h-5 relative overflow-hidden shrink-0"
              alt=""
              src="/media--social-icon.svg"
            />
          </div>
          <b className="relative text-base leading-[24px] font-paragraph-small-bold text-neutral-800 text-left">
            Log in with Google
          </b>
          <img
            className="h-4 w-4 relative overflow-hidden shrink-0 hidden"
            alt=""
            src="/x.svg"
          />
        </button>
      </div>
    </div>
  );
};

export default OnboardingLoginScreen;
