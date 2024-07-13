import { FunctionComponent } from "react";
import TaskItem from "./TaskItem";
import styles from "./FrameComponent1.module.css";

export type FrameComponent1Type = {
  className?: string;
};

const FrameComponent1: FunctionComponent<FrameComponent1Type> = ({
  className = "",
}) => {
  return (
    <div className={[styles.tasksHeaderParent, className].join(" ")}>
      <div className={styles.tasksHeader}>
        <b className={styles.todaysTasks}>Today’s Tasks</b>
        <div className={styles.iconButton}>
          <img className={styles.edit02Icon} alt="" src="/edit02.svg" />
        </div>
      </div>
      <div className={styles.taskList}>
        <TaskItem prop="/-1.svg" walkTheDog="Walk the dog" earn2="Earn $2" />
        <TaskItem prop="/.svg" walkTheDog="Tidy your bed" earn2="Earn $1" />
        <div className={styles.inputs}>
          <div className={styles.pendingMessage}>
            <div className={styles.youHave2}>You have 2 more pending tasks</div>
            <button className={styles.button}>
              <img className={styles.starIcon} alt="" src="/star.svg" />
              <div className={styles.button1}>See All Tasks</div>
              <img className={styles.xIcon} alt="" src="/x2.svg" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent1;
