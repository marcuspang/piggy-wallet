"use client";

import { type CSSProperties, FunctionComponent, useMemo } from "react";
import { usePathname, useRouter } from "next/navigation";
import clsx from "clsx";

export type FooterType = {
  className?: string;
  home03?: string;
  flag02?: string;

  /** Style props */
  navBarCoachAlignSelf?: CSSProperties["alignSelf"];
  navBarCoachWidth?: CSSProperties["width"];
  navBarCoachMargin?: CSSProperties["margin"];
  navBarCoachPosition?: CSSProperties["position"];
  navBarCoachRight?: CSSProperties["right"];
  navBarCoachBottom?: CSSProperties["bottom"];
  navBarCoachLeft?: CSSProperties["left"];
  navBarCoachFlex?: CSSProperties["flex"];
};

const Footer: FunctionComponent<FooterType> = ({
  className = "",
  home03,
  flag02,
  navBarCoachAlignSelf,
  navBarCoachWidth,
  navBarCoachMargin,
  navBarCoachPosition,
  navBarCoachRight,
  navBarCoachBottom,
  navBarCoachLeft,
  navBarCoachFlex,
}) => {
  const pathname = usePathname();
  const router = useRouter();
  // const navBarCoach1Style: CSSProperties = useMemo(() => {
  //   return {
  //     alignSelf: navBarCoachAlignSelf,
  //     width: navBarCoachWidth,
  //     margin: navBarCoachMargin,
  //     position: navBarCoachPosition,
  //     right: navBarCoachRight,
  //     bottom: navBarCoachBottom,
  //     left: navBarCoachLeft,
  //     flex: navBarCoachFlex,
  //   };
  // }, [
  //   navBarCoachAlignSelf,
  //   navBarCoachWidth,
  //   navBarCoachMargin,
  //   navBarCoachPosition,
  //   navBarCoachRight,
  //   navBarCoachBottom,
  //   navBarCoachLeft,
  //   navBarCoachFlex,
  // ]);

  return (
    <footer
      className={`self-stretch bg-gray-100 bottom-0 fixed max-w-lg mx-auto flex flex-col items-end justify-start pt-3.5 px-4 pb-[3px] gap-[9px] text-center text-sm text-text-default-secondary w-full font-paragraph-small-bold ${className}`}
      // style={navBarCoach1Style}
    >
      <div className="self-stretch flex flex-row items-start justify-between py-1 pr-[17px] pl-[25px] gap-[20px]">
        <div
          className={clsx(
            "flex flex-col items-start justify-start py-0 pr-2 pl-0 gap-[4px] cursor-pointer hover:text-brand-500",
            pathname === "/parent" && "text-brand-500",
          )}
          onClick={() => router.push("/parent")}
        >
          <div className="flex flex-row items-start justify-start px-2 py-0">
            <img
              className={clsx("relative w-6 h-6 overflow-hidden shrink-0", pathname === "/parent" && "text-brand-500")}
              loading="lazy"
              alt=""
              src={home03 ?? "/home03.svg"}
            />
          </div>
          <b className="relative leading-[20px] inline-block min-w-[40px]">Home</b>
        </div>
        <div
          className={clsx(
            "flex flex-col items-start justify-start py-0 pr-2 pl-0 gap-[4px] cursor-pointer hover:text-brand-500",
            pathname === "/parent/goals" && "text-brand-500",
          )}
          onCanPlay={() => router.push("/parent/goals")}
        >
          <div className="flex flex-row items-start justify-start py-0 pr-2 pl-[7px]">
            <img
              className={clsx(
                "relative w-6 h-6 overflow-hidden shrink-0",
                pathname === "/parent/goals" && "text-brand-500",
              )}
              loading="lazy"
              alt=""
              src={flag02 ?? "/flag02.svg"}
            />
          </div>
          <b className="relative leading-[20px] inline-block min-w-[38px]">Goals</b>
        </div>
        <div
          className={clsx(
            "flex flex-col items-start justify-start py-0 pr-2 pl-0 gap-[4px] cursor-pointer hover:text-brand-500",
            pathname === "/parent/tasks" && "text-brand-500",
          )}
          onClick={() => router.push("/parent/tasks")}
        >
          <div className="flex flex-row items-start justify-start py-0 px-[7px]">
            <img
              className={clsx(
                "relative w-6 h-6 overflow-hidden shrink-0",
                pathname === "/parent/tasks" && "text-brand-500",
              )}
              loading="lazy"
              alt=""
              src="/checksquarebroken.svg"
            />
          </div>
          <b className="relative leading-[20px] inline-block min-w-[38px]">Tasks</b>
        </div>
        <div
          className={clsx(
            "flex flex-col items-start justify-start py-0 pr-2 pl-0 gap-[4px] cursor-pointer hover:text-brand-500",
            pathname === "/parent/settings" && "text-brand-500",
          )}
          onClick={() => router.push("/parent/settings")}
        >
          <div className="flex flex-row items-start justify-start px-4 py-0">
            <img
              className={clsx("relative w-6 h-6 overflow-hidden shrink-0", pathname === "/parent/settings" && "text-brand-500")}
              loading="lazy"
              alt=""
              src="/settings01.svg"
            />
          </div>
          <b className="relative leading-[20px] inline-block min-w-[56px]">Settings</b>
        </div>
      </div>
      <div className="self-stretch hidden flex-row items-start justify-between gap-[20px] text-xs text-brand-green-500 font-text-xs-light">
        <div className="w-[160.7px] flex flex-row items-center justify-start gap-[20px]">
          <div className="h-[42px] flex flex-col items-center justify-between py-0 px-[5px] box-border">
            <img className="w-[27px] h-[27px] relative overflow-hidden shrink-0" alt="" src="/icons.svg" />
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
            <img className="w-[27px] h-[27px] relative overflow-hidden shrink-0" alt="" src="/iconbookopen.svg" />
            <div className="self-stretch h-[9px] relative leading-[16px] font-light flex items-center justify-center shrink-0">
              Library
            </div>
          </div>
          <div className="h-[42px] flex-1 flex flex-col items-center justify-between py-0 px-[5px] box-border">
            <img className="w-[27px] h-[27px] relative overflow-hidden shrink-0" alt="" src="/icongear.svg" />
            <div className="self-stretch h-[9px] relative leading-[16px] font-light flex items-center justify-center shrink-0">
              Settings
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
