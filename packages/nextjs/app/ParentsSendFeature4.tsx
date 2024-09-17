import { FunctionComponent } from "react";
import Header2 from "../components/Header2";
import SavingsOverview from "../components/SavingsOverview";
import HistoryItems from "../components/HistoryItems";
import NavBarParent2 from "../components/NavBarParent2";
import KeyboardIPhone from "../components/KeyboardIPhone";

const ParentsSendFeature4: FunctionComponent = () => {
  return (
    <div className="w-full relative rounded-xl bg-base-white overflow-hidden flex flex-col items-start justify-start pt-[5px] px-0 pb-0 box-border gap-[24px] leading-[normal] tracking-[normal]">
      <Header2 />
      <section className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-xl bg-gray-200 z-[2]" />
      <section className="self-stretch flex flex-col items-start justify-start gap-[11px] max-w-full text-left text-base text-neutral-700 font-paragraph-small-bold">
        <SavingsOverview />
        <div className="self-stretch h-[291px] flex flex-col items-start justify-start pt-[162px] px-4 pb-0 box-border relative max-w-full">
          <div className="w-[361px] !m-[0] absolute top-[1px] left-[calc(50%_-_180.5px)] rounded-spacing-md bg-whitesmoke box-border flex flex-col items-start justify-start py-1.5 px-[15px] gap-[12px] border-[1px] border-solid border-neutral-200">
            <div className="self-stretch flex flex-row items-start justify-between gap-[20px]">
              <div className="flex flex-col items-start justify-start pt-1 px-0 pb-0">
                <div className="relative leading-[24px] font-medium">
                  Weekly Allowance
                </div>
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
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[12px] shrink-0 max-w-full text-lg text-black-500">
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
                          <img
                            className="h-4 w-4 relative"
                            alt=""
                            src="/.svg"
                          />
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
                          <img
                            className="h-4 w-4 relative"
                            alt=""
                            src="/.svg"
                          />
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
                          <img
                            className="h-4 w-4 relative"
                            alt=""
                            src="/.svg"
                          />
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
          <NavBarParent2 />
          <KeyboardIPhone />
        </div>
      </section>
    </div>
  );
};

export default ParentsSendFeature4;
