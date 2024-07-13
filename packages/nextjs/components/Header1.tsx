import { FunctionComponent } from "react";
import styles from "./Header1.module.css";

export type Header1Type = {
  className?: string;
};

const Header1: FunctionComponent<Header1Type> = ({ className = "" }) => {
  return (
    <section className={[styles.header, className].join(" ")}>
      <img className={styles.notchIcon} alt="" src="/notch.svg" />
      <div className={styles.timeStatus}>
        <div className={styles.statusbarTime}>
          <a className={styles.time}>9:41</a>
        </div>
        <div className={styles.signalIconsWrapper}>
          <div className={styles.signalIcons}>
            <img
              className={styles.iconMobileSignal}
              alt=""
              src="/icon--mobile-signal1.svg"
            />
            <img className={styles.wifiIcon} alt="" src="/wifi1.svg" />
            <img
              className={styles.statusbarBatteryIcon}
              alt=""
              src="/-statusbarbattery1.svg"
            />
          </div>
        </div>
      </div>
      <div className={styles.backIcon}>
        <div className={styles.iconFontawesome}>
          <a className={styles.icon}>chevron-left</a>
        </div>
      </div>
    </section>
  );
};

export default Header1;
