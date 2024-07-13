import { FunctionComponent } from "react";
import styles from "./NavBarParent1.module.css";

export type NavBarParent1Type = {
  className?: string;
};

const NavBarParent1: FunctionComponent<NavBarParent1Type> = ({
  className = "",
}) => {
  return (
    <footer className={[styles.navbarParent, className].join(" ")}>
      <div className={styles.icons}>
        <div className={styles.frameParent}>
          <div className={styles.homeIconParent}>
            <div className={styles.homeIcon}>
              <img
                className={styles.home03Icon}
                loading="lazy"
                alt=""
                src="/home032.svg"
              />
            </div>
            <b className={styles.home}>Home</b>
          </div>
          <div className={styles.settingsIcon}>
            <div className={styles.flag02Wrapper}>
              <img
                className={styles.flag02Icon}
                loading="lazy"
                alt=""
                src="/flag021.svg"
              />
            </div>
            <b className={styles.goals}>Goals</b>
          </div>
        </div>
        <div className={styles.frameGroup}>
          <div className={styles.frameContainer}>
            <div className={styles.checkSquareBrokenWrapper}>
              <img
                className={styles.checkSquareBrokenIcon}
                loading="lazy"
                alt=""
                src="/checksquarebroken1.svg"
              />
            </div>
            <b className={styles.tasks}>Tasks</b>
          </div>
          <div className={styles.frameDiv}>
            <div className={styles.settings01Wrapper}>
              <img
                className={styles.settings01Icon}
                loading="lazy"
                alt=""
                src="/settings01.svg"
              />
            </div>
            <b className={styles.settings}>Settings</b>
          </div>
        </div>
      </div>
      <div className={styles.icons1}>
        <div className={styles.left}>
          <div className={styles.navigation}>
            <img className={styles.icons2} alt="" src="/icons.svg" />
            <div className={styles.home1}>Home</div>
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
            <img
              className={styles.iconbookopen}
              alt=""
              src="/iconbookopen.svg"
            />
            <div className={styles.library}>Library</div>
          </div>
          <div className={styles.navigation3}>
            <img className={styles.icongear} alt="" src="/icongear.svg" />
            <div className={styles.settings1}>Settings</div>
          </div>
        </div>
      </div>
      <div className={styles.navbarParentInner}>
        <div className={styles.frameChild} />
      </div>
    </footer>
  );
};

export default NavBarParent1;
