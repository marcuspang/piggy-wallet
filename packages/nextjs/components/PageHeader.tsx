import { FunctionComponent, useState } from "react";
import { TextField, Icon } from "@mui/material";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import styles from "./PageHeader.module.css";

export type PageHeaderType = {
  className?: string;
};

const PageHeader: FunctionComponent<PageHeaderType> = ({ className = "" }) => {
  const [statusBarLeftValue, setStatusBarLeftValue] = useState(null);
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <section className={[styles.pageHeader, className].join(" ")}>
        <div className={styles.header}>
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
          <img className={styles.menuIcon} alt="" src="/menu.svg" />
          <img className={styles.notchIcon} alt="" src="/notch.svg" />
          <div className={styles.statusBarLeft}>
            <DatePicker
              value={statusBarLeftValue}
              onChange={(newValue: any) => {
                setStatusBarLeftValue(newValue);
              }}
              sx={{
                fieldset: {
                  borderColor: "transparent",
                  borderTopWidth: 0,
                  borderRightWidth: 0,
                  borderBottomWidth: 0,
                  borderLeftWidth: 0,
                },
                "&:hover": {
                  fieldset: { borderColor: "transparent" },
                  ".MuiOutlinedInput-notchedOutline": {
                    borderColor: "transparent",
                  },
                },
                "& input::placeholder": { textColor: "#000", fontSize: 17 },
                input: {
                  color: "#000",
                  fontSize: 17,
                  textAlign: "center",
                  fontWeight: "600",
                },
                "& .MuiInputBase-root": {
                  height: 21,
                  gap: "8px",
                  flexDirection: { flexDirection: "row" },
                },
              }}
              slotProps={{
                textField: {
                  size: "medium",
                  fullWidth: false,
                  required: false,
                  autoFocus: false,
                  error: false,
                  color: "secondary",
                  placeholder: "9:41",
                },
                openPickerIcon: {
                  component: () => (
                    <img
                      width="27.4px"
                      height="13px"
                      src="/-statusbarbattery.svg"
                    />
                  ),
                },
              }}
            />
          </div>
          <div className={styles.pageTitle}>
            <div className={styles.pageTitleContainer}>
              <div className={styles.titleBack}>
                <div className={styles.backButton}>
                  <div className={styles.iconButtonsubtledefaultmd}>
                    <img
                      className={styles.chevronLeftIcon}
                      loading="lazy"
                      alt=""
                      src="/chevronleft.svg"
                    />
                  </div>
                  <div className={styles.savingsGoalsWrapper}>
                    <div className={styles.savingsGoals}>Savings Goals</div>
                  </div>
                </div>
              </div>
              <div className={styles.addGoalTab}>
                <button className={styles.tab}>
                  <a className={styles.label}>See All</a>
                </button>
                <div className={styles.tab1}>
                  <a className={styles.label1}>Matt</a>
                </div>
              </div>
            </div>
            <div className={styles.addGoalButton}>
              <div className={styles.addGoalIcon}>
                <div className={styles.iconButtonsubtledefaultmd1}>
                  <img
                    className={styles.plusIcon}
                    loading="lazy"
                    alt=""
                    src="/plus.svg"
                  />
                </div>
              </div>
              <div className={styles.tab2}>
                <a className={styles.label2}>Lucy</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </LocalizationProvider>
  );
};

export default PageHeader;
