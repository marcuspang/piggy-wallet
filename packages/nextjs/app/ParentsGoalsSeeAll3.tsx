import { FunctionComponent } from "react";
import Header5 from "../components/Header5";
import InputField1 from "../components/InputField1";
import ExistingGoals from "../components/ExistingGoals";
import BottomNavigationBar from "../components/BottomNavigationBar";
import GoalContent from "../components/GoalContent";
import ChildrenGoals from "../components/ChildrenGoals";

const ParentsGoalsSeeAll3: FunctionComponent = () => {
  return (
    <div className="w-full h-[840px] relative rounded-xl bg-base-white overflow-hidden flex flex-col items-start justify-start gap-[4px] leading-[normal] tracking-[normal] text-left text-lg text-black-500 font-paragraph-small-bold">
      <Header5 savingsGoals="Savings Goals" />
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
              <img
                className="h-[22.4px] w-[22.4px] relative rounded-7xs-6 overflow-hidden shrink-0 object-cover"
                alt=""
                src="/avatar-2@2x.png"
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
      <div className="w-[361px] hidden flex-row items-start justify-between max-w-full gap-[0px] [row-gap:20px] z-[4] text-base text-neutral-900">
        <div className="self-stretch w-[90.3px] rounded-tl-spacing-md rounded-tr-none rounded-br-none rounded-bl-spacing-md bg-brand-50 box-border flex flex-col items-center justify-center p-4 border-t-[1px] border-solid border-neutral-200 border-b-[1px] border-l-[1px]">
          <img className="w-12 h-12 relative" alt="" src="/-22.svg" />
        </div>
        <div className="w-[271px] rounded-tl-none rounded-tr-spacing-md rounded-br-spacing-md rounded-bl-none bg-whitesmoke box-border flex flex-col items-start justify-center py-1.5 px-[15px] border-[1px] border-solid border-neutral-200">
          <div className="self-stretch flex flex-col items-start justify-start">
            <div className="self-stretch flex flex-row items-center justify-between gap-[20px]">
              <div className="relative leading-[24px] font-medium">
                Lucy’s General Savings
              </div>
              <img
                className="h-[22.4px] w-[22.4px] relative rounded-7xs-6 overflow-hidden shrink-0 object-cover"
                alt=""
                src="/avatar-19@2x.png"
              />
            </div>
            <div className="self-stretch relative text-5xl tracking-[-0.02em] leading-[32px] font-semibold font-heading-mobile-h6-semi-bold text-black-500 whitespace-nowrap">
              $500
            </div>
            <div className="relative text-sm leading-[20px] text-neutral-800 inline-block min-w-[88px]">
              Autosave $50
            </div>
          </div>
        </div>
      </div>
      <section className="self-stretch flex flex-row items-start justify-start pt-0 px-4 pb-1 box-border max-w-full shrink-0">
        <div className="flex-1 flex flex-col items-start justify-start shrink-0 max-w-full">
          <div className="self-stretch rounded-spacing-md bg-base-white box-border flex flex-row flex-wrap items-start justify-start py-[22px] px-[23px] gap-[24px] min-w-[240px] z-[3] border-[1px] border-solid border-border-default-default">
            <img
              className="h-8 w-8 relative overflow-hidden shrink-0 hidden"
              alt=""
              src="/info.svg"
            />
            <form className="m-0 flex-1 flex flex-col items-start justify-start gap-[24px] min-w-[160px]">
              <h3 className="m-0 self-stretch relative text-5xl tracking-[-0.02em] leading-[32px] font-semibold font-heading-mobile-h6-semi-bold text-neutral-900 text-center">
                <p className="m-0">{`Add Matt’s new `}</p>
                <p className="m-0">savings goal information</p>
              </h3>
              <div className="self-stretch flex flex-col items-start justify-start gap-[12px]">
                <InputField1 clickIconOnTheRiPlacehold="Click icon on the right" />
                <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
                  <div className="self-stretch relative text-base leading-[24px] font-medium font-paragraph-small-bold text-text-default-default text-left">
                    Add a title
                  </div>
                  <div className="w-60 relative text-base leading-[140%] font-single-line-body-base text-text-default-secondary text-left hidden">
                    Description
                  </div>
                  <div className="self-stretch rounded-radius-200 bg-base-white box-border overflow-hidden flex flex-row items-center justify-start py-2.5 px-[15px] min-w-[240px] border-[1px] border-solid border-border-default-default">
                    <input
                      className="w-full [border:none] [outline:none] font-paragraph-small-bold text-base bg-[transparent] h-6 flex-1 relative leading-[24px] text-border-disabled-default text-left inline-block min-w-[169px] p-0"
                      placeholder="Clean your bedroom"
                      type="text"
                    />
                  </div>
                  <div className="w-[37px] relative text-base leading-[140%] font-single-line-body-base text-text-default-default text-left hidden">
                    Error
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
                  <div className="self-stretch relative text-base leading-[24px] font-medium font-paragraph-small-bold text-text-default-default text-left">
                    Insert goal amount
                  </div>
                  <div className="w-60 relative text-base leading-[140%] font-single-line-body-base text-text-default-secondary text-left hidden">
                    Description
                  </div>
                  <div className="self-stretch rounded-radius-200 bg-base-white box-border overflow-hidden flex flex-row items-center justify-start py-2.5 px-[15px] min-w-[240px] border-[1px] border-solid border-border-default-default">
                    <input
                      className="w-full [border:none] [outline:none] font-paragraph-small-bold text-base bg-[transparent] h-6 flex-1 relative leading-[24px] text-border-disabled-default text-left inline-block min-w-[169px] whitespace-nowrap p-0"
                      placeholder="$123.45"
                      type="text"
                    />
                  </div>
                  <div className="w-[37px] relative text-base leading-[140%] font-single-line-body-base text-text-default-default text-left hidden">
                    Error
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
                  <div className="self-stretch relative text-base leading-[24px] font-medium font-paragraph-small-bold text-text-default-default text-left">
                    Insert autosave amount
                  </div>
                  <div className="w-60 relative text-base leading-[140%] font-single-line-body-base text-text-default-secondary text-left hidden">
                    Description
                  </div>
                  <div className="self-stretch rounded-radius-200 bg-base-white box-border overflow-hidden flex flex-row items-center justify-start py-2.5 px-[15px] min-w-[240px] border-[1px] border-solid border-border-default-default">
                    <input
                      className="w-full [border:none] [outline:none] font-paragraph-small-bold text-base bg-[transparent] h-6 flex-1 relative leading-[24px] text-border-disabled-default text-left inline-block min-w-[169px] whitespace-nowrap p-0"
                      placeholder="$123.45"
                      type="text"
                    />
                  </div>
                  <div className="w-[37px] relative text-base leading-[140%] font-single-line-body-base text-text-default-default text-left hidden">
                    Error
                  </div>
                </div>
              </div>
              <button className="cursor-pointer py-2.5 px-5 bg-border-default-default self-stretch rounded-radius-200 overflow-hidden flex flex-row items-center justify-center gap-[8px] border-[1px] border-solid border-border-disabled-default">
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
            </form>
          </div>
          <ExistingGoals
            prop="/-12.svg"
            campingTrip="Camping Trip"
            avatar="/avatar-2@2x.png"
            goalSeparator="$150.02"
            autosave5="Autosave $5"
            goal200="Goal $200"
          />
        </div>
      </section>
      <BottomNavigationBar avatar="/avatar-2@2x.png" propHeight="115px" />
      <div className="w-9 h-9 rounded-scale-06 overflow-hidden shrink-0 hidden flex-row items-center justify-center p-2 box-border z-[7]">
        <img
          className="h-5 w-5 relative overflow-hidden shrink-0"
          alt=""
          src="/edit02.svg"
        />
      </div>
      <section className="self-stretch flex flex-row items-start justify-start pt-0 px-4 pb-5 box-border max-w-full shrink-0">
        <div className="flex-1 flex flex-col items-start justify-start gap-[8px] shrink-0 max-w-full">
          <GoalContent avatar="/avatar-2@2x.png" />
          <GoalContent avatar="/avatar-19@2x.png" />
        </div>
      </section>
      <div className="w-[220px] h-9 flex flex-row items-start justify-start pt-0 px-4 pb-2 box-border shrink-0">
        <b className="self-stretch flex-1 relative leading-[28px] flex items-center shrink-0">
          Finished Saving Goals
        </b>
      </div>
      <div className="w-[361px] h-[201px] relative rounded-spacing-md bg-whitesmoke box-border hidden max-w-full z-[10] text-neutral-700 border-[1px] border-solid border-neutral-200">
        <b className="absolute top-[16px] left-[16px] leading-[28px]">
          Savings Overview
        </b>
        <div className="absolute top-[48px] left-[16px] text-25xl tracking-[-0.02em] leading-[48px] font-semibold font-heading-mobile-h6-semi-bold text-black-500 flex items-center w-[329px] h-12 whitespace-nowrap">
          $2,800.10
        </div>
        <div className="absolute top-[108px] left-[16px] bg-neutral-200 w-[329px] h-px" />
        <div className="w-full absolute top-[121px] left-[16px] flex flex-col items-start justify-start gap-[8px] text-sm">
          <div className="self-stretch flex flex-row items-center justify-between gap-[20px]">
            <div className="flex flex-row items-center justify-start gap-[4px]">
              <input
                className="m-0 h-[22.4px] w-[22.4px] relative rounded-7xs-6 overflow-hidden shrink-0 min-h-[22px]"
                type="checkbox"
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
              <input
                className="m-0 h-[22.4px] w-[22.4px] relative shadow-[0px_0.7px_2.8px_rgba(12,_12,_13,_0.1),_0px_0.7px_2.8px_rgba(12,_12,_13,_0.05)] rounded-7xs-6 overflow-hidden shrink-0 min-h-[22px]"
                type="checkbox"
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
      <ChildrenGoals
        prop="/-5.svg"
        teddyBear="Fortnite Yearly Subscription"
        avatar="/avatar-2@2x.png"
        prop1="$144"
        goal50="Goal $144"
      />
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

export default ParentsGoalsSeeAll3;
