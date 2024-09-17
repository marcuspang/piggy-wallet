import { FunctionComponent } from "react";
import Header2 from "../components/Header2";
import HistoryDetailContainer from "../components/HistoryDetailContainer";
import EditDescription from "../components/EditDescription";

const ParentsHomeSeeAll2: FunctionComponent = () => {
  return (
    <div className="w-full relative rounded-xl bg-base-white overflow-hidden flex flex-row items-start justify-start pt-[5px] pb-[579px] pr-4 pl-0 box-border leading-[normal] tracking-[normal] text-left text-base text-neutral-700 font-paragraph-small-bold">
      <div className="h-[253px] w-[361px] relative rounded-spacing-md bg-whitesmoke box-border hidden max-w-full z-[1] border-[1px] border-solid border-neutral-200">
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
                src="/avatar-171@2x.png"
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
          <div className="relative leading-[24px] font-medium inline-block min-w-[80px]">
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
      <Header2 navigationPillListAlignSelf="unset" navigationPillListFlex="1" />
      <section className="h-64 w-[361px] flex flex-col items-start justify-start pt-[255px] px-0 pb-0 box-border max-w-full ml-[-377px] text-left text-lg text-black-500 font-paragraph-small-bold">
        <div className="self-stretch flex flex-col items-start justify-start gap-[12px] max-w-full shrink-0">
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
                      src="/avatar-33@2x.png"
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
                      src="/avatar-33@2x.png"
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
                <HistoryDetailContainer
                  avatar="/avatar-4@2x.png"
                  dividedIn4SavingGoals="Divided in 4 saving goals"
                />
                <HistoryDetailContainer
                  avatar="/avatar-33@2x.png"
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
                      src="/avatar-33@2x.png"
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
                <div className="self-stretch rounded-spacing-md bg-error-50 flex flex-col items-start justify-center py-1.5 px-[15px] border-[1px] border-solid border-error-600">
                  <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[8px]">
                    <img
                      className="h-[22.4px] w-[22.4px] relative rounded-7xs-6 overflow-hidden shrink-0 object-cover"
                      alt=""
                      src="/avatar-33@2x.png"
                    />
                    <div className="flex-1 flex flex-col items-start justify-start gap-[4px] min-w-[164px]">
                      <b className="w-[89px] h-6 relative leading-[24px] flex items-center">{`Withdrawal `}</b>
                      <div className="self-stretch h-5 flex flex-row items-start justify-start gap-[4px] text-sm">
                        <img
                          className="h-4 w-4 relative"
                          alt=""
                          src="/-7.svg"
                        />
                        <div className="self-stretch flex-1 relative leading-[20px] font-medium flex items-center">
                          Subtracted from Teddy Bear
                        </div>
                      </div>
                    </div>
                    <div className="h-6 w-[38px] relative text-lg tracking-[-0.02em] leading-[24px] font-semibold font-heading-mobile-h6-semi-bold text-black-500 flex items-center">
                      - $50
                    </div>
                  </div>
                </div>
                <div className="self-stretch rounded-spacing-md bg-success-50 flex flex-col items-start justify-center py-1.5 px-[15px] border-[1px] border-solid border-success-600">
                  <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[8px]">
                    <img
                      className="h-[22.4px] w-[22.4px] relative rounded-7xs-6 overflow-hidden shrink-0 object-cover"
                      alt=""
                      src="/avatar-33@2x.png"
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
      <section className="w-full !m-[0] absolute right-[0px] bottom-[0px] left-[0px] bg-gray-100 flex flex-col items-end justify-start pt-3.5 px-4 pb-[3px] box-border gap-[9px] z-[1] text-center text-sm text-brand-500 font-paragraph-small-bold">
        <div className="self-stretch flex flex-row flex-wrap items-start justify-start py-1 pr-[17px] pl-[25px] gap-[52.2px]">
          <div className="flex-1 flex flex-row items-start justify-between min-w-[84px] gap-[20px]">
            <div className="flex flex-col items-start justify-start gap-[4px]">
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
            <div className="flex flex-col items-start justify-start gap-[4px] text-text-default-secondary">
              <div className="flex flex-row items-start justify-start py-0 px-[7px]">
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
      </section>
      <section className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-xl bg-gray-200 z-[2]" />
      <section className="w-[361px] !m-[0] absolute top-[238px] left-[16px] flex flex-row items-start justify-start max-w-full text-left text-base text-neutral-700 font-paragraph-small-bold">
        <div className="w-full !m-[0] absolute right-[0px] bottom-[-85px] left-[0px] rounded-spacing-md bg-whitesmoke box-border flex flex-col items-start justify-start py-1.5 px-[15px] gap-[12px] border-[1px] border-solid border-neutral-200">
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
                  src="/avatar-171@2x.png"
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
        <div className="flex-1 rounded-spacing-md bg-base-white box-border flex flex-row flex-wrap items-start justify-start py-[22px] px-[23px] gap-[24px] min-w-[240px] max-w-full z-[3] text-text-default-default font-single-line-body-base border-[1px] border-solid border-border-default-default">
          <img
            className="h-8 w-8 relative overflow-hidden shrink-0 hidden"
            alt=""
            src="/info.svg"
          />
          <div className="flex-1 flex flex-col items-start justify-start gap-[24px] min-w-[160px]">
            <EditDescription />
            <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
              <div className="self-stretch relative leading-[24px] font-medium font-paragraph-small-bold">
                New Weekly Allowance Amount
              </div>
              <div className="w-60 relative leading-[140%] text-text-default-secondary hidden">
                Description
              </div>
              <div className="self-stretch rounded-radius-200 bg-base-white box-border overflow-hidden flex flex-row items-center justify-start py-2.5 px-[15px] min-w-[240px] border-[1px] border-solid border-border-default-default">
                <input
                  className="w-full [border:none] [outline:none] font-paragraph-small-bold text-base bg-[transparent] h-6 flex-1 relative leading-[24px] text-neutral-400 text-left inline-block min-w-[169px] whitespace-nowrap p-0"
                  placeholder="$123.45"
                  type="text"
                />
              </div>
              <div className="w-[37px] relative leading-[140%] hidden">
                Error
              </div>
            </div>
            <button className="cursor-pointer py-2.5 px-5 bg-border-default-default self-stretch rounded-radius-200 overflow-hidden flex flex-row items-center justify-center gap-[8px] border-[1px] border-solid border-border-disabled-default">
              <img
                className="h-4 w-4 relative overflow-hidden shrink-0 hidden"
                alt=""
                src="/star9.svg"
              />
              <b className="relative text-base leading-[24px] inline-block font-paragraph-small-bold text-border-disabled-default text-left min-w-[63px]">
                Confirm
              </b>
              <img
                className="h-4 w-4 relative overflow-hidden shrink-0 hidden"
                alt=""
                src="/x10.svg"
              />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ParentsHomeSeeAll2;
