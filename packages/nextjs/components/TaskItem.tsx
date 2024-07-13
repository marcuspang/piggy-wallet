import { FunctionComponent } from "react";
import styles from "./TaskItem.module.css";

export type TaskItemType = {
  className?: string;
  prop?: string;
  walkTheDog?: string;
  earn2?: string;
};

const TaskItem: FunctionComponent<TaskItemType> = ({
  className = "",
  prop,
  walkTheDog,
  earn2,
}) => {
  return (
    <div className={[styles.taskItem, className].join(" ")}>
      <div className={styles.inputs}>
        <img className={styles.icon} loading="lazy" alt="" src={prop} />
      </div>
      <div className={styles.inputs1}>
        <div className={styles.taskLabel}>
          <div className={styles.taskName}>
            <div className={styles.walkTheDog}>{walkTheDog}</div>
            <div className={styles.earn2}>{earn2}</div>
          </div>
          <div className={styles.checkbox}>
            <img className={styles.checkIcon} alt="" src="/check.svg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskItem;
