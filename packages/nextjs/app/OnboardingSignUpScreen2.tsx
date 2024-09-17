"use client";

import { FunctionComponent, useState } from "react";

interface Props {
  nextStage: (name: string, birthday: string, email: string) => void;
}

const OnboardingSignUpScreen2: FunctionComponent<Props> = ({ nextStage }) => {
  const [name, setName] = useState("Jane Doe");
  const [birthday, setBirthday] = useState(new Date("01/01/2000").toDateString());
  const [email, setEmail] = useState("jane.doe@gmail.com");

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
              Can you tell us a bit more about your children?
            </div>
          </div>
          <div className="items-start justify-start gap-[8px]  max-w-full text-base text-text-default-default font-paragraph-small-bold pb-4">
            <div className="w-60 relative leading-[140%] font-single-line-body-base text-text-default-secondary pb-2">
              Name
            </div>
            <input
              className="rounded-radius-200 bg-base-white box-border text-neutral-400 border-[1px] border-solid border-border-default-default py-4 w-full px-4"
              placeholder="Jane Doe"
              type="text"
              value={name}
              onChange={e => setName(e.target.value)}
            />
          </div>
          <div className="items-start justify-start gap-[8px]  max-w-full text-base text-text-default-default font-paragraph-small-bold pb-4">
            <div className="w-60 relative leading-[140%] font-single-line-body-base text-text-default-secondary pb-2">
              Birthday
            </div>
            <input
              className="rounded-radius-200 bg-base-white box-border text-neutral-400 border-[1px] border-solid border-border-default-default py-4 w-full px-4"
              placeholder="01/01/2000"
              type="date"
              value={birthday}
              onChange={e => setBirthday(e.target.value)}
            />
          </div>
          <div className="items-start justify-start gap-[8px]  max-w-full text-base text-text-default-default font-paragraph-small-bold pb-4">
            <div className="w-60 relative leading-[140%] font-single-line-body-base text-text-default-secondary pb-2">
              Email
            </div>
            <input
              className="rounded-radius-200 bg-base-white box-border text-neutral-400 border-[1px] border-solid border-border-default-default py-4 w-full px-4"
              placeholder="jane.doe@gmail.com"
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </div>
        </div>
      </section>
      <div className="box-border flex flex-row items-start self-stretch justify-start max-w-full px-4 py-0">
        <button
          className="cursor-pointer py-2.5 px-5 bg-brand-500 flex-1 rounded-radius-200 box-border overflow-hidden flex flex-row items-start justify-center gap-[8px] max-w-full border-[1px] border-solid border-brand-600"
          onClick={() => nextStage(name, birthday, email)}
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

export default OnboardingSignUpScreen2;
