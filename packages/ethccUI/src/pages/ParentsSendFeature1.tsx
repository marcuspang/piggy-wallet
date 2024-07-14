import { FunctionComponent } from "react";
import Header from "../components/Header";
import Inputs3 from "../components/Inputs3";
import Inputs2 from "../components/Inputs2";
import FrameComponent1 from "../components/FrameComponent1";
import Inputs1 from "../components/Inputs1";
import NavBarParent from "../components/NavBarParent";

const ParentsSendFeature: FunctionComponent = () => {
  return (
    <div className="w-full h-[840px] relative rounded-xl bg-base-white overflow-hidden flex flex-col items-start justify-start pt-[5px] px-0 pb-[153px] box-border gap-[24px] leading-[normal] tracking-[normal]">
      <Header />
      <section className="self-stretch flex flex-row items-start justify-start py-0 px-4 box-border max-w-full shrink-0">
        <div className="flex-1 flex flex-col items-start justify-start gap-[12px] shrink-0 max-w-full">
          <Inputs3 />
          <Inputs2 />
        </div>
      </section>
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
              <div className="self-stretch flex flex-col items-start justify-start gap-[8px] max-w-full">
                <FrameComponent1
                  avatar="/avatar-4@2x.png"
                  depositReceived="Deposit Received"
                  dividedIn4SavingGoals="Divided in 4 saving goals"
                  detailSeparator="+ $500"
                />
                <Inputs1
                  avatar="/avatar-4@2x.png"
                  prop="/.svg"
                  walkTheDog="Walk the dog"
                  historySpacer="+ $2"
                />
                <Inputs1
                  avatar="/avatar-5@2x.png"
                  prop="/-1.svg"
                  walkTheDog="Do your homework"
                  historySpacer="+ $2"
                />
                <Inputs1
                  avatar="/avatar-4@2x.png"
                  prop="/-2.svg"
                  walkTheDog="Tidy your bed"
                  historySpacer="+ $1"
                />
                <Inputs1
                  avatar="/avatar-5@2x.png"
                  prop="/.svg"
                  walkTheDog="Walk the dog"
                  historySpacer="+ $2"
                />
                <FrameComponent1
                  avatar="/avatar-4@2x.png"
                  depositReceived="Weekly Allowance Received"
                  dividedIn4SavingGoals="Divided in 4 saving goals"
                  detailSeparator="+ $170"
                />
                <FrameComponent1
                  avatar="/avatar-5@2x.png"
                  depositReceived="Weekly Allowance Received"
                  dividedIn4SavingGoals="Divided in 2 saving goals"
                  detailSeparator="+ $170"
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
              <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
                <Inputs1
                  avatar="/avatar-4@2x.png"
                  prop="/.svg"
                  walkTheDog="Walk the dog"
                  historySpacer="+ $2"
                />
                <Inputs1
                  avatar="/avatar-5@2x.png"
                  prop="/.svg"
                  walkTheDog="Walk the dog"
                  historySpacer="+ $2"
                />
                <Inputs1
                  avatar="/avatar-4@2x.png"
                  prop="/-2.svg"
                  walkTheDog="Tidy your bed"
                  historySpacer="+ $1"
                />
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
                <Inputs1
                  avatar="/avatar-4@2x.png"
                  prop="/-1.svg"
                  walkTheDog="Do your homework"
                  historySpacer="+ $2"
                />
                <Inputs1
                  avatar="/avatar-5@2x.png"
                  prop="/-1.svg"
                  walkTheDog="Do your homework"
                  historySpacer="+ $2"
                />
                <Inputs1
                  avatar="/avatar-4@2x.png"
                  prop="/-2.svg"
                  walkTheDog="Tidy your bed"
                  historySpacer="+ $1"
                />
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
      <NavBarParent />
    </div>
  );
};

export default ParentsSendFeature;
