import { FunctionComponent } from "react";
import styles from "./Inputs12.module.css";

export type Inputs1Type = {
  className?: string;
  avatar?: string;
  prop?: string;
  walkTheDog?: string;
  historySpacer?: string;
};

const Inputs1: FunctionComponent<Inputs1Type> = ({
  className = "",
  avatar,
  prop,
  walkTheDog,
  historySpacer,
}) => {
  return (
    <div className={[styles.inputs, className].join(" ")}>
      <div className={styles.avatarParent}>
        <img className={styles.avatarIcon} alt="" src={avatar} />
        <div className={styles.transactionStatus}>
          <b className={styles.taskFinished}>Task Finished</b>
          <div className={styles.taskIcon}>
            <img className={styles.icon} alt="" src={prop} />
            <div className={styles.walkTheDog}>{walkTheDog}</div>
          </div>
        </div>
        <div className={styles.historySpacer}>{historySpacer}</div>
      </div>
    </div>
  );
};

export default Inputs1;
