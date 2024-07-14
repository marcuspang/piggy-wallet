import { FunctionComponent } from "react";
import Header5 from "../components/Header5";
import InputField1 from "../components/InputField1";
import ExistingGoals from "../components/ExistingGoals";
import GoalContent from "../components/GoalContent";
import ChildrenGoals from "../components/ChildrenGoals";

const ParentsGoalsSeeAll2: FunctionComponent = () => {
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
                <InputField1 clickIconOnTheRiPlacehold="🏖️" />
                <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
                  <div className="self-stretch relative text-base leading-[24px] font-medium font-paragraph-small-bold text-text-default-default text-left">
                    Add a title
                  </div>
                  <div className="w-60 relative text-base leading-[140%] font-single-line-body-base text-text-default-secondary text-left hidden">
                    Description
                  </div>
                  <div className="self-stretch rounded-radius-200 bg-base-white box-border overflow-hidden flex flex-row items-center justify-start py-2.5 px-[15px] min-w-[240px] border-[1px] border-solid border-border-default-default">
                    <input
                      className="w-full [border:none] [outline:none] font-paragraph-small-bold text-base bg-[transparent] h-6 flex-1 relative leading-[24px] text-neutral-700 text-left inline-block min-w-[169px] p-0"
                      placeholder="Hawaii Vacations"
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
                      className="w-full [border:none] [outline:none] font-paragraph-small-bold text-base bg-[transparent] h-6 flex-1 relative leading-[24px] text-neutral-700 text-left inline-block min-w-[169px] whitespace-nowrap p-0"
                      placeholder="$1,000.00"
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
                      className="w-full [border:none] [outline:none] font-paragraph-small-bold text-base bg-[transparent] h-6 flex-1 relative leading-[24px] text-neutral-700 text-left inline-block min-w-[169px] whitespace-nowrap p-0"
                      placeholder="$100"
                      type="text"
                    />
                  </div>
                  <div className="w-[37px] relative text-base leading-[140%] font-single-line-body-base text-text-default-default text-left hidden">
                    Error
                  </div>
                </div>
              </div>
              <button className="cursor-pointer py-2.5 px-5 bg-brand-500 self-stretch rounded-radius-200 overflow-hidden flex flex-row items-center justify-center gap-[8px] border-[1px] border-solid border-brand-600">
                <img
                  className="h-4 w-4 relative overflow-hidden shrink-0 hidden"
                  alt=""
                  src="/star7.svg"
                />
                <a className="[text-decoration:none] relative text-base leading-[24px] font-bold font-paragraph-small-bold text-text-brand-on-brand text-left inline-block min-w-[69px]">
                  Continue
                </a>
                <img
                  className="h-4 w-4 relative overflow-hidden shrink-0 hidden"
                  alt=""
                  src="/x8.svg"
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
            propMarginTop="-79px"
            propFlexWrap="wrap"
          />
        </div>
      </section>
      <section className="self-stretch h-[115px] flex flex-row items-start justify-start pt-0 pb-[30px] pr-4 pl-0 box-border shrink-0 max-w-full text-left text-base text-neutral-900 font-paragraph-small-bold">
        <footer className="flex-1 flex flex-col items-start justify-start pt-3 px-0 pb-0 box-border max-w-[105%] shrink-0 text-center text-sm text-neutral-500 font-paragraph-small-bold">
          <div className="self-stretch bg-gray-100 flex flex-col items-end justify-start pt-3.5 px-4 pb-[3px] gap-[9px] z-[1]">
            <div className="self-stretch flex flex-row flex-wrap items-start justify-start py-1 pr-[17px] pl-[25px] gap-[52.2px]">
              <div className="flex-1 flex flex-row items-start justify-between min-w-[84px] gap-[20px]">
                <div className="flex flex-col items-start justify-start gap-[4px]">
                  <div className="flex flex-row items-start justify-start py-0 px-2">
                    <img
                      className="h-6 w-6 relative overflow-hidden shrink-0"
                      loading="lazy"
                      alt=""
                      src="/home033.svg"
                    />
                  </div>
                  <a className="[text-decoration:none] relative leading-[20px] font-bold text-[inherit] inline-block min-w-[40px]">
                    Home
                  </a>
                </div>
                <div className="flex flex-col items-start justify-start gap-[4px] text-brand-500">
                  <div className="flex flex-row items-start justify-start py-0 px-[7px]">
                    <img
                      className="h-6 w-6 relative overflow-hidden shrink-0"
                      loading="lazy"
                      alt=""
                      src="/flag022.svg"
                    />
                  </div>
                  <b className="relative leading-[20px] inline-block min-w-[38px]">
                    Goals
                  </b>
                </div>
              </div>
              <div className="flex-1 flex flex-row items-start justify-between min-w-[89px] gap-[20px] text-text-default-secondary">
                <div className="flex flex-col items-start justify-start gap-[4px]">
                  <div className="flex flex-row items-start justify-start py-0 px-[7px]">
                    <img
                      className="h-6 w-6 relative overflow-hidden shrink-0"
                      loading="lazy"
                      alt=""
                      src="/checksquarebroken.svg"
                    />
                  </div>
                  <b className="relative leading-[20px] inline-block min-w-[38px]">
                    Tasks
                  </b>
                </div>
                <div className="flex flex-col items-start justify-start gap-[4px]">
                  <div className="flex flex-row items-start justify-start py-0 px-4">
                    <img
                      className="h-6 w-6 relative overflow-hidden shrink-0"
                      alt=""
                      src="/settings01.svg"
                    />
                  </div>
                  <b className="relative leading-[20px] inline-block min-w-[56px]">
                    Settings
                  </b>
                </div>
              </div>
            </div>
            <div className="self-stretch hidden flex-row items-start justify-between gap-[20px] text-xs text-brand-green-500 font-text-xs-light">
              <div className="w-[160.7px] flex flex-row items-center justify-start gap-[20px]">
                <div className="h-[42px] flex flex-col items-center justify-between py-0 px-[5px] box-border">
                  <img
                    className="w-[27px] h-[27px] relative overflow-hidden shrink-0"
                    alt=""
                    src="/icons.svg"
                  />
                  <div className="w-[50px] h-[9px] relative leading-[16px] flex items-center justify-center shrink-0">
                    Home
                  </div>
                </div>
                <div className="self-stretch hidden flex-col items-center justify-between py-0 px-[5px] text-black-500">
                  <img
                    className="w-[26.1px] h-[27px] relative overflow-hidden shrink-0 hidden"
                    alt=""
                    src="/icongolfclub.svg"
                  />
                  <div className="w-[50px] h-[9px] relative leading-[16px] font-light flex items-center justify-center shrink-0">
                    Lessons
                  </div>
                </div>
              </div>
              <div className="w-[160.7px] flex flex-row items-center justify-end py-0 pr-0 pl-[21px] box-border gap-[20px] text-black-500">
                <div className="h-[42px] flex-1 flex flex-col items-center justify-between py-0 px-[5px] box-border">
                  <img
                    className="w-[27px] h-[27px] relative overflow-hidden shrink-0"
                    alt=""
                    src="/iconbookopen.svg"
                  />
                  <div className="self-stretch h-[9px] relative leading-[16px] font-light flex items-center justify-center shrink-0">
                    Library
                  </div>
                </div>
                <div className="h-[42px] flex-1 flex flex-col items-center justify-between py-0 px-[5px] box-border">
                  <img
                    className="w-[27px] h-[27px] relative overflow-hidden shrink-0"
                    alt=""
                    src="/icongear.svg"
                  />
                  <div className="self-stretch h-[9px] relative leading-[16px] font-light flex items-center justify-center shrink-0">
                    Settings
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-center py-0 pr-5 pl-[22px]">
              <div className="h-1 w-[136.2px] relative rounded bg-gainsboro" />
            </div>
          </div>
        </footer>
        <div className="w-[361px] flex flex-row flex-wrap items-start justify-start max-w-[calc(100%_-_16px)] [row-gap:20px] shrink-0 ml-[-377px]">
          <div className="h-[111px] w-[90.3px] rounded-tl-spacing-md rounded-tr-none rounded-br-none rounded-bl-spacing-md bg-brand-50 box-border flex flex-col items-center justify-center p-4 shrink-0 border-t-[1px] border-solid border-neutral-200 border-b-[1px] border-l-[1px]">
            <img className="w-12 h-12 relative" alt="" src="/-23.svg" />
          </div>
          <div className="flex-1 rounded-tl-none rounded-tr-spacing-md rounded-br-spacing-md rounded-bl-none bg-whitesmoke box-border flex flex-col items-start justify-start py-1.5 px-[15px] gap-[8px] min-w-[176px] shrink-0 border-[1px] border-solid border-neutral-200">
            <div className="self-stretch flex flex-col items-start justify-start">
              <div className="self-stretch flex flex-row items-start justify-between gap-[20px]">
                <div className="relative leading-[24px] font-medium inline-block min-w-[98px]">
                  Playstation 5
                </div>
                <img
                  className="h-[22.4px] w-[22.4px] relative rounded-7xs-6 overflow-hidden shrink-0 object-cover"
                  loading="lazy"
                  alt=""
                  src="/avatar-2@2x.png"
                />
              </div>
              <div className="self-stretch relative text-5xl tracking-[-0.02em] leading-[32px] font-semibold font-heading-mobile-h6-semi-bold text-black-500 whitespace-nowrap">
                $150.05
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[4px] text-sm text-neutral-800">
              <div className="self-stretch h-[7px] relative rounded-3xl bg-neutral-200">
                <div className="absolute top-[0px] left-[0px] rounded-spacing-x-big bg-neutral-200 w-full h-full hidden" />
                <div className="absolute top-[calc(50%_-_3.5px)] left-[0px] rounded-spacing-x-big bg-brand-500 w-[23.9px] h-[7px] z-[1]" />
              </div>
              <div className="self-stretch flex flex-row items-start justify-between gap-[20px]">
                <div className="relative leading-[20px] inline-block min-w-[85px]">
                  Autosave $15
                </div>
                <div className="relative leading-[20px] inline-block min-w-[74px]">
                  Goal $1,500
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
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

export default ParentsGoalsSeeAll2;
