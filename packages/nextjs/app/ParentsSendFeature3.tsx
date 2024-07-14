import { FunctionComponent } from "react";
import Savings from "../components/Savings";
import HistoryItems from "../components/HistoryItems";

const ParentsSendFeature3: FunctionComponent = () => {
  return (
    <div className="w-full h-[840px] relative rounded-xl bg-base-white overflow-hidden flex flex-col items-start justify-start pt-[5px] px-0 pb-[153px] box-border gap-[24px] leading-[normal] tracking-[normal]">
      <section className="self-stretch bg-gray-100 box-border overflow-hidden flex flex-col items-end justify-start pt-3.5 px-0 pb-0 gap-[24px] shrink-0 max-w-full text-left text-base text-text-default-default font-single-line-body-base border-b-[1px] border-solid border-neutral-100">
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
                  loading="lazy"
                  alt=""
                  src="/icon--mobile-signal.svg"
                />
                <img
                  className="h-[11.8px] w-[17px] relative"
                  loading="lazy"
                  alt=""
                  src="/wifi.svg"
                />
                <img
                  className="self-stretch w-[27.4px] relative max-h-full min-h-[13px]"
                  loading="lazy"
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
          <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-px [row-gap:20px] text-base text-text-neutral-tertiary">
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
      <Savings />
      <section className="self-stretch flex flex-row items-start justify-start py-0 px-4 box-border max-w-full shrink-0 text-left text-lg text-black-500 font-paragraph-small-bold">
        <div className="flex-1 flex flex-col items-start justify-start gap-[12px] shrink-0 max-w-full">
          <b className="self-stretch relative leading-[28px]">
            Savings History
          </b>
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
                  <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[8px]">
                    <img
                      className="h-[22.4px] w-[22.4px] relative rounded-7xs-6 overflow-hidden shrink-0 object-cover"
                      alt=""
                      src="/avatar-4@2x.png"
                    />
                    <div className="flex-1 flex flex-col items-start justify-start py-0 pr-[151px] pl-0 box-border gap-[4px] min-w-[169px]">
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
                <div className="self-stretch rounded-spacing-md bg-success-50 flex flex-col items-start justify-center py-1.5 px-[15px] border-[1px] border-solid border-success-600">
                  <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[8px]">
                    <img
                      className="h-[22.4px] w-[22.4px] relative rounded-7xs-6 overflow-hidden shrink-0 object-cover"
                      alt=""
                      src="/avatar-5@2x.png"
                    />
                    <div className="flex-1 flex flex-col items-start justify-start py-0 pr-28 pl-0 box-border gap-[4px] min-w-[169px]">
                      <b className="w-[103px] h-6 relative leading-[24px] flex items-center">
                        Task Finished
                      </b>
                      <div className="self-stretch h-5 flex flex-row items-center justify-start gap-[4px] text-sm">
                        <img
                          className="h-4 w-4 relative"
                          alt=""
                          src="/-1.svg"
                        />
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
                <div className="self-stretch rounded-spacing-md bg-success-50 flex flex-col items-start justify-center py-1.5 px-[15px] border-[1px] border-solid border-success-600">
                  <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[8px]">
                    <img
                      className="h-[22.4px] w-[22.4px] relative rounded-7xs-6 overflow-hidden shrink-0 object-cover"
                      alt=""
                      src="/avatar-4@2x.png"
                    />
                    <div className="flex-1 flex flex-col items-start justify-start py-0 pr-[150px] pl-0 box-border gap-[4px] min-w-[171px]">
                      <b className="w-[103px] h-6 relative leading-[24px] flex items-center">
                        Task Finished
                      </b>
                      <div className="self-stretch h-5 flex flex-row items-center justify-start gap-[4px] text-sm">
                        <img
                          className="h-4 w-4 relative"
                          alt=""
                          src="/-2.svg"
                        />
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
                <div className="self-stretch rounded-spacing-md bg-success-50 flex flex-col items-start justify-center py-1.5 px-[15px] border-[1px] border-solid border-success-600">
                  <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[8px]">
                    <img
                      className="h-[22.4px] w-[22.4px] relative rounded-7xs-6 overflow-hidden shrink-0 object-cover"
                      alt=""
                      src="/avatar-5@2x.png"
                    />
                    <div className="flex-1 flex flex-col items-start justify-start py-0 pr-[151px] pl-0 box-border gap-[4px] min-w-[169px]">
                      <b className="w-[103px] h-6 relative leading-[24px] flex items-center">
                        Task Finished
                      </b>
                      <div className="self-stretch h-5 flex flex-row items-center justify-start gap-[4px] text-sm">
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
                <HistoryItems
                  avatar="/avatar-4@2x.png"
                  dividedIn4SavingGoals="Divided in 4 saving goals"
                />
                <HistoryItems
                  avatar="/avatar-5@2x.png"
                  dividedIn4SavingGoals="Divided in 2 saving goals"
                />
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[12px]">
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
              <div className="self-stretch flex flex-col items-start justify-start gap-[8px] text-neutral-900">
                <div className="self-stretch rounded-spacing-md bg-success-50 flex flex-col items-start justify-center py-1.5 px-[15px] border-[1px] border-solid border-success-600">
                  <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[8px]">
                    <img
                      className="h-[22.4px] w-[22.4px] relative rounded-7xs-6 overflow-hidden shrink-0 object-cover"
                      alt=""
                      src="/avatar-4@2x.png"
                    />
                    <div className="flex-1 flex flex-col items-start justify-start py-0 pr-[151px] pl-0 box-border gap-[4px] min-w-[169px]">
                      <b className="w-[103px] h-6 relative leading-[24px] flex items-center">
                        Task Finished
                      </b>
                      <div className="self-stretch h-5 flex flex-row items-center justify-start gap-[4px] text-sm">
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
                <div className="self-stretch rounded-spacing-md bg-success-50 flex flex-col items-start justify-center py-1.5 px-[15px] border-[1px] border-solid border-success-600">
                  <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[8px]">
                    <img
                      className="h-[22.4px] w-[22.4px] relative rounded-7xs-6 overflow-hidden shrink-0 object-cover"
                      alt=""
                      src="/avatar-5@2x.png"
                    />
                    <div className="flex-1 flex flex-col items-start justify-start py-0 pr-[151px] pl-0 box-border gap-[4px] min-w-[169px]">
                      <b className="w-[103px] h-6 relative leading-[24px] flex items-center">
                        Task Finished
                      </b>
                      <div className="self-stretch h-5 flex flex-row items-center justify-start gap-[4px] text-sm">
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
                <div className="self-stretch rounded-spacing-md bg-success-50 flex flex-col items-start justify-center py-1.5 px-[15px] border-[1px] border-solid border-success-600">
                  <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[8px]">
                    <img
                      className="h-[22.4px] w-[22.4px] relative rounded-7xs-6 overflow-hidden shrink-0 object-cover"
                      alt=""
                      src="/avatar-4@2x.png"
                    />
                    <div className="flex-1 flex flex-col items-start justify-start py-0 pr-[150px] pl-0 box-border gap-[4px] min-w-[171px]">
                      <b className="w-[103px] h-6 relative leading-[24px] flex items-center">
                        Task Finished
                      </b>
                      <div className="self-stretch h-5 flex flex-row items-center justify-start gap-[4px] text-sm">
                        <img
                          className="h-4 w-4 relative"
                          alt=""
                          src="/-2.svg"
                        />
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
            <div className="self-stretch flex flex-col items-start justify-start gap-[12px]">
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
              <div className="self-stretch flex flex-col items-start justify-start gap-[8px] text-neutral-900">
                <div className="self-stretch rounded-spacing-md bg-error-50 flex flex-col items-start justify-center py-1.5 px-[15px] border-[1px] border-solid border-error-600">
                  <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[8px]">
                    <img
                      className="h-[22.4px] w-[22.4px] relative rounded-7xs-6 overflow-hidden shrink-0 object-cover"
                      alt=""
                      src="/avatar-4@2x.png"
                    />
                    <div className="flex-1 flex flex-col items-start justify-start gap-[4px] min-w-[160px]">
                      <b className="w-[89px] h-6 relative leading-[24px] flex items-center">{`Withdrawal `}</b>
                      <div className="self-stretch h-10 flex flex-row items-start justify-start gap-[4px] text-sm">
                        <img
                          className="h-4 w-4 relative"
                          alt=""
                          src="/-7.svg"
                        />
                        <div className="self-stretch flex-1 relative leading-[20px] font-medium flex items-center">
                          <span>
                            <p className="m-0">Substracted from</p>
                            <p className="m-0">{`Fortnite Yearly Subscription `}</p>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="h-6 w-[45px] relative text-lg tracking-[-0.02em] leading-[24px] font-semibold font-heading-mobile-h6-semi-bold text-black-500 flex items-center">
                      - $144
                    </div>
                  </div>
                </div>
                <div className="self-stretch rounded-spacing-md bg-success-50 flex flex-col items-start justify-center py-1.5 px-[15px] border-[1px] border-solid border-success-600">
                  <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[8px]">
                    <img
                      className="h-[22.4px] w-[22.4px] relative rounded-7xs-6 overflow-hidden shrink-0 object-cover"
                      alt=""
                      src="/avatar-4@2x.png"
                    />
                    <div className="flex-1 flex flex-col items-start justify-start py-0 pr-28 pl-0 box-border gap-[4px] min-w-[169px]">
                      <b className="w-[103px] h-6 relative leading-[24px] flex items-center">
                        Task Finished
                      </b>
                      <div className="self-stretch h-5 flex flex-row items-center justify-start gap-[4px] text-sm">
                        <img
                          className="h-4 w-4 relative"
                          alt=""
                          src="/-1.svg"
                        />
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
                <div className="self-stretch rounded-spacing-md bg-success-50 flex flex-col items-start justify-center py-1.5 px-[15px] border-[1px] border-solid border-success-600">
                  <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[8px]">
                    <img
                      className="h-[22.4px] w-[22.4px] relative rounded-7xs-6 overflow-hidden shrink-0 object-cover"
                      alt=""
                      src="/avatar-5@2x.png"
                    />
                    <div className="flex-1 flex flex-col items-start justify-start py-0 pr-28 pl-0 box-border gap-[4px] min-w-[169px]">
                      <b className="w-[103px] h-6 relative leading-[24px] flex items-center">
                        Task Finished
                      </b>
                      <div className="self-stretch h-5 flex flex-row items-center justify-start gap-[4px] text-sm">
                        <img
                          className="h-4 w-4 relative"
                          alt=""
                          src="/-1.svg"
                        />
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
                <div className="self-stretch rounded-spacing-md bg-success-50 flex flex-col items-start justify-center py-1.5 px-[15px] border-[1px] border-solid border-success-600">
                  <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[8px]">
                    <img
                      className="h-[22.4px] w-[22.4px] relative rounded-7xs-6 overflow-hidden shrink-0 object-cover"
                      alt=""
                      src="/avatar-4@2x.png"
                    />
                    <div className="flex-1 flex flex-col items-start justify-start py-0 pr-[150px] pl-0 box-border gap-[4px] min-w-[171px]">
                      <b className="w-[103px] h-6 relative leading-[24px] flex items-center">
                        Task Finished
                      </b>
                      <div className="self-stretch h-5 flex flex-row items-center justify-start gap-[4px] text-sm">
                        <img
                          className="h-4 w-4 relative"
                          alt=""
                          src="/-2.svg"
                        />
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
        </div>
      </section>
      <footer className="w-full !m-[0] absolute right-[0px] bottom-[0px] left-[0px] bg-gray-100 flex flex-col items-end justify-start pt-3.5 px-4 pb-[3px] box-border gap-[9px] z-[1] text-center text-sm text-text-default-secondary font-paragraph-small-bold">
        <div className="self-stretch flex flex-row items-start justify-between py-1 pr-[17px] pl-[25px] gap-[20px]">
          <div className="flex flex-col items-start justify-start py-0 pr-2 pl-0 gap-[4px] text-brand-500">
            <div className="flex flex-row items-start justify-start py-0 px-2">
              <img
                className="h-6 w-6 relative overflow-hidden shrink-0"
                loading="lazy"
                alt=""
                src="/home03.svg"
              />
            </div>
            <b className="relative leading-[20px] inline-block min-w-[40px]">
              Home
            </b>
          </div>
          <div className="flex flex-col items-start justify-start py-0 pr-2 pl-0 gap-[4px]">
            <div className="flex flex-row items-start justify-start py-0 pr-2 pl-[7px]">
              <img
                className="h-6 w-6 relative overflow-hidden shrink-0"
                loading="lazy"
                alt=""
                src="/flag02.svg"
              />
            </div>
            <b className="relative leading-[20px] inline-block min-w-[38px]">
              Goals
            </b>
          </div>
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
                loading="lazy"
                alt=""
                src="/settings01.svg"
              />
            </div>
            <b className="relative leading-[20px] inline-block min-w-[56px]">
              Settings
            </b>
          </div>
        </div>
        <div className="self-stretch hidden flex-row items-start justify-between gap-[20px] text-xs text-brand-green-500 font-text-xs-light">
          <div className="w-[160.7px] flex flex-row items-center justify-start gap-[20px]">
            <div className="h-[42px] flex flex-col items-center justify-between py-0 px-[5px] box-border">
              <input
                className="m-0 w-[27px] h-[27px] relative overflow-hidden shrink-0"
                type="checkbox"
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
      </footer>
    </div>
  );
};

export default ParentsSendFeature3;
