import Footer from "../../components/Footer";
import HistoryDetailContainer from "../../components/HistoryDetailContainer";
import Inputs6 from "../../components/Inputs6";
import ParentsSendFeature from "~~/app/ParentsSendFeature";
import Card from "~~/components/Card";

const ParentsHomepage = () => {
  return (
    <div className="w-full h-[840px] relative rounded-xl overflow-scroll bg-base-white flex flex-col items-start justify-start pt-[5px] px-0 pb-[125px] box-border gap-[24px] leading-[normal] tracking-[normal]">
      <section className="self-stretch bg-gray-100 box-border flex flex-col items-end justify-start pt-3.5 px-0 pb-0 gap-[24px] shrink-0 max-w-full text-left text-base text-text-default-default font-single-line-body-base border-b-[1px] border-solid border-neutral-100">
        <div className="w-[262px] hidden flex-row flex-wrap items-center justify-end gap-[8px]">
          <div className="box-border flex flex-row items-center justify-center h-8 p-2 rounded-radius-200 bg-text-brand-on-brand">
            <div className="self-stretch relative leading-[100%] flex items-center">Link</div>
          </div>
          <div className="box-border flex flex-row items-center justify-center h-8 p-2 rounded-radius-200">
            <div className="self-stretch relative leading-[100%] flex items-center">Link</div>
          </div>
          <div className="box-border flex flex-row items-center justify-center h-8 p-2 rounded-radius-200">
            <div className="self-stretch relative leading-[100%] flex items-center">Link</div>
          </div>
          <div className="box-border flex flex-row items-center justify-center h-8 p-2 rounded-radius-200">
            <div className="self-stretch relative leading-[100%] flex items-center">Link</div>
          </div>
          <div className="box-border flex flex-row items-center justify-center h-8 p-2 rounded-radius-200">
            <div className="self-stretch relative leading-[100%] flex items-center">Link</div>
          </div>
          <div className="box-border flex flex-row items-center justify-center h-8 p-2 rounded-radius-200">
            <div className="self-stretch relative leading-[100%] flex items-center">Link</div>
          </div>
        </div>
        <img className="relative hidden w-10 h-10 overflow-hidden shrink-0" alt="" />
        <img className="w-[172px] h-8 relative hidden" alt="" src="/notch.svg" />

        <div className="self-stretch flex flex-col items-start justify-start gap-[24px] text-lg text-neutral-700 font-paragraph-small-bold">
          <div className="self-stretch flex flex-col items-start justify-start py-0 px-spacing-md gap-[12px]">
            <div className="flex flex-col items-start self-stretch justify-start rounded-spacing-md">
              <div className="self-stretch flex flex-col items-start justify-start gap-[4px]">
                <a className="[text-decoration:none] relative leading-[28px] font-bold text-[inherit] inline-block min-w-[115px]">
                  Your Balance
                </a>
                <div className="self-stretch flex flex-row flex-wrap items-center justify-start gap-[12px] text-25xl text-black-500 font-heading-mobile-h6-semi-bold">
                  <div className="flex-1 relative tracking-[-0.02em] leading-[48px] font-semibold inline-block min-w-[154px] whitespace-nowrap">
                    $18,000.50
                  </div>
                  <div className="box-border flex-row items-center justify-center hidden p-2 overflow-hidden h-9 w-9 rounded-scale-06 shrink-0">
                    <img className="relative w-5 h-5 overflow-hidden shrink-0" alt="" src="/edit02.svg" />
                  </div>
                  <button className="cursor-pointer py-1.5 px-[7px] bg-base-white w-[70px] rounded-radius-200 box-border overflow-hidden shrink-0 flex flex-row items-center justify-center gap-[8px] border-[1px] border-solid border-brand-500">
                    <img className="relative hidden w-4 h-4 overflow-hidden shrink-0" alt="" src="/star.svg" />
                    <a className="[text-decoration:none] relative text-base leading-[24px] font-medium font-paragraph-small-bold text-neutral-900 text-left inline-block min-w-[54px]">
                      History
                    </a>
                    <img className="relative hidden w-4 h-4 overflow-hidden shrink-0" alt="" src="/x.svg" />
                  </button>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[8px]">
              <Card />
              <button className="cursor-pointer py-2.5 px-[68px] bg-brand-500 rounded-radius-200 overflow-hidden flex flex-row items-center justify-center gap-[8px] border-[1px] border-solid border-brand-600">
                <img className="relative hidden w-4 h-4 overflow-hidden shrink-0" alt="" src="/star2.svg" />
                <b className="relative text-base leading-[24px] inline-block font-paragraph-small-bold text-text-brand-on-brand text-left min-w-[39px]">
                  Send
                </b>
                <img className="relative hidden w-4 h-4 overflow-hidden shrink-0" alt="" src="/x2.svg" />
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
              <div className="relative leading-[24px] font-medium inline-block min-w-[35px]">Matt</div>
            </div>
            <div className="rounded-t-radius-100 rounded-b-none flex flex-row items-center justify-center pt-space-100 px-[47px] pb-0.5 border-b-[1px] border-solid border-border-neutral-tertiary">
              <div className="relative leading-[24px] font-medium inline-block min-w-[36px]">Lucy</div>
            </div>
          </div>
        </div>
      </section>
      <section className="box-border flex flex-row items-start self-stretch justify-start max-w-full px-4 py-0 text-lg text-left shrink-0 text-neutral-700 font-paragraph-small-bold">
        <div className="flex-1 flex flex-col items-start justify-start gap-[12px] shrink-0 max-w-full">
          <div className="self-stretch rounded-spacing-md bg-whitesmoke flex flex-col items-start justify-start py-3.5 px-[15px] gap-[12px] border-[1px] border-solid border-neutral-200">
            <div className="self-stretch flex flex-col items-start justify-start gap-[4px]">
              <b className="relative leading-[28px]">Savings Overview</b>
              <div className="self-stretch relative text-25xl tracking-[-0.02em] leading-[48px] font-semibold font-heading-mobile-h6-semi-bold text-black-500 whitespace-nowrap">
                $2,800.10
              </div>
            </div>
            <div className="relative self-stretch h-px bg-neutral-200" />
            <div className="self-stretch flex flex-col items-start justify-start gap-[8px] text-sm">
              <div className="self-stretch flex flex-row items-center justify-between gap-[20px]">
                <div className="flex flex-row items-center justify-start gap-[4px]">
                  <img
                    className="h-[22.4px] w-[22.4px] relative rounded-7xs-6 overflow-hidden shrink-0 object-cover min-h-[22px]"
                    loading="lazy"
                    alt=""
                    src="/avatar@2x.png"
                  />
                  <div className="relative leading-[20px] font-medium inline-block min-w-[95px]">Matt’s Savings</div>
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
                  <div className="relative leading-[20px] font-medium inline-block min-w-[96px]">Lucy’s Savings</div>
                </div>
                <div className="relative text-xl tracking-[-0.02em] leading-[28px] font-semibold font-heading-mobile-h6-semi-bold text-black-500 inline-block min-w-[54px] whitespace-nowrap">
                  $1,000
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[8px]">
              <button className="cursor-pointer py-1.5 pr-[38px] pl-10 bg-base-white rounded-radius-200 overflow-hidden flex flex-row items-start justify-start gap-[8px] border-[1px] border-solid border-brand-500">
                <img className="relative hidden w-4 h-4 overflow-hidden shrink-0" alt="" src="/star3.svg" />
                <div className="relative text-base leading-[24px] font-medium font-paragraph-small-bold text-neutral-900 text-left inline-block min-w-[80px]">
                  Add Funds
                </div>
                <img className="relative hidden w-4 h-4 overflow-hidden shrink-0" alt="" src="/x3.svg" />
              </button>
              <button className="cursor-pointer py-1.5 pr-[18px] pl-[19px] bg-base-white rounded-radius-200 overflow-hidden flex flex-row items-start justify-start gap-[8px] border-[1px] border-solid border-brand-500">
                <img className="relative hidden w-4 h-4 overflow-hidden shrink-0" alt="" src="/star4.svg" />
                <div className="relative text-base leading-[24px] font-medium font-paragraph-small-bold text-neutral-900 text-left inline-block min-w-[121px]">
                  Withdraw Funds
                </div>
                <img className="relative hidden w-4 h-4 overflow-hidden shrink-0" alt="" src="/x4.svg" />
              </button>
            </div>
          </div>
          <Inputs6 allowanceAmount="$340" actionSeparator="$170" />
        </div>
      </section>
      <section className="box-border flex flex-row items-start self-stretch justify-start max-w-full px-4 py-0 text-lg text-left shrink-0 text-black-500 font-paragraph-small-bold">
        <div className="flex-1 flex flex-col items-start justify-start gap-[12px] shrink-0 max-w-full">
          <b className="self-stretch relative leading-[28px]">Savings History</b>
          <div className="self-stretch flex flex-col items-start justify-start gap-[12px] max-w-full text-base">
            <div className="self-stretch flex flex-col items-start justify-start gap-[12px] max-w-full text-brand-500">
              <div className="self-stretch flex flex-row items-center justify-start gap-[16px]">
                <b className="relative leading-[24px]">
                  <span>Today</span>
                  <span className="text-black-500"> - Sunday 13, July</span>
                </b>
                <div className="box-border flex-row items-center justify-center hidden p-2 overflow-hidden h-9 w-9 rounded-scale-06 shrink-0">
                  <img className="relative w-5 h-5 overflow-hidden shrink-0" alt="" src="/edit02.svg" />
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[8px] max-w-full text-neutral-900">
                <div className="self-stretch rounded-spacing-md bg-success-50 flex flex-col items-start justify-center py-1.5 px-[15px] border-[1px] border-solid border-success-600">
                  <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[8px]">
                    <img
                      className="h-[22.4px] w-[22.4px] relative rounded-7xs-6 overflow-hidden shrink-0 object-cover"
                      loading="lazy"
                      alt=""
                      src="/avatar-4@2x.png"
                    />
                    <div className="flex-1 flex flex-col items-start justify-start py-0 pr-[151px] pl-0 box-border gap-[4px] min-w-[169px]">
                      <b className="relative leading-[24px] inline-block min-w-[103px]">Task Finished</b>
                      <div className="self-stretch h-5 flex flex-row items-center justify-start gap-[4px] text-sm">
                        <img className="relative w-4 h-4" alt="" src="/.svg" />
                        <div className="self-stretch flex-1 relative leading-[20px] font-medium flex items-center">
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
                      <b className="w-[103px] h-6 relative leading-[24px] flex items-center">Task Finished</b>
                      <div className="self-stretch h-5 flex flex-row items-center justify-start gap-[4px] text-sm">
                        <img className="relative w-4 h-4" alt="" src="/-1.svg" />
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
                      <b className="w-[103px] h-6 relative leading-[24px] flex items-center">Task Finished</b>
                      <div className="self-stretch h-5 flex flex-row items-center justify-start gap-[4px] text-sm">
                        <img className="relative w-4 h-4" alt="" src="/-2.svg" />
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
                      <b className="w-[103px] h-6 relative leading-[24px] flex items-center">Task Finished</b>
                      <div className="self-stretch h-5 flex flex-row items-center justify-start gap-[4px] text-sm">
                        <img className="relative w-4 h-4" alt="" src="/.svg" />
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
                <HistoryDetailContainer avatar="/avatar-4@2x.png" dividedIn4SavingGoals="Divided in 4 saving goals" />
                <HistoryDetailContainer avatar="/avatar-33@2x.png" dividedIn4SavingGoals="Divided in 2 saving goals" />
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[12px]">
              <div className="self-stretch h-6 flex flex-row items-center justify-start gap-[16px]">
                <b className="self-stretch w-[132px] relative leading-[24px] flex items-center">Saturday 12, July</b>
                <div className="box-border flex-row items-center justify-center hidden p-2 overflow-hidden h-9 w-9 rounded-scale-06 shrink-0">
                  <img className="relative w-5 h-5 overflow-hidden shrink-0" alt="" src="/edit02.svg" />
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
                      <b className="w-[103px] h-6 relative leading-[24px] flex items-center">Task Finished</b>
                      <div className="self-stretch h-5 flex flex-row items-center justify-start gap-[4px] text-sm">
                        <img className="relative w-4 h-4" alt="" src="/.svg" />
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
                      <b className="w-[103px] h-6 relative leading-[24px] flex items-center">Task Finished</b>
                      <div className="self-stretch h-5 flex flex-row items-center justify-start gap-[4px] text-sm">
                        <img className="relative w-4 h-4" alt="" src="/.svg" />
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
                      <b className="w-[103px] h-6 relative leading-[24px] flex items-center">Task Finished</b>
                      <div className="self-stretch h-5 flex flex-row items-center justify-start gap-[4px] text-sm">
                        <img className="relative w-4 h-4" alt="" src="/-2.svg" />
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
                <b className="self-stretch w-[107px] relative leading-[24px] flex items-center">Friday 11, July</b>
                <div className="box-border flex-row items-center justify-center hidden p-2 overflow-hidden h-9 w-9 rounded-scale-06 shrink-0">
                  <img className="relative w-5 h-5 overflow-hidden shrink-0" alt="" src="/edit02.svg" />
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
                        <img className="relative w-4 h-4" alt="" src="/-7.svg" />
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
                      <b className="w-[103px] h-6 relative leading-[24px] flex items-center">Task Finished</b>
                      <div className="self-stretch h-5 flex flex-row items-center justify-start gap-[4px] text-sm">
                        <img className="relative w-4 h-4" alt="" src="/-1.svg" />
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
                        <img className="relative w-4 h-4" alt="" src="/-7.svg" />
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
                      <b className="w-[103px] h-6 relative leading-[24px] flex items-center">Task Finished</b>
                      <div className="self-stretch h-5 flex flex-row items-center justify-start gap-[4px] text-sm">
                        <img className="relative w-4 h-4" alt="" src="/-1.svg" />
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
                      <b className="w-[103px] h-6 relative leading-[24px] flex items-center">Task Finished</b>
                      <div className="self-stretch h-5 flex flex-row items-center justify-start gap-[4px] text-sm">
                        <img className="relative w-4 h-4" alt="" src="/-2.svg" />
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
              <img className="relative hidden w-4 h-4 overflow-hidden shrink-0" alt="" src="/star5.svg" />
              <div className="self-stretch w-[116px] relative leading-[24px] font-medium inline-block">
                See Full History
              </div>
              <img className="relative hidden w-4 h-4 overflow-hidden shrink-0" alt="" src="/x5.svg" />
            </div>
          </div>
        </div>
      </section>
      <Footer
        home03="/home03.svg"
        flag02="/flag02.svg"
        navBarCoachAlignSelf="unset"
        navBarCoachWidth="100%"
        navBarCoachMargin="0 !important"
        navBarCoachPosition="absolute"
        navBarCoachRight="0px"
        navBarCoachBottom="0px"
        navBarCoachLeft="0px"
        navBarCoachFlex="unset"
      />
    </div>
  );
};

export default ParentsHomepage;
