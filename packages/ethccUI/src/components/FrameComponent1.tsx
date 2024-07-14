import { FunctionComponent } from "react";
import TaskItem from "./TaskItem";

export type FrameComponent1Type = {
  className?: string;
};

const FrameComponent1: FunctionComponent<FrameComponent1Type> = ({
  className = "",
}) => {
  return (
    <div
      className={`self-stretch flex flex-col items-start justify-start gap-[12px] text-left text-lg text-black-500 font-paragraph-small-bold ${className}`}
    >
      <div className="self-stretch flex flex-row items-center justify-start gap-[16px]">
        <b className="relative leading-[28px] inline-block min-w-[121px]">
          Today’s Tasks
        </b>
        <div className="h-9 w-9 rounded-scale-06 overflow-hidden shrink-0 hidden flex-row items-center justify-center p-2 box-border">
          <img
            className="h-5 w-5 relative overflow-hidden shrink-0"
            alt=""
            src="/edit02.svg"
          />
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start gap-[8px] text-base text-neutral-900">
        <TaskItem prop="/-21.svg" walkTheDog="Walk the dog" earn2="Earn $2" />
        <TaskItem prop="/-3.svg" walkTheDog="Tidy your bed" earn2="Earn $1" />
        <div className="self-stretch rounded-spacing-md bg-whitesmoke flex flex-col items-start justify-center py-1.5 px-[15px] text-neutral-700 border-[1px] border-solid border-neutral-200">
          <div className="self-stretch flex flex-col items-center justify-start gap-[8px]">
            <div className="relative leading-[24px] font-medium">
              You have 2 more pending tasks
            </div>
            <button className="cursor-pointer py-1.5 px-5 bg-base-white self-stretch rounded-radius-200 overflow-hidden flex flex-row items-center justify-center gap-[8px] border-[1px] border-solid border-brand-500">
              <img
                className="h-4 w-4 relative overflow-hidden shrink-0 hidden"
                alt=""
                src="/star.svg"
              />
              <div className="relative text-base leading-[24px] font-medium font-paragraph-small-bold text-neutral-900 text-left inline-block min-w-[97px]">
                See All Tasks
              </div>
              <img
                className="h-4 w-4 relative overflow-hidden shrink-0 hidden"
                alt=""
                src="/x.svg"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent1;
