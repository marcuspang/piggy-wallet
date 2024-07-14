"use client";

import { FunctionComponent } from "react";
import { useRouter } from "next/navigation";
import { useDynamicContext } from "@dynamic-labs/sdk-react-core";

export type ContentType = {
  className?: string;
};

const Content: FunctionComponent<ContentType> = ({ className = "" }) => {
  const { setShowAuthFlow, isAuthenticated } = useDynamicContext();
  const router = useRouter();

  if (isAuthenticated) {
    router.push("/parent/setup");
  }

  return (
    <section
      className={`self-stretch flex flex-row items-start justify-start py-0 px-4 box-border max-w-full text-center text-33xl text-black-500 font-heading-mobile-h6-semi-bold ${className}`}
    >
      <div className="flex flex-col items-start justify-start flex-1 max-w-full">
        <div>
          <h1 className="m-0 self-stretch h-28 relative text-inherit tracking-[-0.02em] leading-[56px] font-semibold font-inherit mt-8">
            <span>Welcome to</span>
            <br />
            <span>Piggy Wallet</span>
          </h1>
          <div className="self-stretch relative text-base leading-[24px] mt-4 font-medium font-paragraph-small-bold px-8">
            Empowering kids in high-inflation economies with secure crypto savings accounts.
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[16px] text-left text-base text-neutral-800 font-paragraph-small-bold">
          <button
            className="cursor-pointer py-2.5 px-5 bg-brand-500 self-stretch rounded-radius-200 overflow-hidden flex flex-row items-start justify-center gap-[8px] border-[1px] border-solid border-brand-600 w-full mt-10"
            onClick={() => setShowAuthFlow(true)}
          >
            <img className="relative hidden w-4 h-4 overflow-hidden shrink-0" alt="" src="/star7.svg" />
            <b className="relative text-base leading-[24px] inline-block font-paragraph-small-bold text-text-brand-on-brand text-left min-w-[59px] whitespace-nowrap">
              Sign Up
            </b>
            <img className="relative hidden w-4 h-4 overflow-hidden shrink-0" alt="" src="/x8.svg" />
          </button>
          <div className="self-stretch rounded-radius-200 overflow-hidden flex flex-row items-center justify-center py-space-300 px-14 gap-[8px]">
            <img className="relative hidden w-4 h-4 overflow-hidden shrink-0" alt="" src="/star5.svg" />
            <div className="relative leading-[24px] text-center">
              <span>
                <span className="font-medium">Already have an account?</span>
                <b className="text-brand-500">{` `}</b>
              </span>
              <b
                className="cursor-pointer text-brand-500"
                onClick={() => {
                  setShowAuthFlow(true);
                }}
              >
                <span>Log In</span>
              </b>
            </div>
            <img className="relative hidden w-4 h-4 overflow-hidden shrink-0" alt="" src="/x5.svg" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Content;
