import { FunctionComponent } from "react";
import styles from "./NavBarParent2.module.css";

export type NavBarParent2Type = {
  className?: string;
};

const NavBarParent2: FunctionComponent<NavBarParent2Type> = ({
  className = "",
}) => {
  return (
    <div className={[styles.navbarParent, className].join(" ")}>
      <div className={styles.icons}>
        <div className={styles.navigationItems}>
          <div className={styles.navigationIcons}>
            <img
              className={styles.home03Icon}
              loading="lazy"
              alt=""
              src="/home032.svg"
            />
          </div>
          <b className={styles.home}>Home</b>
        </div>
        <div className={styles.navigationItems1}>
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
        <div className={styles.navigationItems2}>
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
        <div className={styles.navigationItems3}>
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
      <div className={styles.navbarIndicatorContainer}>
        <div className={styles.navbarIndicator} />
      </div>
    </div>
  );
};

export default NavBarParent2;
