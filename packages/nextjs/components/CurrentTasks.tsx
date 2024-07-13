import { FunctionComponent } from "react";
import styles from "./CurrentTasks.module.css";

export type CurrentTasksType = {
  className?: string;
};

const CurrentTasks: FunctionComponent<CurrentTasksType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.currentTasks, className].join(" ")}>
      <div className={styles.currentHeader}>
        <b className={styles.todaysTasks}>Today’s Tasks</b>
        <div className={styles.iconButton}>
          <img className={styles.edit02Icon} alt="" src="/edit02.svg" />
        </div>
      </div>
      <div className={styles.currentList}>
        <div className={styles.taskItems}>
          <div className={styles.inputs}>
            <img className={styles.icon} loading="lazy" alt="" src="/.svg" />
          </div>
          <div className={styles.inputs1}>
            <div className={styles.taskDetails}>
              <div className={styles.taskName}>
                <div className={styles.tidyYourBed}>Tidy your bed</div>
                <div className={styles.earn1}>Earn $1</div>
              </div>
              <div className={styles.checkbox}>
                <img className={styles.checkIcon} alt="" src="/check.svg" />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.taskItems1}>
          <div className={styles.inputs2}>
            <img className={styles.icon1} loading="lazy" alt="" src="/-1.svg" />
          </div>
          <div className={styles.inputs3}>
            <div className={styles.frameParent}>
              <div className={styles.walkTheDogParent}>
                <div className={styles.walkTheDog}>Walk the dog</div>
                <div className={styles.earn2}>Earn $2</div>
              </div>
              <div className={styles.checkbox1}>
                <img className={styles.checkIcon1} alt="" src="/check.svg" />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.taskItems2}>
          <div className={styles.inputs4}>
            <img className={styles.icon2} loading="lazy" alt="" src="/-2.svg" />
          </div>
          <div className={styles.inputs5}>
            <div className={styles.frameGroup}>
              <div className={styles.doYourHomeworkParent}>
                <div className={styles.doYourHomework}>Do your homework</div>
                <div className={styles.earn25}>Earn $2.5</div>
              </div>
              <div className={styles.checkbox2}>
                <img className={styles.checkIcon2} alt="" src="/check.svg" />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.taskItems3}>
          <div className={styles.inputs6}>
            <img className={styles.icon3} loading="lazy" alt="" src="/-3.svg" />
          </div>
          <div className={styles.inputs7}>
            <div className={styles.frameContainer}>
              <div className={styles.callGrandmaParent}>
                <div className={styles.callGrandma}>Call grandma</div>
                <div className={styles.earn5}>Earn $5</div>
              </div>
              <div className={styles.checkbox3}>
                <img className={styles.checkIcon3} alt="" src="/check.svg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentTasks;
