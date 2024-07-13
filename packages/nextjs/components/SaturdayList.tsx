import { FunctionComponent } from "react";
import SaturdayInput from "./SaturdayInput";
import styles from "./SaturdayList.module.css";

export type SaturdayListType = {
  className?: string;
};

const SaturdayList: FunctionComponent<SaturdayListType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.saturdayList, className].join(" ")}>
      <div className={styles.previousTasksParent}>
        <b className={styles.previousTasks}>Previous Tasks</b>
        <div className={styles.iconButton}>
          <img className={styles.edit02Icon} alt="" src="/edit02.svg" />
        </div>
      </div>
      <div className={styles.saturdayItems}>
        <div className={styles.saturday12JulyParent}>
          <b className={styles.saturday12July}>Saturday 12, July</b>
          <div className={styles.iconButton1}>
            <img className={styles.edit02Icon1} alt="" src="/edit02.svg" />
          </div>
        </div>
        <SaturdayInput
          prop="/-1.svg"
          walkTheDog="Walk the dog"
          earned2="Earned $2"
        />
        <SaturdayInput
          prop="/.svg"
          walkTheDog="Tidy your bed"
          earned2="Earned $1"
        />
        <div className={styles.previousInput}>
          <div className={styles.inputs}>
            <img className={styles.icon} loading="lazy" alt="" src="/-2.svg" />
          </div>
          <div className={styles.inputs1}>
            <div className={styles.previousName}>
              <div className={styles.previousTask}>
                <div className={styles.doYourHomework}>Do your homework</div>
                <div className={styles.missed25}>Missed $2.5</div>
              </div>
              <div className={styles.checkbox}>
                <img className={styles.xIcon} alt="" src="/x.svg" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.saturdayItems1}>
        <div className={styles.friday11JulyParent}>
          <b className={styles.friday11July}>Friday 11, July</b>
          <div className={styles.iconButton2}>
            <img className={styles.edit02Icon2} alt="" src="/edit02.svg" />
          </div>
        </div>
        <SaturdayInput
          prop="/-2.svg"
          walkTheDog="Do your homework"
          earned2="Earned $2.5"
        />
        <div className={styles.inputsParent}>
          <div className={styles.inputs2}>
            <img className={styles.icon1} alt="" src="/.svg" />
          </div>
          <div className={styles.inputs3}>
            <div className={styles.frameParent}>
              <div className={styles.tidyYourBedParent}>
                <div className={styles.tidyYourBed}>Tidy your bed</div>
                <div className={styles.earned2}>Earned $2</div>
              </div>
              <div className={styles.checkbox1}>
                <img className={styles.checkIcon} alt="" src="/check1.svg" />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.inputsGroup}>
          <div className={styles.inputs4}>
            <img className={styles.icon2} alt="" src="/-1.svg" />
          </div>
          <div className={styles.inputs5}>
            <div className={styles.frameGroup}>
              <div className={styles.walkTheDogParent}>
                <div className={styles.walkTheDog}>Walk the dog</div>
                <div className={styles.missed2}>Missed $2</div>
              </div>
              <div className={styles.checkbox2}>
                <img className={styles.xIcon1} alt="" src="/x.svg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SaturdayList;
