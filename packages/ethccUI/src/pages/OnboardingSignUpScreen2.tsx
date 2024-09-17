import { FunctionComponent } from "react";
import Header1 from "../components/Header1";
import ScreenContent from "../components/ScreenContent";

const OnboardingSignUpScreen2: FunctionComponent = () => {
  return (
    <div className="w-full relative rounded-xl bg-base-white overflow-hidden flex flex-col items-start justify-start pt-0 px-0 pb-4 box-border gap-[211px] leading-[normal] tracking-[normal]">
      <Header1 />
      <ScreenContent optionText="1" />
      <img
        className="w-full h-[290px] absolute !m-[0] top-[-2px] right-[0px] left-[0px] max-w-full overflow-hidden shrink-0 object-cover z-[1]"
        alt=""
        src="/background@2x.png"
      />
      <div className="self-stretch flex flex-row items-start justify-start py-0 px-4 box-border max-w-full">
        <button className="cursor-pointer py-2.5 px-5 bg-border-default-default flex-1 rounded-radius-200 box-border overflow-hidden flex flex-row items-start justify-center gap-[8px] max-w-full border-[1px] border-solid border-border-disabled-default">
          <img
            className="h-4 w-4 relative overflow-hidden shrink-0 hidden"
            alt=""
            src="/star6.svg"
          />
          <b className="relative text-base leading-[24px] inline-block font-paragraph-small-bold text-border-disabled-default text-left min-w-[69px]">
            Continue
          </b>
          <img
            className="h-4 w-4 relative overflow-hidden shrink-0 hidden"
            alt=""
            src="/x7.svg"
          />
        </button>
      </div>
    </div>
  );
};

export default OnboardingSignUpScreen2;
