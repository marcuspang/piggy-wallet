"use client";

import { FunctionComponent, useState } from "react";

interface Props {
  values: { name: string; birthday: string; email: string }[];
  nextStage: () => void;
}

const OnboardingSignUpScreen3: FunctionComponent<Props> = ({ values, nextStage }) => {
  return (
    <div className="w-full relative rounded-xl bg-base-white overflow-hidden flex flex-col items-start justify-start pt-0 px-0 pb-4 box-border leading-[normal] tracking-[normal]">
      <img className="w-full max-w-full shrink-0 object-cover z-[1]" alt="" src="/background@2x.png" />
      <section
        className={`self-stretch items-start justify-start pt-0 px-4 box-border max-w-full text-left text-9xl text-black-500 font-heading-mobile-h6-semi-bold`}
      >
        <div className="flex-1 items-start justify-start gap-[24px] max-w-full">
          <div className="self-stretch gap-[8px]">
            <h2 className="m-0 relative text-inherit tracking-[-0.02em] leading-[36px] font-semibold font-inherit">
              Let’s set up your Piggy Wallet
            </h2>
            <div className="self-stretch relative text-base leading-[24px] font-medium font-paragraph-small-bold mb-6">
              Please confirm your children's information
            </div>
            <div className="mb-6">
              {values.map(({ name, birthday, email }, index) => (
                <div key={index} className="items-start justify-start max-w-full p-6 text-base border rounded-lg text-text-default-default font-paragraph-small-bold bg-black/5">
                  <p className="mt-0 text-lg font-semibold">Child {index + 1}</p>
                  <div className="grid grid-cols-6 gap-x-4 gap-y-2">
                    <div className="col-span-2 font-semibold">Name</div>
                    <div className="col-span-4">{name}</div>
                    <div className="col-span-2 font-semibold">Birthday</div>
                    <div className="col-span-4">{birthday}</div>
                    <div className="col-span-2 font-semibold">Age</div>
                    <div className="col-span-4">{new Date().getFullYear() - new Date(birthday).getFullYear()}</div>
                    <div className="col-span-2 font-semibold">Email</div>
                    <div className="col-span-4">{email}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <div className="box-border flex flex-row items-start self-stretch justify-start max-w-full px-4 py-0">
        <button
          className="cursor-pointer py-2.5 px-5 bg-brand-500 flex-1 rounded-radius-200 box-border overflow-hidden flex flex-row items-start justify-center gap-[8px] max-w-full border-[1px] border-solid border-brand-600"
          onClick={() => nextStage()}
        >
          <img className="relative hidden w-4 h-4 overflow-hidden shrink-0" alt="" src="/star7.svg" />
          <b className="relative text-base leading-[24px] inline-block font-paragraph-small-bold text-text-brand-on-brand text-left min-w-[69px]">
            Confirm
          </b>
          <img className="relative hidden w-4 h-4 overflow-hidden shrink-0" alt="" src="/x8.svg" />
        </button>
      </div>
    </div>
  );
};

export default OnboardingSignUpScreen3;
