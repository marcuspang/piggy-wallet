import { FunctionComponent, useState } from "react";
import { TextField, Icon } from "@mui/material";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";

export type PageHeaderType = {
  className?: string;
};

const PageHeader: FunctionComponent<PageHeaderType> = ({ className = "" }) => {
  const [statusBarLeftValue, setStatusBarLeftValue] = useState(null);
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <section
        className={`self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-4 box-border max-w-full shrink-0 text-left text-base text-text-default-default font-single-line-body-base ${className}`}
      >
        <div className="flex-1 bg-gray-100 box-border overflow-hidden flex flex-col items-end justify-start pt-3.5 px-0 pb-0 gap-[14px] shrink-0 max-w-full border-b-[1px] border-solid border-neutral-100">
          <div className="w-[262px] hidden flex-row flex-wrap items-center justify-end gap-[8px]">
            <div className="h-8 rounded-radius-200 bg-text-brand-on-brand flex flex-row items-center justify-center p-2 box-border">
              <div className="self-stretch relative leading-[100%] flex items-center">
                Link
              </div>
            </div>
            <div className="h-8 rounded-radius-200 flex flex-row items-center justify-center p-2 box-border">
              <div className="self-stretch relative leading-[100%] flex items-center">
                Link
              </div>
            </div>
            <div className="h-8 rounded-radius-200 flex flex-row items-center justify-center p-2 box-border">
              <div className="self-stretch relative leading-[100%] flex items-center">
                Link
              </div>
            </div>
            <div className="h-8 rounded-radius-200 flex flex-row items-center justify-center p-2 box-border">
              <div className="self-stretch relative leading-[100%] flex items-center">
                Link
              </div>
            </div>
            <div className="h-8 rounded-radius-200 flex flex-row items-center justify-center p-2 box-border">
              <div className="self-stretch relative leading-[100%] flex items-center">
                Link
              </div>
            </div>
            <div className="h-8 rounded-radius-200 flex flex-row items-center justify-center p-2 box-border">
              <div className="self-stretch relative leading-[100%] flex items-center">
                Link
              </div>
            </div>
          </div>
          <img
            className="w-10 h-10 relative overflow-hidden shrink-0 hidden"
            alt=""
            src="/menu.svg"
          />
          <img
            className="w-[172px] h-8 relative hidden"
            alt=""
            src="/notch.svg"
          />
          <div className="self-stretch max-w-full">
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
          <div className="self-stretch flex flex-row items-start justify-start max-w-full text-center text-lg text-black-500 font-heading-mobile-h6-semi-bold">
            <div className="flex-1 flex flex-col items-start justify-start gap-[12px] max-w-full">
              <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-6">
                <div className="flex-1 flex flex-row items-start justify-start gap-[8px]">
                  <div className="h-scale-07 w-scale-07 rounded-scale-06 overflow-hidden shrink-0 flex flex-row items-center justify-center py-padding-md px-2 box-border">
                    <img
                      className="h-6 w-6 relative overflow-hidden shrink-0"
                      loading="lazy"
                      alt=""
                      src="/chevronleft.svg"
                    />
                  </div>
                  <div className="flex-1 flex flex-col items-start justify-start pt-2 px-0 pb-0">
                    <div className="self-stretch relative tracking-[-0.02em] leading-[24px] font-medium">
                      Savings Goals
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-row items-start justify-start py-0 pr-5 pl-0 text-left text-base text-text-neutral-tertiary font-paragraph-small-bold">
                <button className="cursor-pointer [border:none] pt-space-100 px-[39px] pb-0.5 bg-[transparent] rounded-t-radius-100 rounded-b-none flex flex-row items-start justify-start border-b-[1px] border-solid border-brand-500">
                  <a className="[text-decoration:none] relative text-base leading-[24px] font-bold font-paragraph-small-bold text-brand-500 text-left inline-block min-w-[52px]">
                    See All
                  </a>
                </button>
                <div className="rounded-t-radius-100 rounded-b-none flex flex-row items-start justify-start pt-space-100 px-12 pb-0.5 border-b-[1px] border-solid border-border-neutral-tertiary">
                  <a className="[text-decoration:none] relative leading-[24px] font-medium text-[inherit] inline-block min-w-[35px]">
                    Matt
                  </a>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-end justify-start gap-[12px] ml-[-59px] text-left text-base text-text-neutral-tertiary font-paragraph-small-bold">
              <div className="flex flex-row items-start justify-end py-0 px-6">
                <div className="h-scale-07 w-scale-07 rounded-scale-06 overflow-hidden shrink-0 flex flex-row items-center justify-center py-padding-md px-2 box-border">
                  <img
                    className="h-6 w-6 relative overflow-hidden shrink-0"
                    loading="lazy"
                    alt=""
                    src="/plus.svg"
                  />
                </div>
              </div>
              <div className="rounded-t-radius-100 rounded-b-none flex flex-row items-start justify-start pt-space-100 px-[47px] pb-0.5 border-b-[1px] border-solid border-border-neutral-tertiary">
                <a className="[text-decoration:none] relative leading-[24px] font-medium text-[inherit] inline-block min-w-[36px]">
                  Lucy
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </LocalizationProvider>
  );
};

export default PageHeader;
