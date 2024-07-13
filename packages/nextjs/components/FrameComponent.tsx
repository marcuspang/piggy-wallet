import { FunctionComponent, useState } from "react";
import { TextField, Icon } from "@mui/material";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import styles from "./FrameComponent.module.css";

export type FrameComponentType = {
  className?: string;
};

const FrameComponent: FunctionComponent<FrameComponentType> = ({
  className = "",
}) => {
  const [frameDateTimePickerValue, setFrameDateTimePickerValue] =
    useState(null);
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <section className={[styles.headerWrapper, className].join(" ")}>
        <div className={styles.header}>
          <img className={styles.notchIcon} alt="" src="/notch.svg" />
          <div className={styles.wrapper}>
            <DatePicker
              value={frameDateTimePickerValue}
              onChange={(newValue: any) => {
                setFrameDateTimePickerValue(newValue);
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
                "& input::placeholder": { textColor: "#fff", fontSize: 17 },
                input: {
                  color: "#fff",
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
          <div className={styles.iconFontawesomeWrapper}>
            <div className={styles.iconFontawesome}>
              <a className={styles.icon}>chevron-left</a>
            </div>
          </div>
        </div>
      </section>
    </LocalizationProvider>
  );
};

export default FrameComponent;
