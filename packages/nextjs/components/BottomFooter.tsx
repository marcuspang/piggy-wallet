import { FunctionComponent } from "react";
import styles from "./BottomFooter.module.css";

export type BottomFooterType = {
  className?: string;
};

const BottomFooter: FunctionComponent<BottomFooterType> = ({
  className = "",
}) => {
  return (
    <section className={[styles.navbarCoach, className].join(" ")}>
      <div className={styles.icons}>
        <div className={styles.left}>
          <div className={styles.navigation}>
            <img className={styles.icons1} alt="" src="/icons.svg" />
            <div className={styles.home}>Home</div>
          </div>
          <div className={styles.navigation1}>
            <img
              className={styles.icongolfclub}
              alt=""
              src="/icongolfclub.svg"
            />
            <div className={styles.lessons}>Lessons</div>
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.navigation2}>
            <input className={styles.iconbookopen} type="checkbox" />
            <div className={styles.library}>Library</div>
          </div>
          <div className={styles.navigation3}>
            <img className={styles.icongear} alt="" src="/icongear.svg" />
            <div className={styles.settings}>Settings</div>
          </div>
        </div>
      </div>
      <div className={styles.navigation4}>
        <div className={styles.icons2}>
          <div className={styles.navigationButtonList}>
            <div className={styles.navigationButton}>
              <img
                className={styles.home03Icon}
                loading="lazy"
                alt=""
                src="/home031.svg"
              />
              <b className={styles.home1}>Home</b>
            </div>
            <div className={styles.navigationButton1}>
              <img
                className={styles.flag02Icon}
                loading="lazy"
                alt=""
                src="/flag02.svg"
              />
              <b className={styles.goals}>Goals</b>
            </div>
          </div>
          <div className={styles.navigationButtonList1}>
            <div className={styles.navigationButton2}>
              <img
                className={styles.checkSquareBrokenIcon}
                loading="lazy"
                alt=""
                src="/checksquarebroken.svg"
              />
              <b className={styles.tasks}>Tasks</b>
            </div>
            <div className={styles.navigationButton3}>
              <img
                className={styles.messageChatCircleIcon}
                loading="lazy"
                alt=""
                src="/messagechatcircle.svg"
              />
              <b className={styles.chat}>Chat</b>
            </div>
          </div>
        </div>
        <div className={styles.actionButton}>
          <img
            className={styles.qrCode02Icon}
            loading="lazy"
            alt=""
            src="/qrcode02.svg"
          />
        </div>
      </div>
      <div className={styles.navbarCoachInner}>
        <div className={styles.frameChild} />
      </div>
    </section>
  );
};

export default BottomFooter;
