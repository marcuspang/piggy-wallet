"use client";

import { FunctionComponent, useState } from "react";
import { useRouter } from "next/navigation";

interface Props {}

const OnboardingSignUpScreenComplete: FunctionComponent<Props> = ({}) => {
  const router = useRouter();
  return (
    <section className="w-full relative rounded-xl bg-base-white overflow-hidden flex flex-col items-start justify-start pt-0 px-0 pb-4 box-border leading-[normal] tracking-[normal]">
      <img className="w-full max-w-full shrink-0 object-cover z-[1]" alt="" src="/background@2x.png" />
      <section
        className={`self-stretch items-start justify-start pt-0 px-4 box-border max-w-full text-left text-9xl text-black-500 font-heading-mobile-h6-semi-bold`}
      >
        <div className="flex-1 items-center justify-center gap-[24px] max-w-full text-center mt-8 mb-12">
          <div className="self-stretch gap-[8px]">
            <h1 className="m-0 relative text-inherit text-5xl tracking-[-0.02em] leading-[36px] font-semibold font-inherit">
              All setup!
            </h1>
            <div className="self-stretch relative text-base leading-[24px] font-medium font-paragraph-small-bold mb-6">
              We have sent an email to your children with a link to access their piggy wallets
            </div>
          </div>
        </div>
      </section>
      <div className="flex flex-row items-start self-stretch justify-start max-w-full px-4 py-0">
        <button
          className="cursor-pointer py-2.5 px-5 bg-brand-500 flex-1 rounded-radius-200 box-border overflow-hidden flex flex-row items-start justify-center gap-[8px] max-w-full border-[1px] border-solid border-brand-600"
          onClick={() => {
            router.push("/parent");
          }}
        >
          <img className="relative hidden w-4 h-4 overflow-hidden shrink-0" alt="" src="/star7.svg" />
          <b className="relative text-base leading-[24px] inline-block font-paragraph-small-bold text-text-brand-on-brand text-left min-w-[69px]">
            Finish
          </b>
          <img className="relative hidden w-4 h-4 overflow-hidden shrink-0" alt="" src="/x8.svg" />
        </button>
      </div>
    </section>
  );
};

export default OnboardingSignUpScreenComplete;
