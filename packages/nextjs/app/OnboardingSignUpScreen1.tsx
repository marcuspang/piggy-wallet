"use client";

import { FunctionComponent, useState } from "react";
import ScreenContent from "../components/ScreenContent";

interface Props {
  nextStage: (count: number) => void;
}

const OnboardingSignUpScreen1: FunctionComponent<Props> = ({ nextStage }) => {
  const [value, setValue] = useState(0);
  return (
    <div className="w-full relative rounded-xl bg-base-white overflow-hidden flex flex-col items-start justify-start pt-0 px-0 pb-4 box-border leading-[normal] tracking-[normal]">
      <img className="w-full max-w-full shrink-0 object-cover z-[1]" alt="" src="/background@2x.png" />
      <ScreenContent value={value} setValue={setValue} />
      <div className="box-border flex flex-row items-start self-stretch justify-start max-w-full px-4 py-0">
        <button
          className="cursor-pointer py-2.5 px-5 bg-brand-500 flex-1 rounded-radius-200 box-border overflow-hidden flex flex-row items-start justify-center gap-[8px] max-w-full border-[1px] border-solid border-brand-600"
          onClick={() => nextStage(value)}
        >
          <img className="relative hidden w-4 h-4 overflow-hidden shrink-0" alt="" src="/star7.svg" />
          <b className="relative text-base leading-[24px] inline-block font-paragraph-small-bold text-text-brand-on-brand text-left min-w-[69px]">
            Continue
          </b>
          <img className="relative hidden w-4 h-4 overflow-hidden shrink-0" alt="" src="/x8.svg" />
        </button>
      </div>
    </div>
  );
};

export default OnboardingSignUpScreen1;
