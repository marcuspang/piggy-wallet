import { FunctionComponent } from "react";
import Footer from "~~/components/Footer";
import Header3 from "../components/Header3";

const ChildsTasks1: FunctionComponent = () => {
  return (
    <div className="w-full h-[840px] relative rounded-xl bg-base-white overflow-scroll flex flex-col items-start justify-start pt-0 px-0 pb-[740px] box-border gap-[16px] leading-[normal] tracking-[normal]">
      <Header3
        tasks="Tasks"
        iconButtonSubtleDefaultmdAlignSelf="stretch"
        iconButtonSubtleDefaultmdPosition="relative"
        iconButtonSubtleDefaultmdTop="unset"
        iconButtonSubtleDefaultmdLeft="unset"
        iconButtonSubtleDefaultmdWidth="unset"
      />
      <section className="box-border flex flex-row items-start self-stretch justify-start max-w-full px-4 py-0 text-lg text-left shrink-0 text-black-500 font-paragraph-small-bold">
        <div className="flex-1 flex flex-col items-start justify-start gap-[24px] shrink-0 max-w-full">
          <div className="self-stretch flex flex-col items-start justify-start gap-[12px]">
            <div className="self-stretch flex flex-row items-center justify-start gap-[16px]">
              <b className="relative leading-[28px] inline-block min-w-[121px]">Today’s Tasks</b>
              <div className="box-border flex-row items-center justify-center hidden p-2 overflow-hidden h-9 w-9 rounded-scale-06 shrink-0">
                <img className="relative w-5 h-5 overflow-hidden shrink-0" alt="" src="/edit02.svg" />
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[8px] text-base text-neutral-900">
              <div className="self-stretch flex flex-row items-start justify-between py-0 px-0 gap-[0px] [row-gap:20px]">
                <div className="rounded-tl-spacing-md rounded-tr-none rounded-br-none rounded-bl-spacing-md bg-brand-50 flex flex-col items-center justify-center py-3.5 px-[29px] border-t-[1px] border-solid border-neutral-200 border-b-[1px] border-l-[1px]">
                  <img className="relative w-8 h-8" loading="lazy" alt="" src="/-21.svg" />
                </div>
                <div className="w-full rounded-tl-none rounded-tr-spacing-md rounded-br-spacing-md rounded-bl-none bg-whitesmoke box-border flex flex-col items-start justify-center py-1.5 px-[15px] border-[1px] border-solid border-neutral-200">
                  <div className="self-stretch flex flex-row items-center justify-start gap-[8px]">
                    <div className="flex flex-col items-start justify-start flex-1 py-0 pl-0 pr-5">
                      <div className="relative leading-[24px] font-medium inline-block min-w-[101px]">Walk the dog</div>
                      <div className="relative text-lg tracking-[-0.02em] leading-[24px] font-semibold font-heading-mobile-h6-semi-bold text-black-500 inline-block min-w-[60px]">
                        Earn $2
                      </div>
                    </div>
                    <div className="h-8 w-8 rounded-lg bg-base-white box-border overflow-hidden shrink-0 flex flex-row items-center justify-center border-[1.5px] border-solid border-neutral-400">
                      <img className="relative hidden w-8 h-8 overflow-hidden shrink-0" alt="" src="/check.svg" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-between py-0 px-0 gap-[0px] [row-gap:20px]">
                <div className="rounded-tl-spacing-md rounded-tr-none rounded-br-none rounded-bl-spacing-md bg-brand-50 flex flex-col items-center justify-center py-3.5 px-[29px] border-t-[1px] border-solid border-neutral-200 border-b-[1px] border-l-[1px]">
                  <img className="relative w-8 h-8" loading="lazy" alt="" src="/1.svg" />
                </div>
                <div className="w-full rounded-tl-none rounded-tr-spacing-md rounded-br-spacing-md rounded-bl-none bg-whitesmoke box-border flex flex-col items-start justify-center py-1.5 px-[15px] border-[1px] border-solid border-neutral-200">
                  <div className="self-stretch flex flex-row items-center justify-start gap-[8px]">
                    <div className="flex flex-col items-start justify-start flex-1 py-0 pl-0 pr-5">
                      <div className="relative leading-[24px] font-medium">Do your homework</div>
                      <div className="relative text-lg tracking-[-0.02em] leading-[24px] font-semibold font-heading-mobile-h6-semi-bold text-black-500 inline-block min-w-[72px]">
                        Earn $2.5
                      </div>
                    </div>
                    <div className="h-8 w-8 rounded-lg bg-base-white box-border overflow-hidden shrink-0 flex flex-row items-center justify-center border-[1.5px] border-solid border-neutral-400">
                      <img className="relative hidden w-8 h-8 overflow-hidden shrink-0" alt="" src="/check.svg" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-between py-0 px-0 gap-[0px] [row-gap:20px]">
                <div className="rounded-tl-spacing-md rounded-tr-none rounded-br-none rounded-bl-spacing-md bg-brand-50 flex flex-col items-center justify-center py-3.5 px-[29px] border-t-[1px] border-solid border-neutral-200 border-b-[1px] border-l-[1px]">
                  <img className="relative w-8 h-8" loading="lazy" alt="" src="/-11.svg" />
                </div>
                <div className="w-full rounded-tl-none rounded-tr-spacing-md rounded-br-spacing-md rounded-bl-none bg-whitesmoke box-border flex flex-col items-start justify-center py-1.5 px-[15px] border-[1px] border-solid border-neutral-200">
                  <div className="self-stretch flex flex-row items-center justify-start gap-[8px]">
                    <div className="flex flex-col items-start justify-start flex-1 py-0 pl-0 pr-5">
                      <div className="relative leading-[24px] font-medium inline-block min-w-[103px]">Call grandma</div>
                      <div className="relative text-lg tracking-[-0.02em] leading-[24px] font-semibold font-heading-mobile-h6-semi-bold text-black-500 inline-block min-w-[59px]">
                        Earn $5
                      </div>
                    </div>
                    <div className="h-8 w-8 rounded-lg bg-base-white box-border overflow-hidden shrink-0 flex flex-row items-center justify-center border-[1.5px] border-solid border-neutral-400">
                      <img className="relative hidden w-8 h-8 overflow-hidden shrink-0" alt="" src="/check.svg" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-between py-0 px-0 gap-[0px] [row-gap:20px]">
                <div className="rounded-tl-spacing-md rounded-tr-none rounded-br-none rounded-bl-spacing-md bg-success-300 flex flex-col items-center justify-center py-3.5 px-[29px] border-t-[1px] border-solid border-success-600 border-b-[1px] border-l-[1px]">
                  <img className="relative w-8 h-8" loading="lazy" alt="" src="/-3.svg" />
                </div>
                <div className="w-full rounded-tl-none rounded-tr-spacing-md rounded-br-spacing-md rounded-bl-none bg-success-50 box-border flex flex-col items-start justify-center py-1.5 px-[15px] border-[1px] border-solid border-success-600">
                  <div className="self-stretch flex flex-row items-center justify-start gap-[8px]">
                    <div className="flex flex-col items-start justify-start flex-1 py-0 pl-0 pr-5">
                      <div className="relative leading-[24px] font-medium inline-block min-w-[105px]">
                        Tidy your bed
                      </div>
                      <div className="relative text-lg tracking-[-0.02em] leading-[24px] font-semibold font-heading-mobile-h6-semi-bold text-black-500 inline-block min-w-[76px]">
                        Earned $1
                      </div>
                    </div>
                    <div className="flex flex-row items-center justify-center overflow-hidden rounded-lg bg-success-500">
                      <img className="relative w-8 h-8 overflow-hidden shrink-0" alt="" src="/check1.svg" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[12px] text-base text-neutral-900">
            <div className="self-stretch flex flex-row items-center justify-start gap-[16px] text-lg text-black-500">
              <b className="relative leading-[28px] inline-block min-w-[127px]">Previous Tasks</b>
              <div className="box-border flex-row items-center justify-center hidden p-2 overflow-hidden h-9 w-9 rounded-scale-06 shrink-0">
                <img className="relative w-5 h-5 overflow-hidden shrink-0" alt="" src="/edit02.svg" />
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
              <div className="self-stretch flex flex-row items-center justify-start gap-[16px] text-black-500">
                <b className="relative leading-[24px]">Saturday 12, July</b>
                <div className="box-border flex-row items-center justify-center hidden p-2 overflow-hidden h-9 w-9 rounded-scale-06 shrink-0">
                  <img className="relative w-5 h-5 overflow-hidden shrink-0" alt="" src="/edit02.svg" />
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-between py-0 px-0 gap-[0px] [row-gap:20px]">
                <div className="rounded-tl-spacing-md rounded-tr-none rounded-br-none rounded-bl-spacing-md bg-success-300 flex flex-col items-center justify-center py-3.5 px-[29px] border-t-[1px] border-solid border-success-600 border-b-[1px] border-l-[1px]">
                  <img className="relative w-8 h-8" loading="lazy" alt="" src="/-21.svg" />
                </div>
                <div className="w-full rounded-tl-none rounded-tr-spacing-md rounded-br-spacing-md rounded-bl-none bg-success-50 box-border flex flex-col items-start justify-center py-1.5 px-[15px] border-[1px] border-solid border-success-600">
                  <div className="self-stretch flex flex-row items-center justify-start gap-[8px]">
                    <div className="flex flex-col items-start justify-start flex-1 py-0 pl-0 pr-5">
                      <div className="relative leading-[24px] font-medium inline-block min-w-[101px]">Walk the dog</div>
                      <div className="relative text-lg tracking-[-0.02em] leading-[24px] font-semibold font-heading-mobile-h6-semi-bold text-black-500 inline-block min-w-[79px]">
                        Earned $2
                      </div>
                    </div>
                    <div className="flex flex-row items-center justify-center overflow-hidden rounded-lg bg-success-500">
                      <img className="relative w-8 h-8 overflow-hidden shrink-0" alt="" src="/check1.svg" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-between py-0 px-0 gap-[0px] [row-gap:20px]">
                <div className="rounded-tl-spacing-md rounded-tr-none rounded-br-none rounded-bl-spacing-md bg-success-300 flex flex-col items-center justify-center py-3.5 px-[29px] border-t-[1px] border-solid border-success-600 border-b-[1px] border-l-[1px]">
                  <img className="relative w-8 h-8" loading="lazy" alt="" src="/-3.svg" />
                </div>
                <div className="w-full rounded-tl-none rounded-tr-spacing-md rounded-br-spacing-md rounded-bl-none bg-success-50 box-border flex flex-col items-start justify-center py-1.5 px-[15px] border-[1px] border-solid border-success-600">
                  <div className="self-stretch flex flex-row items-center justify-start gap-[8px]">
                    <div className="flex flex-col items-start justify-start flex-1 py-0 pl-0 pr-5">
                      <div className="relative leading-[24px] font-medium inline-block min-w-[105px]">
                        Tidy your bed
                      </div>
                      <div className="relative text-lg tracking-[-0.02em] leading-[24px] font-semibold font-heading-mobile-h6-semi-bold text-black-500 inline-block min-w-[76px]">
                        Earned $1
                      </div>
                    </div>
                    <div className="flex flex-row items-center justify-center overflow-hidden rounded-lg bg-success-500">
                      <img className="relative w-8 h-8 overflow-hidden shrink-0" alt="" src="/check1.svg" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-between py-0 px-0 gap-[0px] [row-gap:20px]">
                <div className="rounded-tl-spacing-md rounded-tr-none rounded-br-none rounded-bl-spacing-md bg-error-300 flex flex-col items-center justify-center py-3.5 px-[29px] border-t-[1px] border-solid border-error-600 border-b-[1px] border-l-[1px]">
                  <img className="relative w-8 h-8" loading="lazy" alt="" src="/1.svg" />
                </div>
                <div className="w-full rounded-tl-none rounded-tr-spacing-md rounded-br-spacing-md rounded-bl-none bg-error-50 box-border flex flex-col items-start justify-center py-1.5 px-[15px] border-[1px] border-solid border-error-600">
                  <div className="self-stretch flex flex-row items-center justify-start gap-[8px]">
                    <div className="flex flex-col items-start justify-start flex-1 py-0 pl-0 pr-5">
                      <div className="relative leading-[24px] font-medium">Do your homework</div>
                      <div className="relative text-lg tracking-[-0.02em] leading-[24px] font-semibold font-heading-mobile-h6-semi-bold text-black-500 inline-block min-w-[88px]">
                        Missed $2.5
                      </div>
                    </div>
                    <div className="flex flex-row items-center justify-center overflow-hidden rounded-lg bg-error-500">
                      <img className="relative w-8 h-8 overflow-hidden shrink-0" alt="" src="/x6.svg" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
              <div className="self-stretch flex flex-row items-center justify-start gap-[16px] text-black-500">
                <b className="relative leading-[24px] inline-block min-w-[107px]">Friday 11, July</b>
                <div className="box-border flex-row items-center justify-center hidden p-2 overflow-hidden h-9 w-9 rounded-scale-06 shrink-0">
                  <img className="relative w-5 h-5 overflow-hidden shrink-0" alt="" src="/edit02.svg" />
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-between py-0 px-0 gap-[0px] [row-gap:20px]">
                <div className="rounded-tl-spacing-md rounded-tr-none rounded-br-none rounded-bl-spacing-md bg-success-300 flex flex-col items-center justify-center py-3.5 px-[29px] border-t-[1px] border-solid border-success-600 border-b-[1px] border-l-[1px]">
                  <img className="relative w-8 h-8" loading="lazy" alt="" src="/1.svg" />
                </div>
                <div className="w-full rounded-tl-none rounded-tr-spacing-md rounded-br-spacing-md rounded-bl-none bg-success-50 box-border flex flex-col items-start justify-center py-1.5 px-[15px] border-[1px] border-solid border-success-600">
                  <div className="self-stretch flex flex-row items-center justify-start gap-[8px]">
                    <div className="flex flex-col items-start justify-start flex-1 py-0 pl-0 pr-5">
                      <div className="relative leading-[24px] font-medium">Do your homework</div>
                      <div className="relative text-lg tracking-[-0.02em] leading-[24px] font-semibold font-heading-mobile-h6-semi-bold text-black-500 inline-block min-w-[91px]">
                        Earned $2.5
                      </div>
                    </div>
                    <div className="flex flex-row items-center justify-center overflow-hidden rounded-lg bg-success-500">
                      <img
                        className="relative w-8 h-8 overflow-hidden shrink-0"
                        loading="lazy"
                        alt=""
                        src="/check1.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-between py-0 px-0 gap-[0px] [row-gap:20px]">
                <div className="rounded-tl-spacing-md rounded-tr-none rounded-br-none rounded-bl-spacing-md bg-success-300 flex flex-col items-center justify-center py-3.5 px-[29px] border-t-[1px] border-solid border-success-600 border-b-[1px] border-l-[1px]">
                  <img className="relative w-8 h-8" alt="" src="/-3.svg" />
                </div>
                <div className="w-full rounded-tl-none rounded-tr-spacing-md rounded-br-spacing-md rounded-bl-none bg-success-50 box-border flex flex-col items-start justify-center py-1.5 px-[15px] border-[1px] border-solid border-success-600">
                  <div className="self-stretch flex flex-row items-center justify-start gap-[8px]">
                    <div className="flex flex-col items-start justify-start flex-1 py-0 pl-0 pr-5">
                      <div className="w-[105px] h-6 relative leading-[24px] font-medium flex items-center">
                        Tidy your bed
                      </div>
                      <div className="w-[79px] h-6 relative text-lg tracking-[-0.02em] leading-[24px] font-semibold font-heading-mobile-h6-semi-bold text-black-500 flex items-center">
                        Earned $2
                      </div>
                    </div>
                    <div className="flex flex-row items-center justify-center overflow-hidden rounded-lg bg-success-500">
                      <img className="relative w-8 h-8 overflow-hidden shrink-0" alt="" src="/check1.svg" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-between py-0 px-0 gap-[0px] [row-gap:20px]">
                <div className="rounded-tl-spacing-md rounded-tr-none rounded-br-none rounded-bl-spacing-md bg-error-300 flex flex-col items-center justify-center py-3.5 px-[29px] border-t-[1px] border-solid border-error-600 border-b-[1px] border-l-[1px]">
                  <img className="relative w-8 h-8" alt="" src="/-21.svg" />
                </div>
                <div className="w-full rounded-tl-none rounded-tr-spacing-md rounded-br-spacing-md rounded-bl-none bg-error-50 box-border flex flex-col items-start justify-center py-1.5 px-[15px] border-[1px] border-solid border-error-600">
                  <div className="self-stretch flex flex-row items-center justify-start gap-[8px]">
                    <div className="flex flex-col items-start justify-start flex-1 py-0 pl-0 pr-5">
                      <div className="w-[101px] h-6 relative leading-[24px] font-medium flex items-center">
                        Walk the dog
                      </div>
                      <div className="w-[76px] h-6 relative text-lg tracking-[-0.02em] leading-[24px] font-semibold font-heading-mobile-h6-semi-bold text-black-500 flex items-center">
                        Missed $2
                      </div>
                    </div>
                    <div className="flex flex-row items-center justify-center overflow-hidden rounded-lg bg-error-500">
                      <img className="relative w-8 h-8 overflow-hidden shrink-0" alt="" src="/x6.svg" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer
        home03="/home03.svg"
        flag02="/flag02.svg"
        navBarCoachAlignSelf="unset"
        // navBarCoachWidth="100%"
        // navBarCoachMargin="0 !important"
        // navBarCoachPosition="absolute"
        // navBarCoachRight="0px"
        // navBarCoachBottom="0px"
        // navBarCoachLeft="0px"
        // navBarCoachFlex="unset"
      />
    </div>
  );
};

export default ChildsTasks1;
