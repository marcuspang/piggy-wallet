import { FunctionComponent } from "react";
import Inputs5 from "../components/Inputs5";
import ExistingGoals from "../components/ExistingGoals";
import BottomNavigationBar from "../components/BottomNavigationBar";
import GoalContent from "../components/GoalContent";
import ChildrenGoals from "../components/ChildrenGoals";

const ParentsGoalsSeeAll4: FunctionComponent = () => {
  return (
    <div className="w-full h-[840px] relative rounded-xl bg-base-white overflow-hidden flex flex-col items-start justify-start gap-[8px] leading-[normal] tracking-[normal] text-left text-base text-neutral-900 font-paragraph-small-bold">
      <section className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-4 box-border max-w-full shrink-0 text-center text-base text-black-500 font-single-line-body-base">
        <div className="flex-1 bg-gray-100 box-border overflow-hidden flex flex-col items-end justify-start pt-3.5 px-0 pb-0 gap-[14px] shrink-0 max-w-full border-b-[1px] border-solid border-neutral-100">
          <div className="w-[262px] hidden flex-row flex-wrap items-center justify-end gap-[8px] text-left text-text-default-default">
            <div className="h-8 rounded-radius-200 bg-text-brand-on-brand flex flex-row items-center justify-center p-2 box-border">
              <div className="self-stretch relative leading-[100%] flex items-center">
                Link
              </div>
            </div>
            <div className="h-8 rounded-radius-200 flex flex-row items-center justify-center p-2 box-border">
              <div className="self-stretch relative leading-[100%] flex items-center">
                Link
              </div>
            </div>
            <div className="h-8 rounded-radius-200 flex flex-row items-center justify-center p-2 box-border">
              <div className="self-stretch relative leading-[100%] flex items-center">
                Link
              </div>
            </div>
            <div className="h-8 rounded-radius-200 flex flex-row items-center justify-center p-2 box-border">
              <div className="self-stretch relative leading-[100%] flex items-center">
                Link
              </div>
            </div>
            <div className="h-8 rounded-radius-200 flex flex-row items-center justify-center p-2 box-border">
              <div className="self-stretch relative leading-[100%] flex items-center">
                Link
              </div>
            </div>
            <div className="h-8 rounded-radius-200 flex flex-row items-center justify-center p-2 box-border">
              <div className="self-stretch relative leading-[100%] flex items-center">
                Link
              </div>
            </div>
          </div>
          <img
            className="w-10 h-10 relative overflow-hidden shrink-0 hidden"
            alt=""
          />
          <img
            className="w-[172px] h-8 relative hidden"
            alt=""
            src="/notch.svg"
          />
          <div className="self-stretch flex flex-row items-start justify-end py-0 pr-[22px] pl-7 box-border max-w-full text-mid">
            <div className="flex-1 flex flex-row items-end justify-between max-w-full gap-[20px]">
              <div className="w-[54px] rounded-3xl flex flex-row items-start justify-start pt-px px-0 pb-0 box-border">
                <a className="[text-decoration:none] flex-1 relative tracking-[-0.41px] leading-[22px] font-semibold text-[inherit]">
                  9:41
                </a>
              </div>
              <div className="w-[77.4px] flex flex-col items-start justify-end pt-0 px-0 pb-[3px] box-border">
                <div className="self-stretch flex flex-row items-end justify-start gap-[7.5px]">
                  <img
                    className="h-3 w-[18px] relative"
                    alt=""
                    src="/icon--mobile-signal.svg"
                  />
                  <img
                    className="h-[11.8px] w-[17px] relative"
                    alt=""
                    src="/wifi.svg"
                  />
                  <img
                    className="self-stretch w-[27.4px] relative max-h-full min-h-[13px]"
                    alt=""
                    src="/-statusbarbattery.svg"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start max-w-full text-lg font-heading-mobile-h6-semi-bold">
            <div className="flex-1 flex flex-col items-start justify-start gap-[12px] max-w-full">
              <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-6">
                <div className="flex-1 flex flex-row items-start justify-start gap-[8px]">
                  <div className="h-scale-07 w-scale-07 rounded-scale-06 overflow-hidden shrink-0 flex flex-row items-center justify-center py-padding-md px-2 box-border">
                    <img
                      className="h-6 w-6 relative overflow-hidden shrink-0"
                      loading="lazy"
                      alt=""
                      src="/chevronleft.svg"
                    />
                  </div>
                  <div className="flex-1 flex flex-col items-start justify-start pt-2 px-0 pb-0">
                    <div className="self-stretch relative tracking-[-0.02em] leading-[24px] font-medium">
                      Savings Goals
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-row items-start justify-start py-0 pr-5 pl-0 text-left text-base text-text-neutral-tertiary font-paragraph-small-bold">
                <button className="cursor-pointer [border:none] pt-space-100 px-[39px] pb-0.5 bg-[transparent] rounded-t-radius-100 rounded-b-none flex flex-row items-start justify-start border-b-[1px] border-solid border-brand-500">
                  <a className="[text-decoration:none] relative text-base leading-[24px] font-bold font-paragraph-small-bold text-brand-500 text-left inline-block min-w-[52px]">
                    See All
                  </a>
                </button>
                <div className="rounded-t-radius-100 rounded-b-none flex flex-row items-start justify-start pt-space-100 px-12 pb-0.5 border-b-[1px] border-solid border-border-neutral-tertiary">
                  <a className="[text-decoration:none] relative leading-[24px] font-medium text-[inherit] inline-block min-w-[35px]">
                    Matt
                  </a>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-end justify-start gap-[12px] ml-[-59px] text-left text-base text-text-neutral-tertiary font-paragraph-small-bold">
              <div className="flex flex-row items-start justify-end py-0 px-6">
                <div className="h-scale-07 w-scale-07 rounded-scale-06 overflow-hidden shrink-0 flex flex-row items-center justify-center py-padding-md px-2 box-border">
                  <img
                    className="h-6 w-6 relative overflow-hidden shrink-0"
                    loading="lazy"
                    alt=""
                    src="/plus.svg"
                  />
                </div>
              </div>
              <div className="rounded-t-radius-100 rounded-b-none flex flex-row items-start justify-start pt-space-100 px-[47px] pb-0.5 border-b-[1px] border-solid border-border-neutral-tertiary">
                <a className="[text-decoration:none] relative leading-[24px] font-medium text-[inherit] inline-block min-w-[36px]">
                  Lucy
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <b className="relative text-lg leading-[28px] hidden text-black-500 z-[1]">
        Active Saving Goals
      </b>
      <div className="w-9 h-9 rounded-scale-06 overflow-hidden shrink-0 hidden flex-row items-center justify-center p-2 box-border z-[2]">
        <img
          className="h-5 w-5 relative overflow-hidden shrink-0"
          alt=""
          src="/edit02.svg"
        />
      </div>
      <div className="w-[361px] hidden flex-row items-start justify-between max-w-full gap-[0px] [row-gap:20px] z-[3]">
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
                className="h-[22.4px] w-[22.4px] relative rounded-7xs-6 overflow-hidden shrink-0 object-contain"
                alt=""
                src="/avatar-12@2x.png"
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
      <div className="w-[361px] hidden flex-row items-start justify-between max-w-full gap-[0px] [row-gap:20px] z-[4]">
        <div className="self-stretch w-[90.3px] rounded-tl-spacing-md rounded-tr-none rounded-br-none rounded-bl-spacing-md bg-brand-50 box-border flex flex-col items-center justify-center p-4 border-t-[1px] border-solid border-neutral-200 border-b-[1px] border-l-[1px]">
          <img className="w-12 h-12 relative" alt="" src="/-22.svg" />
        </div>
        <div className="w-[271px] rounded-tl-none rounded-tr-spacing-md rounded-br-spacing-md rounded-bl-none bg-whitesmoke box-border flex flex-col items-start justify-center py-1.5 px-[15px] border-[1px] border-solid border-neutral-200">
          <div className="self-stretch flex flex-col items-start justify-start">
            <div className="self-stretch flex flex-row items-center justify-between gap-[20px]">
              <div className="relative leading-[24px] font-medium">
                Lucy’s General Savings
              </div>
              <input
                className="m-0 h-[22.4px] w-[22.4px] relative shadow-[0px_0.7px_2.8px_rgba(12,_12,_13,_0.1),_0px_0.7px_2.8px_rgba(12,_12,_13,_0.05)] rounded-7xs-6 overflow-hidden shrink-0"
                type="checkbox"
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
      <section className="self-stretch flex flex-row items-start justify-start py-0 px-4 box-border max-w-full shrink-0 text-center text-5xl text-neutral-900 font-paragraph-small-bold">
        <div className="flex-1 flex flex-col items-start justify-start pt-0 px-0 pb-0 box-border shrink-0 max-w-full">
          <Inputs5 />
          <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[142px] box-border max-w-full mt-[-198.5px]">
            <div className="flex-1 rounded-spacing-md bg-base-white box-border flex flex-row flex-wrap items-start justify-start py-[22px] px-[23px] min-w-[240px] shrink-0 max-w-full z-[3] border-[1px] border-solid border-border-default-default">
              <img
                className="h-8 w-8 relative overflow-hidden shrink-0 hidden"
                alt=""
                src="/info.svg"
              />
              <div className="flex-1 flex flex-col items-start justify-start gap-[24px] min-w-[160px]">
                <h2 className="m-0 self-stretch relative text-inherit tracking-[-0.02em] leading-[32px] font-semibold font-heading-mobile-h6-semi-bold">
                  Confirm Savings Goal
                </h2>
                <ExistingGoals
                  prop="/-31.svg"
                  campingTrip="Hawaii Vacations"
                  avatar="/avatar-43@2x.png"
                  goalSeparator="$0"
                  autosave5="Autosave $100"
                  goal200="Goal $1,000"
                  propMarginTop="unset"
                  propFlexWrap="unset"
                />
                <div className="self-stretch flex flex-col items-start justify-start gap-[8px] text-left text-base text-neutral-700">
                  <div className="self-stretch flex flex-row items-start justify-center py-0 pr-[65px] pl-0 gap-[8px]">
                    <div className="relative leading-[24px] font-medium">
                      Setting Savings Goal to:
                    </div>
                    <div className="flex flex-row items-center justify-start gap-[4px]">
                      <img
                        className="h-[22.4px] w-[22.4px] relative rounded-7xs-6 overflow-hidden shrink-0 object-cover"
                        loading="lazy"
                        alt=""
                        src="/avatar-52@2x.png"
                      />
                      <div className="relative leading-[24px] font-medium inline-block min-w-[35px]">
                        Matt
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[84px] pl-0 gap-[8px]">
                    <div className="relative leading-[24px] font-medium">
                      Matt’s Weekly Allowance
                    </div>
                    <div className="relative leading-[24px] font-medium inline-block min-w-[34px] whitespace-nowrap">
                      $170
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[142px] pl-0 gap-[8px]">
                    <div className="relative leading-[24px] font-medium inline-block min-w-[76px]">
                      Goal Date
                    </div>
                    <div className="relative leading-[24px] font-medium inline-block min-w-[87px]">
                      09/21/2024
                    </div>
                  </div>
                </div>
                <div className="self-stretch relative text-xs leading-[20px] font-medium text-neutral-500">
                  By adding this new savings goal you will increase Matt’s
                  Weekly Allowance to $270 instead of $170
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
                  <button className="cursor-pointer py-2.5 px-5 bg-base-white self-stretch rounded-radius-200 overflow-hidden flex flex-row items-center justify-center gap-[8px] border-[1px] border-solid border-brand-500">
                    <img
                      className="h-4 w-4 relative overflow-hidden shrink-0 hidden"
                      alt=""
                      src="/star5.svg"
                    />
                    <div className="relative text-base leading-[24px] font-medium font-paragraph-small-bold text-neutral-900 text-left">
                      Edit Savings Goal
                    </div>
                    <img
                      className="h-4 w-4 relative overflow-hidden shrink-0 hidden"
                      alt=""
                      src="/x5.svg"
                    />
                  </button>
                  <button className="cursor-pointer [border:none] p-0 bg-[transparent] self-stretch flex flex-row items-center justify-start gap-[16px]">
                    <div className="h-10 w-[75px] rounded-radius-200 overflow-hidden hidden flex-row items-center justify-center py-space-300 px-[11px] box-border gap-[8px]">
                      <img
                        className="h-4 w-4 relative overflow-hidden shrink-0 hidden min-h-[16px]"
                        alt=""
                        src="/star4.svg"
                      />
                      <div className="self-stretch flex-1 relative text-base leading-[100%] font-single-line-body-base text-text-neutral-default text-left">
                        Cancel
                      </div>
                      <img
                        className="h-4 w-4 relative overflow-hidden shrink-0 hidden min-h-[16px]"
                        alt=""
                        src="/x4.svg"
                      />
                    </div>
                    <div className="rounded-radius-200 bg-brand-500 overflow-hidden flex flex-row items-center justify-center py-2.5 px-[72px] gap-[8px] border-[1px] border-solid border-brand-600">
                      <img
                        className="h-4 w-4 relative overflow-hidden shrink-0 hidden"
                        alt=""
                        src="/star8.svg"
                      />
                      <b className="relative text-base leading-[24px] font-paragraph-small-bold text-text-brand-on-brand text-left">
                        Confirm Savings Goal
                      </b>
                      <img
                        className="h-4 w-4 relative overflow-hidden shrink-0 hidden"
                        alt=""
                        src="/x9.svg"
                      />
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <ExistingGoals
            prop="/-12.svg"
            campingTrip="Camping Trip"
            avatar="/avatar-12@2x.png"
            goalSeparator="$150.02"
            autosave5="Autosave $5"
            goal200="Goal $200"
            propMarginTop="-198.5px"
            propFlexWrap="wrap"
          />
        </div>
      </section>
      <div className="w-9 h-9 rounded-scale-06 overflow-hidden shrink-0 hidden flex-row items-center justify-center p-2 box-border z-[6]">
        <img
          className="h-5 w-5 relative overflow-hidden shrink-0"
          alt=""
          src="/edit02.svg"
        />
      </div>
      <BottomNavigationBar avatar="/avatar-12@2x.png" propHeight="111px" />
      <section className="self-stretch flex flex-row items-start justify-start pt-0 px-4 pb-4 box-border max-w-full shrink-0">
        <div className="flex-1 flex flex-col items-start justify-start gap-[8px] shrink-0 max-w-full">
          <GoalContent avatar="/avatar-12@2x.png" />
          <GoalContent avatar="/avatar-9@2x.png" />
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
                <div className="self-stretch flex-1 flex flex-row items-start justify-start gap-[9.5px]">
                  <div className="self-stretch flex-1 relative leading-[24px] font-medium flex items-center">
                    Fortnite Yearly Subscription
                  </div>
                  <img
                    className="h-[22.4px] w-[22.4px] relative rounded-7xs-6 overflow-hidden shrink-0 object-contain"
                    alt=""
                    src="/avatar-12@2x.png"
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
        avatar="/avatar-9@2x.png"
        prop1="$50"
        goal50="Goal $50"
      />
    </div>
  );
};

export default ParentsGoalsSeeAll4;
