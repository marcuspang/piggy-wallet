import { FunctionComponent, useState } from "react";
import { TextField, Icon } from "@mui/material";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import FrameComponent from "../components/FrameComponent";
import KeyboardArea from "../components/KeyboardArea";

const OnboardingSignUpScreen5: FunctionComponent = () => {
  const [statusBarContainerValue, setStatusBarContainerValue] = useState(null);
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <div className="w-full relative rounded-xl bg-base-white overflow-hidden flex flex-col items-start justify-start gap-[89px] leading-[normal] tracking-[normal]">
        <section className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[122px] box-border max-w-full text-center text-xs text-base-white font-abeezee">
          <div className="flex-1 bg-brand-600 flex flex-col items-start justify-start pt-3.5 pb-7 pr-6 pl-7 box-border gap-[34px] max-w-full">
            <img
              className="w-[172px] h-8 relative hidden"
              alt=""
              src="/notch.svg"
            />
            <div className="self-stretch gap-[20px]">
              <DatePicker
                value={statusBarContainerValue}
                onChange={(newValue: any) => {
                  setStatusBarContainerValue(newValue);
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
            <div className="w-[18px] flex flex-row items-start justify-start py-0 px-[5px] box-border">
              <div className="flex-1 flex flex-row items-start justify-start">
                <a className="[text-decoration:none] flex-1 relative leading-[14px] text-[inherit] whitespace-nowrap">
                  chevron-left
                </a>
              </div>
            </div>
          </div>
        </section>
        <FrameComponent />
        <KeyboardArea />
        <img
          className="w-full h-[290px] absolute !m-[0] top-[-2px] right-[0px] left-[0px] max-w-full overflow-hidden shrink-0 object-cover z-[1]"
          alt=""
          src="/background@2x.png"
        />
      </div>
    </LocalizationProvider>
  );
};

export default OnboardingSignUpScreen5;
