import { FunctionComponent } from "react";
import styles from "./NavBarParent3.module.css";

export type NavBarParentType = {
  className?: string;
};

const NavBarParent: FunctionComponent<NavBarParentType> = ({
  className = "",
}) => {
  return (
    <footer className={[styles.navbarParent, className].join(" ")}>
      <div className={styles.icons}>
        <div className={styles.navigationButtons}>
          <div className={styles.navigationIcons}>
            <img
              className={styles.home03Icon}
              loading="lazy"
              alt=""
              src="/home032.svg"
            />
          </div>
          <a className={styles.home}>Home</a>
        </div>
        <div className={styles.navigationButtons1}>
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
        <div className={styles.navigationButtons2}>
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
        <div className={styles.navigationButtons3}>
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
            <input className={styles.icons2} type="checkbox" />
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
      <div className={styles.activeIndicator}>
        <div className={styles.indicator} />
      </div>
    </footer>
  );
};

export default NavBarParent;
