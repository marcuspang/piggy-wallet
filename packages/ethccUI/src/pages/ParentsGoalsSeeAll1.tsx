import { FunctionComponent } from "react";
import ActiveGoalItem1 from "../components/ActiveGoalItem1";
import FrameComponent5 from "../components/FrameComponent5";
import UniversitySavings from "../components/UniversitySavings";
import FinishedSavings from "../components/FinishedSavings";

const ParentsGoalsSeeAll1: FunctionComponent = () => {
  return (
    <div className="w-full h-[840px] relative rounded-xl bg-base-white overflow-hidden flex flex-col items-start justify-start gap-[8px] leading-[normal] tracking-[normal] text-left text-lg text-black-500 font-paragraph-small-bold">
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
                    src="/avatar-11@2x.png"
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
          <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[42px] box-border max-w-full mt-[-97px] text-center text-5xl text-neutral-900 font-heading-mobile-h6-semi-bold">
            <div className="flex-1 rounded-spacing-md bg-base-white box-border flex flex-row flex-wrap items-start justify-start py-[22px] px-[23px] gap-[24px] min-w-[240px] shrink-0 max-w-full z-[3] border-[1px] border-solid border-border-default-default">
              <img
                className="h-8 w-8 relative overflow-hidden shrink-0 hidden"
                alt=""
                src="/info.svg"
              />
              <div className="flex-1 flex flex-col items-start justify-start gap-[24px] min-w-[160px]">
                <h2 className="m-0 self-stretch relative text-inherit tracking-[-0.02em] leading-[32px] font-semibold font-inherit">
                  <p className="m-0">Select one of your children</p>
                  <p className="m-0">to set a new savings goal</p>
                </h2>
                <div className="self-stretch flex flex-col items-start justify-start gap-[12px] text-left text-lg text-neutral-700 font-paragraph-small-bold">
                  <div className="self-stretch flex flex-row items-center justify-between gap-[20px]">
                    <div className="flex flex-row items-center justify-start gap-[4px]">
                      <img
                        className="h-12 w-12 relative rounded-3xs-6 overflow-hidden shrink-0 object-cover min-h-[48px]"
                        loading="lazy"
                        alt=""
                        src="/avatar-17@2x.png"
                      />
                      <div className="flex flex-col items-start justify-start">
                        <div className="relative leading-[28px] font-medium inline-block min-w-[39px]">
                          Matt
                        </div>
                        <div className="relative text-sm leading-[20px] font-medium inline-block min-w-[57px] whitespace-nowrap">
                          $1,800.10
                        </div>
                      </div>
                    </div>
                    <img
                      className="h-6 w-6 relative rounded-14979xl-5 overflow-hidden shrink-0"
                      loading="lazy"
                      alt=""
                      src="/radio-1.svg"
                    />
                  </div>
                  <div className="self-stretch flex flex-row items-center justify-between gap-[20px]">
                    <div className="flex flex-row items-center justify-start gap-[4px]">
                      <img
                        className="h-12 w-12 relative rounded-3xs-6 overflow-hidden shrink-0 object-cover min-h-[48px]"
                        loading="lazy"
                        alt=""
                        src="/avatar-42@2x.png"
                      />
                      <div className="flex flex-col items-start justify-start">
                        <div className="relative leading-[28px] font-medium inline-block min-w-[40px]">
                          Lucy
                        </div>
                        <div className="relative text-sm leading-[20px] font-medium inline-block min-w-[42px] whitespace-nowrap">
                          $1,000
                        </div>
                      </div>
                    </div>
                    <img
                      className="h-6 w-6 relative rounded-14979xl-5 overflow-hidden shrink-0"
                      loading="lazy"
                      alt=""
                      src="/radio-1.svg"
                    />
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
              </div>
            </div>
          </div>
          <ActiveGoalItem1
            mattsGeneralSavings="Lucy’s General Savings"
            avatar="/avatar-32@2x.png"
            goalSeparator="$500"
            autosave50="Autosave $50"
            propMarginTop="-97px"
          />
        </div>
      </section>
      <section className="self-stretch flex flex-row items-start justify-start py-0 px-4 box-border max-w-full shrink-0 text-left text-base text-neutral-900 font-paragraph-small-bold">
        <div className="flex-1 flex flex-row flex-wrap items-start justify-start shrink-0 max-w-full [row-gap:20px]">
          <div className="h-[111px] w-[90.3px] rounded-tl-spacing-md rounded-tr-none rounded-br-none rounded-bl-spacing-md bg-brand-50 box-border flex flex-col items-center justify-center p-4 shrink-0 border-t-[1px] border-solid border-neutral-200 border-b-[1px] border-l-[1px]">
            <img
              className="w-12 h-12 relative"
              loading="lazy"
              alt=""
              src="/-12.svg"
            />
          </div>
          <div className="flex-1 rounded-tl-none rounded-tr-spacing-md rounded-br-spacing-md rounded-bl-none bg-whitesmoke box-border flex flex-col items-start justify-start py-1.5 px-[15px] gap-[8px] min-w-[176px] shrink-0 border-[1px] border-solid border-neutral-200">
            <div className="self-stretch flex flex-col items-start justify-start">
              <div className="self-stretch flex flex-row items-start justify-between gap-[20px]">
                <div className="relative leading-[24px] font-medium inline-block min-w-[101px]">
                  Camping Trip
                </div>
                <img
                  className="h-[22.4px] w-[22.4px] relative rounded-7xs-6 overflow-hidden shrink-0 object-cover"
                  loading="lazy"
                  alt=""
                  src="/avatar-2@2x.png"
                />
              </div>
              <div className="self-stretch relative text-5xl tracking-[-0.02em] leading-[32px] font-semibold font-heading-mobile-h6-semi-bold text-black-500 whitespace-nowrap">
                $150.02
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[4px] text-sm text-neutral-800">
              <div className="self-stretch h-[7px] relative rounded-3xl bg-neutral-200">
                <div className="absolute top-[0px] left-[1px] rounded-spacing-x-big bg-neutral-200 w-full h-full hidden" />
                <div className="absolute top-[calc(50%_-_3.5px)] left-[0px] rounded-spacing-x-big bg-brand-500 w-[179.3px] h-[7px] z-[1]" />
              </div>
              <div className="self-stretch flex flex-row items-start justify-between gap-[20px]">
                <div className="relative leading-[20px] inline-block min-w-[80px]">
                  Autosave $5
                </div>
                <div className="relative leading-[20px] inline-block min-w-[66px]">
                  Goal $200
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="w-9 h-9 rounded-scale-06 overflow-hidden shrink-0 hidden flex-row items-center justify-center p-2 box-border z-[6]">
        <img
          className="h-5 w-5 relative overflow-hidden shrink-0"
          alt=""
          src="/edit02.svg"
        />
      </div>
      <FrameComponent5 />
      <UniversitySavings />
      <FinishedSavings />
      <section className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-xl bg-gray-200 z-[2]" />
      <section className="self-stretch flex flex-row items-start justify-start py-0 px-4 box-border max-w-full shrink-0 text-left text-base text-neutral-900 font-paragraph-small-bold">
        <div className="flex-1 flex flex-row flex-wrap items-start justify-start shrink-0 max-w-full [row-gap:20px]">
          <div className="h-[111px] w-[90.3px] rounded-tl-spacing-x-sm rounded-tr-none rounded-br-none rounded-bl-spacing-x-sm bg-brand-50 box-border flex flex-col items-center justify-center p-4 shrink-0 border-t-[1px] border-solid border-neutral-200 border-b-[1px] border-l-[1px]">
            <img className="w-12 h-12 relative" alt="" src="/-71.svg" />
          </div>
          <div className="flex-1 rounded-tl-none rounded-tr-spacing-md rounded-br-spacing-md rounded-bl-none bg-whitesmoke box-border flex flex-col items-start justify-start py-1.5 pr-3.5 pl-4 gap-[8px] min-w-[176px] shrink-0 border-[1px] border-solid border-neutral-200">
            <div className="self-stretch h-14 flex flex-col items-start justify-start">
              <div className="self-stretch flex-1 flex flex-row items-start justify-between gap-[20px]">
                <div className="self-stretch w-[87px] relative leading-[24px] font-medium flex items-center">
                  Teddy Bear
                </div>
                <img
                  className="h-[22.4px] w-[22.4px] relative rounded-7xs-6 overflow-hidden shrink-0 object-cover"
                  alt=""
                  src="/avatar-32@2x.png"
                />
              </div>
              <div className="self-stretch h-8 relative text-5xl tracking-[-0.02em] leading-[32px] font-semibold font-heading-mobile-h6-semi-bold text-black-500 flex items-center shrink-0 whitespace-nowrap">
                $50
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
                <div className="self-stretch w-[58px] relative leading-[20px] flex items-center">
                  Goal $50
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ParentsGoalsSeeAll1;
