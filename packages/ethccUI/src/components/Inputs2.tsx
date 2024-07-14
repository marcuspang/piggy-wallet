import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type Inputs2Type = {
  className?: string;

  /** Style props */
  propFlex?: CSSProperties["flex"];
};

const Inputs2: FunctionComponent<Inputs2Type> = ({
  className = "",
  propFlex,
}) => {
  const inputsStyle: CSSProperties = useMemo(() => {
    return {
      flex: propFlex,
    };
  }, [propFlex]);

  return (
    <div
      className={`self-stretch rounded-spacing-md bg-error-50 flex flex-col items-start justify-center py-1.5 px-[15px] text-left text-base text-neutral-900 font-paragraph-small-bold border-[1px] border-solid border-error-600 ${className}`}
      style={inputsStyle}
    >
      <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[8px]">
        <img
          className="h-[22.4px] w-[22.4px] relative rounded-7xs-6 overflow-hidden shrink-0 object-cover"
          alt=""
          src="/avatar-4@2x.png"
        />
        <div className="flex-1 flex flex-col items-start justify-start gap-[4px] min-w-[160px]">
          <b className="w-[89px] h-6 relative leading-[24px] flex items-center">{`Withdrawal `}</b>
          <div className="self-stretch h-10 flex flex-row items-start justify-start gap-[4px] text-sm">
            <img className="h-4 w-4 relative" alt="" src="/-7.svg" />
            <div className="self-stretch flex-1 relative leading-[20px] font-medium flex items-center">
              <span>
                <p className="m-0">Substracted from</p>
                <p className="m-0">{`Fortnite Yearly Subscription `}</p>
              </span>
            </div>
          </div>
        </div>
        <div className="h-6 w-[45px] relative text-lg tracking-[-0.02em] leading-[24px] font-semibold font-heading-mobile-h6-semi-bold text-black-500 flex items-center">
          - $144
        </div>
      </div>
    </div>
  );
};

export default Inputs2;
