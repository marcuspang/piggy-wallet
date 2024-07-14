import { FunctionComponent } from "react";
import FrameComponent from "../../../components/FrameComponent";
import { DynamicWidget } from "@dynamic-labs/sdk-react-core";

const OnboardingLoginScreen: FunctionComponent = () => {
  return (
    <div className="w-full relative rounded-xl bg-base-white overflow-hidden flex flex-col items-start justify-start pt-0 px-0 pb-4 box-border leading-[normal] tracking-[normal]">
      <img
        className="w-full h-[388.8px] max-w-full overflow-hidden shrink-0 object-cover z-[1] rounded-lg"
        alt=""
        src="/background2@2x.png"
      />
      {/* <FrameComponent /> */}
      <section className="box-border flex flex-row items-start self-stretch justify-start max-w-full px-4 py-0 pt-8 text-center text-33xl text-black-500 font-heading-mobile-h6-semi-bold">
        <div className="flex-1 flex flex-col items-center justify-center gap-[16px] max-w-full">
          <h1 className="m-0 self-stretch relative text-inherit tracking-[-0.02em] leading-[56px] font-semibold font-inherit">
            Hello Matt!
          </h1>
          <div className="relative text-base text-center leading-[24px] font-medium font-paragraph-small-bold">
            We are pleased to welcome you to piggy wallet!
          </div>
        </div>
      </section>
      <div className="box-border flex flex-row items-start self-stretch justify-start w-full max-w-full px-4 py-0">
        <DynamicWidget buttonClassName="w-full" buttonContainerClassName="w-full" />
      </div>
    </div>
  );
};

export default OnboardingLoginScreen;
