import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./Header.module.css";

export type HeaderType = {
  className?: string;
  tasks?: string;
  chevronLeft1?: string;
  menu?: string;

  /** Style props */
  headerAlignSelf?: CSSProperties["alignSelf"];
  headerPosition?: CSSProperties["position"];
  headerTop?: CSSProperties["top"];
  headerLeft?: CSSProperties["left"];
  headerWidth?: CSSProperties["width"];
};

const Header: FunctionComponent<HeaderType> = ({
  className = "",
  tasks,
  chevronLeft1,
  menu,
  headerAlignSelf,
  headerPosition,
  headerTop,
  headerLeft,
  headerWidth,
}) => {
  const headerStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: headerAlignSelf,
      position: headerPosition,
      top: headerTop,
      left: headerLeft,
      width: headerWidth,
    };
  }, [headerAlignSelf, headerPosition, headerTop, headerLeft, headerWidth]);

  return (
    <section
      className={[styles.header, className].join(" ")}
      style={headerStyle}
    >
      <div className={styles.iconButtonsubtledefaultmd}>
        <img
          className={styles.chevronLeftIcon}
          loading="lazy"
          alt=""
          src="/chevronleft.svg"
        />
      </div>
      <a className={styles.tasks}>{tasks}</a>
      <div className={styles.iconButtonsubtledefaultmd1}>
        <img
          className={styles.chevronLeftIcon1}
          loading="lazy"
          alt=""
          src={chevronLeft1}
        />
      </div>
      <div className={styles.navigationPillList}>
        <div className={styles.navigationPill}>
          <div className={styles.title}>Link</div>
        </div>
        <div className={styles.navigationPill1}>
          <div className={styles.title1}>Link</div>
        </div>
        <div className={styles.navigationPill2}>
          <div className={styles.title2}>Link</div>
        </div>
        <div className={styles.navigationPill3}>
          <div className={styles.title3}>Link</div>
        </div>
        <div className={styles.navigationPill4}>
          <div className={styles.title4}>Link</div>
        </div>
        <div className={styles.navigationPill5}>
          <div className={styles.title5}>Link</div>
        </div>
      </div>
      <img className={styles.menuIcon} alt="" src={menu} />
      <div className={styles.statusbar}>
        <img className={styles.notchIcon} alt="" src="/notch.svg" />
        <div className={styles.statusbarTime}>
          <div className={styles.time}>9:41</div>
        </div>
        <div className={styles.signalStatus}>
          <div className={styles.connectivity}>
            <img
              className={styles.iconMobileSignal}
              alt=""
              src="/icon--mobile-signal.svg"
            />
            <img className={styles.wifiIcon} alt="" src="/wifi.svg" />
            <img
              className={styles.statusbarBatteryIcon}
              alt=""
              src="/-statusbarbattery.svg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
