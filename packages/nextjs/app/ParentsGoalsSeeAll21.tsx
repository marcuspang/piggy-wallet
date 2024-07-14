import { FunctionComponent } from "react";
import PageHeader from "../components/PageHeader";
import GoalSelection from "../components/GoalSelection";
import SavingsInput from "../components/SavingsInput";
import ChildrenGoals1 from "../components/ChildrenGoals1";
import BottomNavigationBar from "../components/BottomNavigationBar";
import GoalContent from "../components/GoalContent";
import ChildrenGoals from "../components/ChildrenGoals";

const ParentsGoalsSeeAll2: FunctionComponent = () => {
  return (
    <div className="w-full h-[840px] relative rounded-xl bg-base-white overflow-hidden flex flex-col items-start justify-start gap-[8px] leading-[normal] tracking-[normal] text-left text-lg text-black-500 font-paragraph-small-bold">
      <PageHeader />
      <b className="relative leading-[28px] hidden z-[1]">
        Active Saving Goals
      </b>
      <div className="w-9 h-9 rounded-scale-06 overflow-hidden shrink-0 hidden flex-row items-center justify-center p-2 box-border z-[2]">
        <img
          className="h-5 w-5 relative overflow-hidden shrink-0"
          alt=""
          src="/edit02.svg"
        />
      </div>
      <div className="w-[361px] hidden flex-row items-start justify-between max-w-full gap-[0px] [row-gap:20px] z-[3] text-base text-neutral-900">
        <div className="self-stretch w-[90.3px] rounded-tl-spacing-md rounded-tr-none rounded-br-none rounded-bl-spacing-md bg-brand-50 box-border flex flex-col items-center justify-center p-4 border-t-[1px] border-solid border-neutral-200 border-b-[1px] border-l-[1px]">
          <img className="w-12 h-12 relative" alt="" src="/-22.svg" />
        </div>
        <div className="w-[271px] rounded-tl-none rounded-tr-spacing-md rounded-br-spacing-md rounded-bl-none bg-whitesmoke box-border flex flex-col items-start justify-center py-1.5 px-[15px] border-[1px] border-solid border-neutral-200">
          <div className="self-stretch flex flex-col items-start justify-start">
            <div className="self-stretch flex flex-row items-center justify-between gap-[20px]">
              <div className="relative leading-[24px] font-medium">
                Matt’s General Savings
              </div>
              <input
                className="m-0 h-[22.4px] w-[22.4px] relative rounded-7xs-6 overflow-hidden shrink-0"
                type="checkbox"
              />
            </div>
            <div className="self-stretch relative text-5xl tracking-[-0.02em] leading-[32px] font-semibold font-heading-mobile-h6-semi-bold text-black-500 whitespace-nowrap">
              $800.10
            </div>
            <div className="relative text-sm leading-[20px] text-neutral-800 inline-block min-w-[88px]">
              Autosave $50
            </div>
          </div>
        </div>
      </div>
      <section className="self-stretch flex flex-row items-start justify-start py-0 px-4 box-border max-w-full shrink-0 text-left text-lg text-neutral-700 font-paragraph-small-bold">
        <div className="flex-1 flex flex-col items-start justify-start pt-0 px-0 pb-0 box-border shrink-0 max-w-full">
          <div className="self-stretch rounded-spacing-md bg-whitesmoke flex flex-col items-start justify-start py-3.5 px-[15px] gap-[12px] shrink-0 border-[1px] border-solid border-neutral-200">
            <div className="self-stretch flex flex-col items-start justify-start gap-[4px]">
              <b className="relative leading-[28px]">Savings Overview</b>
              <div className="self-stretch relative text-25xl tracking-[-0.02em] leading-[48px] font-semibold font-heading-mobile-h6-semi-bold text-black-500 whitespace-nowrap">
                $2,800.10
              </div>
            </div>
            <div className="self-stretch h-px relative bg-neutral-200" />
            <div className="self-stretch flex flex-col items-start justify-start gap-[8px] text-sm">
              <div className="self-stretch flex flex-row items-center justify-between gap-[20px]">
                <div className="flex flex-row items-center justify-start gap-[4px]">
                  <img
                    className="h-[22.4px] w-[22.4px] relative rounded-7xs-6 overflow-hidden shrink-0 object-cover min-h-[22px]"
                    loading="lazy"
                    alt=""
                    src="/avatar@2x.png"
                  />
                  <div className="relative leading-[20px] font-medium inline-block min-w-[95px]">
                    Matt’s Savings
                  </div>
                </div>
                <div className="relative text-xl tracking-[-0.02em] leading-[28px] font-semibold font-heading-mobile-h6-semi-bold text-black-500 inline-block min-w-[76px] whitespace-nowrap">
                  $1,800.10
                </div>
              </div>
              <div className="self-stretch flex flex-row items-center justify-between gap-[20px]">
                <div className="flex flex-row items-center justify-start gap-[4px]">
                  <img
                    className="h-[22.4px] w-[22.4px] relative rounded-7xs-6 overflow-hidden shrink-0 object-cover min-h-[22px]"
                    loading="lazy"
                    alt=""
                    src="/avatar-110@2x.png"
                  />
                  <div className="relative leading-[20px] font-medium inline-block min-w-[96px]">
                    Lucy’s Savings
                  </div>
                </div>
                <div className="relative text-xl tracking-[-0.02em] leading-[28px] font-semibold font-heading-mobile-h6-semi-bold text-black-500 inline-block min-w-[54px] whitespace-nowrap">
                  $1,000
                </div>
              </div>
            </div>
          </div>
          <GoalSelection />
          <SavingsInput
            lucysGeneralSavings="Lucy’s General Savings"
            avatar="/avatar-19@2x.png"
            prop1="$500"
          />
        </div>
      </section>
      <ChildrenGoals1 avatar="/avatar-2@2x.png" />
      <div className="w-9 h-9 rounded-scale-06 overflow-hidden shrink-0 hidden flex-row items-center justify-center p-2 box-border z-[6]">
        <img
          className="h-5 w-5 relative overflow-hidden shrink-0"
          alt=""
          src="/edit02.svg"
        />
      </div>
      <BottomNavigationBar avatar="/avatar-2@2x.png" />
      <section className="self-stretch flex flex-row items-start justify-start pt-0 px-4 pb-4 box-border max-w-full shrink-0">
        <div className="flex-1 flex flex-col items-start justify-start gap-[8px] shrink-0 max-w-full">
          <GoalContent avatar="/avatar-2@2x.png" />
          <GoalContent avatar="/avatar-19@2x.png" />
        </div>
      </section>
      <section className="self-stretch flex flex-row items-start justify-start pt-0 px-4 pb-1 box-border max-w-full shrink-0 text-left text-lg text-black-500 font-paragraph-small-bold">
        <div className="flex-1 flex flex-col items-start justify-start gap-[12px] shrink-0 max-w-full">
          <b className="w-[188px] h-7 relative leading-[28px] flex items-center">
            Finished Saving Goals
          </b>
          <div className="self-stretch flex flex-row flex-wrap items-start justify-start [row-gap:20px] text-base text-neutral-900">
            <div className="h-[111px] w-[90.3px] rounded-tl-spacing-x-sm rounded-tr-none rounded-br-none rounded-bl-spacing-x-sm bg-brand-50 box-border flex flex-col items-center justify-center p-4 shrink-0 border-t-[1px] border-solid border-neutral-200 border-b-[1px] border-l-[1px]">
              <img className="w-12 h-12 relative" alt="" src="/-5.svg" />
            </div>
            <div className="flex-1 rounded-tl-none rounded-tr-spacing-md rounded-br-spacing-md rounded-bl-none bg-whitesmoke box-border flex flex-col items-start justify-start py-1.5 pr-3.5 pl-4 gap-[8px] min-w-[176px] shrink-0 border-[1px] border-solid border-neutral-200">
              <div className="self-stretch h-14 flex flex-col items-start justify-start">
                <div className="self-stretch flex-1 flex flex-row items-start justify-start gap-[9.6px]">
                  <div className="self-stretch flex-1 relative leading-[24px] font-medium flex items-center">
                    Fortnite Yearly Subscription
                  </div>
                  <img
                    className="h-[22.4px] w-[22.4px] relative rounded-7xs-6 overflow-hidden shrink-0 object-contain"
                    alt=""
                    src="/avatar-2@2x.png"
                  />
                </div>
                <div className="self-stretch h-8 relative text-5xl tracking-[-0.02em] leading-[32px] font-semibold font-heading-mobile-h6-semi-bold text-black-500 flex items-center shrink-0 whitespace-nowrap">
                  $144
                </div>
              </div>
              <div className="self-stretch h-[31px] flex flex-col items-start justify-start gap-[4px] text-sm text-neutral-800">
                <div className="self-stretch h-[7px] rounded-3xl bg-brand-500 flex flex-row items-start justify-start z-[1]">
                  <div className="h-[7px] w-[239px] relative rounded-spacing-x-big bg-neutral-200 hidden" />
                  <div className="h-[7px] w-[239px] relative rounded-spacing-x-big bg-brand-500 hidden" />
                </div>
                <div className="self-stretch flex-1 flex flex-row items-start justify-between gap-[20px]">
                  <div className="self-stretch w-[136px] relative leading-[20px] flex items-center">
                    Finished on 06/13/24
                  </div>
                  <div className="self-stretch w-[62px] relative leading-[20px] flex items-center">
                    Goal $144
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-xl bg-gray-200 z-[2]" />
      <ChildrenGoals
        prop="/-71.svg"
        teddyBear="Teddy Bear"
        avatar="/avatar-19@2x.png"
        prop1="$50"
        goal50="Goal $50"
      />
    </div>
  );
};

export default ParentsGoalsSeeAll2;
