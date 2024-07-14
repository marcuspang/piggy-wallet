import { FunctionComponent } from "react";
import Header from "../components/Header";
import Content from "../components/Content";

const OnboardingSignUpScreen: FunctionComponent = () => {
  return (
    <div className="w-full relative rounded-xl bg-base-white overflow-hidden flex flex-col items-start justify-start pt-0 px-0 pb-6 box-border gap-[370.8px] leading-[normal] tracking-[normal]">
      <Header />
      <img
        className="w-full h-[388.8px] absolute !m-[0] top-[43px] right-[0px] left-[0px] max-w-full overflow-hidden shrink-0 object-cover z-[1]"
        alt=""
        src="/background1@2x.png"
      />
      <Content />
    </div>
  );
};

export default OnboardingSignUpScreen;
