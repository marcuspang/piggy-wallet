import { FunctionComponent } from "react";
import Header3 from "../components/Header3";
import CurrentTasks from "../components/CurrentTasks";
import SaturdayList from "../components/SaturdayList";
import NavBarCoach1 from "../components/NavBarCoach1";

const ChildsTasks: FunctionComponent = () => {
  return (
    <div className="w-full h-[840px] relative rounded-xl bg-base-white overflow-hidden flex flex-col items-start justify-start pt-0 px-0 pb-[740px] box-border gap-[16px] leading-[normal] tracking-[normal]">
      <Header3 tasks="Tasks" />
      <section className="self-stretch flex flex-row items-start justify-start py-0 px-4 box-border max-w-full shrink-0">
        <div className="flex-1 flex flex-col items-start justify-start gap-[24px] shrink-0 max-w-full">
          <CurrentTasks />
          <SaturdayList />
        </div>
      </section>
      <NavBarCoach1 />
    </div>
  );
};

export default ChildsTasks;
