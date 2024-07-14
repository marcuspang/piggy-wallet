import { FunctionComponent } from "react";
import Inputs2 from "../components/Inputs2";
import NavBarParent1 from "../components/NavBarParent1";
import Card from "../components/Card";

const ParentsSendFeature1: FunctionComponent = () => {
  return (
    <div className="w-full h-[840px] relative rounded-xl bg-base-white overflow-hidden leading-[normal] tracking-[normal] text-left text-base text-neutral-700 font-paragraph-small-bold">
      <div className="absolute top-[285px] left-[16px] rounded-spacing-md bg-whitesmoke box-border w-[361px] h-[253px] hidden border-[1px] border-solid border-neutral-200">
        <b className="absolute top-[16px] left-[16px] text-lg leading-[28px]">
          Savings Overview
        </b>
        <div className="absolute top-[48px] left-[16px] text-25xl tracking-[-0.02em] leading-[48px] font-semibold font-heading-mobile-h6-semi-bold text-black-500 flex items-center w-[329px] h-12 whitespace-nowrap">
          $2,800.10
        </div>
        <div className="absolute top-[108px] left-[16px] bg-neutral-200 w-[329px] h-px" />
        <div className="w-full absolute top-[121px] left-[16px] flex flex-col items-start justify-start gap-[8px] text-sm">
          <div className="self-stretch flex flex-row items-center justify-between gap-[20px]">
            <div className="flex flex-row items-center justify-start gap-[4px]">
              <img
                className="h-[22.4px] w-[22.4px] relative rounded-7xs-6 overflow-hidden shrink-0 object-cover min-h-[22px]"
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
                alt=""
                src="/avatar-14@2x.png"
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
        <div className="w-full absolute top-[197px] left-[16px] rounded-radius-200 bg-base-white box-border overflow-hidden flex flex-row items-center justify-center py-1.5 px-space-200 gap-[8px] text-neutral-900 border-[1px] border-solid border-brand-500">
          <img
            className="h-4 w-4 relative overflow-hidden shrink-0 hidden"
            alt=""
            src="/star3.svg"
          />
          <div className="relative leading-[24px] font-medium pl-5 pr-5">
            Add Funds
          </div>
          <img
            className="h-4 w-4 relative overflow-hidden shrink-0 hidden"
            alt=""
            src="/x3.svg"
          />
        </div>
        <div className="w-full absolute top-[197px] left-[184.5px] rounded-radius-200 bg-base-white box-border overflow-hidden flex flex-row items-center justify-center py-1.5 px-space-200 gap-[8px] text-neutral-900 border-[1px] border-solid border-brand-500">
          <img
            className="h-4 w-4 relative overflow-hidden shrink-0 hidden"
            alt=""
            src="/star4.svg"
          />
          <div className="relative leading-[24px] font-medium inline-block min-w-[121px]">
            Withdraw Funds
          </div>
          <img
            className="h-4 w-4 relative overflow-hidden shrink-0 hidden"
            alt=""
            src="/x4.svg"
          />
        </div>
      </div>
      <section className="absolute top-[550px] left-[16px] rounded-spacing-md bg-whitesmoke box-border w-[361px] flex flex-col items-start justify-start py-1.5 px-[15px] gap-[12px] text-left text-lg text-neutral-700 font-paragraph-small-bold border-[1px] border-solid border-neutral-200">
        <div className="self-stretch flex flex-row items-start justify-between gap-[20px]">
          <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
            <b className="relative leading-[28px]">Weekly Allowance</b>
          </div>
          <div className="relative text-5xl tracking-[-0.02em] leading-[32px] font-semibold font-heading-mobile-h6-semi-bold text-black-500 inline-block min-w-[51px] whitespace-nowrap">
            $340
          </div>
        </div>
        <div className="self-stretch h-px relative bg-neutral-200" />
        <div className="self-stretch flex flex-col items-start justify-start gap-[8px] text-sm">
          <div className="self-stretch flex flex-row items-center justify-between gap-[20px]">
            <div className="flex flex-row items-center justify-start gap-[4px]">
              <img
                className="h-[22.4px] w-[22.4px] relative rounded-7xs-6 overflow-hidden shrink-0 object-cover min-h-[22px]"
                alt=""
                src="/avatar@2x.png"
              />
              <div className="relative leading-[20px] font-medium inline-block min-w-[111px]">
                Matt’s Allowance
              </div>
            </div>
            <div className="flex flex-row items-center justify-start gap-[8px] text-xl text-black-500 font-heading-mobile-h6-semi-bold">
              <div className="relative tracking-[-0.02em] leading-[28px] font-semibold inline-block min-w-[38px] whitespace-nowrap">
                $170
              </div>
              <div className="h-6 w-6 rounded-[21.33px] bg-base-white box-border overflow-hidden shrink-0 flex flex-row items-center justify-center pt-[5.3px] px-[5px] pb-[5.4px] border-[0.7px] border-solid border-neutral-200">
                <img
                  className="h-[13.3px] w-[13.3px] relative overflow-hidden shrink-0"
                  loading="lazy"
                  alt=""
                  src="/edit02-1.svg"
                />
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-center justify-between gap-[20px]">
            <div className="flex flex-row items-center justify-start gap-[4px]">
              <img
                className="h-[22.4px] w-[22.4px] relative rounded-7xs-6 overflow-hidden shrink-0 object-cover min-h-[22px]"
                alt=""
                src="/avatar-3@2x.png"
              />
              <div className="relative leading-[20px] font-medium inline-block min-w-[112px]">
                Lucy’s Allowance
              </div>
            </div>
            <div className="flex flex-row items-center justify-start gap-[8px] text-xl text-black-500 font-heading-mobile-h6-semi-bold">
              <div className="relative tracking-[-0.02em] leading-[28px] font-semibold inline-block min-w-[38px] whitespace-nowrap">
                $170
              </div>
              <div className="h-6 w-6 rounded-[21.33px] bg-base-white box-border overflow-hidden shrink-0 flex flex-row items-center justify-center pt-[5.3px] px-[5px] pb-[5.4px] border-[0.7px] border-solid border-neutral-200">
                <img
                  className="h-[13.3px] w-[13.3px] relative overflow-hidden shrink-0"
                  alt=""
                  src="/edit02-1.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="absolute top-[711px] left-[16px] w-[361px] flex flex-col items-start justify-start gap-[12px] max-w-full text-left text-lg text-black-500 font-paragraph-small-bold">
        <b className="self-stretch relative leading-[28px]">Savings History</b>
        <div className="self-stretch flex flex-col items-start justify-start gap-[12px] max-w-full text-base">
          <div className="self-stretch flex flex-col items-start justify-start gap-[12px] max-w-full text-brand-500">
            <div className="self-stretch flex flex-row items-center justify-start gap-[16px]">
              <b className="relative leading-[24px]">
                <span>Today</span>
                <span className="text-black-500"> - Sunday 13, July</span>
              </b>
              <div className="h-9 w-9 rounded-scale-06 overflow-hidden shrink-0 hidden flex-row items-center justify-center p-2 box-border">
                <img
                  className="h-5 w-5 relative overflow-hidden shrink-0"
                  alt=""
                  src="/edit02.svg"
                />
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[8px] max-w-full text-neutral-900">
              <div className="self-stretch rounded-spacing-md bg-success-50 flex flex-col items-start justify-center py-1.5 px-[15px] border-[1px] border-solid border-success-600">
                <div className="self-stretch flex flex-row items-start justify-start gap-[8px]">
                  <img
                    className="h-[22.4px] w-[22.4px] relative rounded-7xs-6 overflow-hidden shrink-0 object-cover"
                    alt=""
                    src="/avatar-4@2x.png"
                  />
                  <div className="flex-1 flex flex-col items-start justify-start py-0 pr-[151px] pl-0 gap-[4px]">
                    <b className="relative leading-[24px] inline-block min-w-[103px]">
                      Task Finished
                    </b>
                    <div className="flex flex-row items-center justify-start gap-[4px] text-sm">
                      <img
                        className="h-4 w-4 relative"
                        loading="lazy"
                        alt=""
                        src="/.svg"
                      />
                      <div className="relative leading-[20px] font-medium inline-block min-w-[88px]">
                        Walk the dog
                      </div>
                    </div>
                  </div>
                  <div className="relative text-lg tracking-[-0.02em] leading-[24px] font-semibold font-heading-mobile-h6-semi-bold text-black-500 inline-block min-w-[31px]">
                    + $2
                  </div>
                </div>
              </div>
              <div className="self-stretch h-16 rounded-spacing-md bg-success-50 box-border flex flex-col items-start justify-center py-spacing-x-sm px-[15px] border-[1px] border-solid border-success-600">
                <div className="self-stretch flex-1 flex flex-row items-start justify-start gap-[8px]">
                  <img
                    className="h-[22.4px] w-[22.4px] relative rounded-7xs-6 overflow-hidden shrink-0 object-cover"
                    alt=""
                    src="/avatar-5@2x.png"
                  />
                  <div className="self-stretch flex-1 flex flex-col items-start justify-start py-0 pr-28 pl-0 gap-[4px]">
                    <b className="w-[103px] h-6 relative leading-[24px] flex items-center">
                      Task Finished
                    </b>
                    <div className="self-stretch flex-1 flex flex-row items-center justify-start gap-[4px] text-sm">
                      <img className="h-4 w-4 relative" alt="" src="/-1.svg" />
                      <div className="self-stretch flex-1 relative leading-[20px] font-medium flex items-center">
                        Do your homework
                      </div>
                    </div>
                  </div>
                  <div className="h-6 w-[31px] relative text-lg tracking-[-0.02em] leading-[24px] font-semibold font-heading-mobile-h6-semi-bold text-black-500 flex items-center">
                    + $2
                  </div>
                </div>
              </div>
              <div className="self-stretch h-16 rounded-spacing-md bg-success-50 box-border flex flex-col items-start justify-center py-spacing-x-sm px-[15px] border-[1px] border-solid border-success-600">
                <div className="self-stretch flex-1 flex flex-row items-start justify-start gap-[8px]">
                  <img
                    className="h-[22.4px] w-[22.4px] relative rounded-7xs-6 overflow-hidden shrink-0 object-cover"
                    alt=""
                    src="/avatar-4@2x.png"
                  />
                  <div className="self-stretch flex-1 flex flex-col items-start justify-start py-0 pr-[150px] pl-0 gap-[4px]">
                    <b className="w-[103px] h-6 relative leading-[24px] flex items-center">
                      Task Finished
                    </b>
                    <div className="self-stretch flex-1 flex flex-row items-center justify-start gap-[4px] text-sm">
                      <img className="h-4 w-4 relative" alt="" src="/-2.svg" />
                      <div className="self-stretch flex-1 relative leading-[20px] font-medium flex items-center">
                        Tidy your bed
                      </div>
                    </div>
                  </div>
                  <div className="h-6 w-7 relative text-lg tracking-[-0.02em] leading-[24px] font-semibold font-heading-mobile-h6-semi-bold text-black-500 flex items-center">
                    + $1
                  </div>
                </div>
              </div>
              <div className="self-stretch h-16 rounded-spacing-md bg-success-50 box-border flex flex-col items-start justify-center py-spacing-x-sm px-[15px] border-[1px] border-solid border-success-600">
                <div className="self-stretch flex-1 flex flex-row items-start justify-start gap-[8px]">
                  <img
                    className="h-[22.4px] w-[22.4px] relative rounded-7xs-6 overflow-hidden shrink-0 object-cover"
                    alt=""
                    src="/avatar-5@2x.png"
                  />
                  <div className="self-stretch flex-1 flex flex-col items-start justify-start py-0 pr-[151px] pl-0 gap-[4px]">
                    <b className="w-[103px] h-6 relative leading-[24px] flex items-center">
                      Task Finished
                    </b>
                    <div className="self-stretch flex-1 flex flex-row items-center justify-start gap-[4px] text-sm">
                      <img className="h-4 w-4 relative" alt="" src="/.svg" />
                      <div className="self-stretch flex-1 relative leading-[20px] font-medium flex items-center">
                        Walk the dog
                      </div>
                    </div>
                  </div>
                  <div className="h-6 w-[31px] relative text-lg tracking-[-0.02em] leading-[24px] font-semibold font-heading-mobile-h6-semi-bold text-black-500 flex items-center">
                    + $2
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-center max-w-full">
                <div className="flex-1 rounded-spacing-md bg-success-50 box-border flex flex-col items-start justify-center py-1.5 px-[15px] max-w-full border-[1px] border-solid border-success-600">
                  <div className="self-stretch flex flex-row items-start justify-start gap-[8px]">
                    <img
                      className="h-[22.4px] w-[22.4px] relative rounded-7xs-6 overflow-hidden shrink-0 object-cover"
                      alt=""
                      src="/avatar-4@2x.png"
                    />
                    <div className="flex-1 flex flex-col items-start justify-start py-0 pr-[29px] pl-0 gap-[8px]">
                      <div className="self-stretch flex flex-col items-start justify-start gap-[4px]">
                        <b className="self-stretch h-6 relative leading-[24px] flex items-center">
                          Weekly Allowance Received
                        </b>
                        <div className="self-stretch h-5 relative text-sm leading-[20px] font-medium flex items-center">
                          Divided in 4 saving goals
                        </div>
                      </div>
                      <div className="w-[145px] flex flex-row items-center justify-start gap-[4px] text-sm text-neutral-700">
                        <div className="h-5 flex-1 relative leading-[20px] font-medium flex items-center">
                          View more details
                        </div>
                        <img
                          className="h-6 w-6 relative overflow-hidden shrink-0 object-contain"
                          alt=""
                          src="/chevronleft@2x.png"
                        />
                      </div>
                    </div>
                    <div className="h-6 w-[47px] relative text-lg tracking-[-0.02em] leading-[24px] font-semibold font-heading-mobile-h6-semi-bold text-black-500 flex items-center">
                      + $170
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-center max-w-full">
                <div className="flex-1 rounded-spacing-md bg-success-50 box-border flex flex-col items-start justify-center py-1.5 px-[15px] max-w-full border-[1px] border-solid border-success-600">
                  <div className="self-stretch flex flex-row items-start justify-start gap-[8px]">
                    <img
                      className="h-[22.4px] w-[22.4px] relative rounded-7xs-6 overflow-hidden shrink-0 object-cover"
                      alt=""
                      src="/avatar-5@2x.png"
                    />
                    <div className="flex-1 flex flex-col items-start justify-start py-0 pr-[29px] pl-0 gap-[8px]">
                      <div className="self-stretch flex flex-col items-start justify-start gap-[4px]">
                        <b className="self-stretch h-6 relative leading-[24px] flex items-center">
                          Weekly Allowance Received
                        </b>
                        <div className="self-stretch h-5 relative text-sm leading-[20px] font-medium flex items-center">
                          Divided in 2 saving goals
                        </div>
                      </div>
                      <div className="w-[145px] flex flex-row items-center justify-start gap-[4px] text-sm text-neutral-700">
                        <div className="h-5 flex-1 relative leading-[20px] font-medium flex items-center">
                          View more details
                        </div>
                        <img
                          className="h-6 w-6 relative overflow-hidden shrink-0 object-contain"
                          alt=""
                          src="/chevronleft@2x.png"
                        />
                      </div>
                    </div>
                    <div className="h-6 w-[47px] relative text-lg tracking-[-0.02em] leading-[24px] font-semibold font-heading-mobile-h6-semi-bold text-black-500 flex items-center">
                      + $170
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch h-[244px] flex flex-col items-start justify-start gap-[12px]">
            <div className="self-stretch h-6 flex flex-row items-center justify-start gap-[16px]">
              <b className="self-stretch w-[132px] relative leading-[24px] flex items-center">
                Saturday 12, July
              </b>
              <div className="h-9 w-9 rounded-scale-06 overflow-hidden shrink-0 hidden flex-row items-center justify-center p-2 box-border">
                <img
                  className="h-5 w-5 relative overflow-hidden shrink-0"
                  alt=""
                  src="/edit02.svg"
                />
              </div>
            </div>
            <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-[8px] text-neutral-900">
              <div className="self-stretch flex-1 rounded-spacing-md bg-success-50 flex flex-col items-start justify-center py-spacing-x-sm px-[15px] border-[1px] border-solid border-success-600">
                <div className="self-stretch flex-1 flex flex-row items-start justify-start gap-[8px]">
                  <img
                    className="h-[22.4px] w-[22.4px] relative rounded-7xs-6 overflow-hidden shrink-0 object-cover"
                    alt=""
                    src="/avatar-4@2x.png"
                  />
                  <div className="self-stretch flex-1 flex flex-col items-start justify-start py-0 pr-[151px] pl-0 gap-[4px]">
                    <b className="w-[103px] h-6 relative leading-[24px] flex items-center">
                      Task Finished
                    </b>
                    <div className="self-stretch flex-1 flex flex-row items-center justify-start gap-[4px] text-sm">
                      <img className="h-4 w-4 relative" alt="" src="/.svg" />
                      <div className="self-stretch flex-1 relative leading-[20px] font-medium flex items-center">
                        Walk the dog
                      </div>
                    </div>
                  </div>
                  <div className="h-6 w-[31px] relative text-lg tracking-[-0.02em] leading-[24px] font-semibold font-heading-mobile-h6-semi-bold text-black-500 flex items-center">
                    + $2
                  </div>
                </div>
              </div>
              <div className="self-stretch flex-1 rounded-spacing-md bg-success-50 flex flex-col items-start justify-center py-spacing-x-sm px-[15px] border-[1px] border-solid border-success-600">
                <div className="self-stretch flex-1 flex flex-row items-start justify-start gap-[8px]">
                  <img
                    className="h-[22.4px] w-[22.4px] relative rounded-7xs-6 overflow-hidden shrink-0 object-cover"
                    alt=""
                    src="/avatar-5@2x.png"
                  />
                  <div className="self-stretch flex-1 flex flex-col items-start justify-start py-0 pr-[151px] pl-0 gap-[4px]">
                    <b className="w-[103px] h-6 relative leading-[24px] flex items-center">
                      Task Finished
                    </b>
                    <div className="self-stretch flex-1 flex flex-row items-center justify-start gap-[4px] text-sm">
                      <img className="h-4 w-4 relative" alt="" src="/.svg" />
                      <div className="self-stretch flex-1 relative leading-[20px] font-medium flex items-center">
                        Walk the dog
                      </div>
                    </div>
                  </div>
                  <div className="h-6 w-[31px] relative text-lg tracking-[-0.02em] leading-[24px] font-semibold font-heading-mobile-h6-semi-bold text-black-500 flex items-center">
                    + $2
                  </div>
                </div>
              </div>
              <div className="self-stretch flex-1 rounded-spacing-md bg-success-50 flex flex-col items-start justify-center py-spacing-x-sm px-[15px] border-[1px] border-solid border-success-600">
                <div className="self-stretch flex-1 flex flex-row items-start justify-start gap-[8px]">
                  <img
                    className="h-[22.4px] w-[22.4px] relative rounded-7xs-6 overflow-hidden shrink-0 object-cover"
                    alt=""
                    src="/avatar-4@2x.png"
                  />
                  <div className="self-stretch flex-1 flex flex-col items-start justify-start py-0 pr-[150px] pl-0 gap-[4px]">
                    <b className="w-[103px] h-6 relative leading-[24px] flex items-center">
                      Task Finished
                    </b>
                    <div className="self-stretch flex-1 flex flex-row items-center justify-start gap-[4px] text-sm">
                      <img className="h-4 w-4 relative" alt="" src="/-2.svg" />
                      <div className="self-stretch flex-1 relative leading-[20px] font-medium flex items-center">
                        Tidy your bed
                      </div>
                    </div>
                  </div>
                  <div className="h-6 w-7 relative text-lg tracking-[-0.02em] leading-[24px] font-semibold font-heading-mobile-h6-semi-bold text-black-500 flex items-center">
                    + $1
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch h-[336px] flex flex-col items-start justify-start gap-[12px]">
            <div className="self-stretch h-6 flex flex-row items-center justify-start gap-[16px]">
              <b className="self-stretch w-[107px] relative leading-[24px] flex items-center">
                Friday 11, July
              </b>
              <div className="h-9 w-9 rounded-scale-06 overflow-hidden shrink-0 hidden flex-row items-center justify-center p-2 box-border">
                <img
                  className="h-5 w-5 relative overflow-hidden shrink-0"
                  alt=""
                  src="/edit02.svg"
                />
              </div>
            </div>
            <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-[8px] text-neutral-900">
              <Inputs2 propFlex="1" />
              <div className="self-stretch h-16 rounded-spacing-md bg-success-50 box-border flex flex-col items-start justify-center py-spacing-x-sm px-[15px] border-[1px] border-solid border-success-600">
                <div className="self-stretch flex-1 flex flex-row items-start justify-start gap-[8px]">
                  <img
                    className="h-[22.4px] w-[22.4px] relative rounded-7xs-6 overflow-hidden shrink-0 object-cover"
                    alt=""
                    src="/avatar-4@2x.png"
                  />
                  <div className="self-stretch flex-1 flex flex-col items-start justify-start py-0 pr-28 pl-0 gap-[4px]">
                    <b className="w-[103px] h-6 relative leading-[24px] flex items-center">
                      Task Finished
                    </b>
                    <div className="self-stretch flex-1 flex flex-row items-center justify-start gap-[4px] text-sm">
                      <img className="h-4 w-4 relative" alt="" src="/-1.svg" />
                      <div className="self-stretch flex-1 relative leading-[20px] font-medium flex items-center">
                        Do your homework
                      </div>
                    </div>
                  </div>
                  <div className="h-6 w-[31px] relative text-lg tracking-[-0.02em] leading-[24px] font-semibold font-heading-mobile-h6-semi-bold text-black-500 flex items-center">
                    + $2
                  </div>
                </div>
              </div>
              <div className="self-stretch h-16 rounded-spacing-md bg-success-50 box-border flex flex-col items-start justify-center py-spacing-x-sm px-[15px] border-[1px] border-solid border-success-600">
                <div className="self-stretch flex-1 flex flex-row items-start justify-start gap-[8px]">
                  <img
                    className="h-[22.4px] w-[22.4px] relative rounded-7xs-6 overflow-hidden shrink-0 object-cover"
                    alt=""
                    src="/avatar-5@2x.png"
                  />
                  <div className="self-stretch flex-1 flex flex-col items-start justify-start py-0 pr-28 pl-0 gap-[4px]">
                    <b className="w-[103px] h-6 relative leading-[24px] flex items-center">
                      Task Finished
                    </b>
                    <div className="self-stretch flex-1 flex flex-row items-center justify-start gap-[4px] text-sm">
                      <img className="h-4 w-4 relative" alt="" src="/-1.svg" />
                      <div className="self-stretch flex-1 relative leading-[20px] font-medium flex items-center">
                        Do your homework
                      </div>
                    </div>
                  </div>
                  <div className="h-6 w-[31px] relative text-lg tracking-[-0.02em] leading-[24px] font-semibold font-heading-mobile-h6-semi-bold text-black-500 flex items-center">
                    + $2
                  </div>
                </div>
              </div>
              <div className="self-stretch h-16 rounded-spacing-md bg-success-50 box-border flex flex-col items-start justify-center py-spacing-x-sm px-[15px] border-[1px] border-solid border-success-600">
                <div className="self-stretch flex-1 flex flex-row items-start justify-start gap-[8px]">
                  <img
                    className="h-[22.4px] w-[22.4px] relative rounded-7xs-6 overflow-hidden shrink-0 object-cover"
                    alt=""
                    src="/avatar-4@2x.png"
                  />
                  <div className="self-stretch flex-1 flex flex-col items-start justify-start py-0 pr-[150px] pl-0 gap-[4px]">
                    <b className="w-[103px] h-6 relative leading-[24px] flex items-center">
                      Task Finished
                    </b>
                    <div className="self-stretch flex-1 flex flex-row items-center justify-start gap-[4px] text-sm">
                      <img className="h-4 w-4 relative" alt="" src="/-2.svg" />
                      <div className="self-stretch flex-1 relative leading-[20px] font-medium flex items-center">
                        Tidy your bed
                      </div>
                    </div>
                  </div>
                  <div className="h-6 w-7 relative text-lg tracking-[-0.02em] leading-[24px] font-semibold font-heading-mobile-h6-semi-bold text-black-500 flex items-center">
                    + $1
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch h-12 rounded-radius-200 bg-base-white box-border overflow-hidden shrink-0 flex flex-row items-center justify-center py-space-300 px-5 gap-[8px] text-neutral-900 border-[1px] border-solid border-brand-500">
            <img
              className="h-4 w-4 relative overflow-hidden shrink-0 hidden"
              alt=""
              src="/star5.svg"
            />
            <div className="self-stretch w-[116px] relative leading-[24px] font-medium inline-block">
              See Full History
            </div>
            <img
              className="h-4 w-4 relative overflow-hidden shrink-0 hidden"
              alt=""
              src="/x5.svg"
            />
          </div>
        </div>
      </section>
      <section className="absolute top-[5px] left-[0px] bg-gray-100 box-border w-full overflow-hidden flex flex-col items-end justify-start pt-3.5 px-0 pb-0 gap-[24px] max-w-full text-left text-base text-text-default-default font-single-line-body-base border-b-[1px] border-solid border-neutral-100">
        <div className="w-[262px] hidden flex-row flex-wrap items-center justify-end gap-[8px]">
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
        <div className="self-stretch flex flex-row items-start justify-end py-0 pr-[22px] pl-7 box-border max-w-full text-center text-mid text-black-500">
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
        <div className="self-stretch flex flex-col items-start justify-start gap-[24px] text-lg text-neutral-700 font-paragraph-small-bold">
          <div className="self-stretch flex flex-col items-start justify-start py-0 px-spacing-md gap-[12px]">
            <div className="self-stretch rounded-spacing-md flex flex-col items-start justify-start">
              <div className="self-stretch flex flex-col items-start justify-start gap-[4px]">
                <a className="[text-decoration:none] relative leading-[28px] font-bold text-[inherit] inline-block min-w-[115px]">
                  Your Balance
                </a>
                <div className="self-stretch flex flex-row flex-wrap items-center justify-start gap-[12px] text-25xl text-black-500 font-heading-mobile-h6-semi-bold">
                  <div className="flex-1 relative tracking-[-0.02em] leading-[48px] font-semibold inline-block min-w-[154px] whitespace-nowrap">
                    $18,000.50
                  </div>
                  <div className="h-9 w-9 rounded-scale-06 overflow-hidden shrink-0 hidden flex-row items-center justify-center p-2 box-border">
                    <img
                      className="h-5 w-5 relative overflow-hidden shrink-0"
                      alt=""
                      src="/edit02.svg"
                    />
                  </div>
                  <button className="cursor-pointer py-1.5 px-[7px] bg-base-white w-[70px] rounded-radius-200 box-border overflow-hidden shrink-0 flex flex-row items-center justify-center gap-[8px] border-[1px] border-solid border-brand-500">
                    <img
                      className="h-4 w-4 relative overflow-hidden shrink-0 hidden"
                      alt=""
                      src="/star.svg"
                    />
                    <a className="[text-decoration:none] relative text-base leading-[24px] font-medium font-paragraph-small-bold text-neutral-900 text-left inline-block min-w-[54px]">
                      History
                    </a>
                    <img
                      className="h-4 w-4 relative overflow-hidden shrink-0 hidden"
                      alt=""
                      src="/x.svg"
                    />
                  </button>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[8px]">
              <button className="cursor-pointer py-2.5 px-[57px] bg-brand-500 rounded-radius-200 overflow-hidden flex flex-row items-center justify-center gap-[8px] border-[1px] border-solid border-brand-600">
                <img
                  className="h-4 w-4 relative overflow-hidden shrink-0 hidden"
                  alt=""
                  src="/star1.svg"
                />
                <b className="relative text-base leading-[24px] inline-block font-paragraph-small-bold text-text-brand-on-brand text-left min-w-[60px]">
                  Deposit
                </b>
                <img
                  className="h-4 w-4 relative overflow-hidden shrink-0 hidden"
                  alt=""
                  src="/x1.svg"
                />
              </button>
              <button className="cursor-pointer py-2.5 px-[68px] bg-brand-500 rounded-radius-200 overflow-hidden flex flex-row items-center justify-center gap-[8px] border-[1px] border-solid border-brand-600">
                <img
                  className="h-4 w-4 relative overflow-hidden shrink-0 hidden"
                  alt=""
                  src="/star2.svg"
                />
                <b className="relative text-base leading-[24px] inline-block font-paragraph-small-bold text-text-brand-on-brand text-left min-w-[39px]">
                  Send
                </b>
                <img
                  className="h-4 w-4 relative overflow-hidden shrink-0 hidden"
                  alt=""
                  src="/x2.svg"
                />
              </button>
            </div>
          </div>
          <div className="flex flex-row items-start justify-start pt-0 px-0 pb-px [row-gap:20px] text-base text-text-neutral-tertiary">
            <button className="cursor-pointer [border:none] pt-space-100 px-[39px] pb-0.5 bg-[transparent] rounded-t-radius-100 rounded-b-none flex flex-row items-center justify-center border-b-[1px] border-solid border-brand-500">
              <a className="[text-decoration:none] relative text-base leading-[24px] font-bold font-paragraph-small-bold text-brand-500 text-left inline-block min-w-[52px]">
                See All
              </a>
            </button>
            <div className="rounded-t-radius-100 rounded-b-none flex flex-row items-center justify-center pt-space-100 px-12 pb-0.5 border-b-[1px] border-solid border-border-neutral-tertiary">
              <div className="relative leading-[24px] font-medium inline-block min-w-[35px]">
                Matt
              </div>
            </div>
            <div className="rounded-t-radius-100 rounded-b-none flex flex-row items-center justify-center pt-space-100 px-[47px] pb-0.5 border-b-[1px] border-solid border-border-neutral-tertiary">
              <div className="relative leading-[24px] font-medium inline-block min-w-[36px]">
                Lucy
              </div>
            </div>
          </div>
        </div>
      </section>
      <NavBarParent1 />
      <section className="absolute top-[0px] left-[0px] rounded-xl bg-gray-200 w-full h-full z-[2]" />
      <Card />
    </div>
  );
};

export default ParentsSendFeature1;
