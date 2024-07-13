import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./SavingsInput.module.css";

export type SavingsInputType = {
  className?: string;
  lucysGeneralSavings?: string;
  avatar?: string;
  prop1?: string;

  /** Style props */
  propAlignSelf?: CSSProperties["alignSelf"];
  propMarginTop?: CSSProperties["marginTop"];
  propFlex?: CSSProperties["flex"];
};

const SavingsInput: FunctionComponent<SavingsInputType> = ({
  className = "",
  lucysGeneralSavings,
  avatar,
  prop1,
  propAlignSelf,
  propMarginTop,
  propFlex,
}) => {
  const savingsInputStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      marginTop: propMarginTop,
      flex: propFlex,
    };
  }, [propAlignSelf, propMarginTop, propFlex]);

  return (
    <div
      className={[styles.savingsInput, className].join(" ")}
      style={savingsInputStyle}
    >
      <div className={styles.inputs}>
        <img className={styles.icon} loading="lazy" alt="" src="/-21.svg" />
      </div>
      <div className={styles.inputs1}>
        <div className={styles.savingsNameAvatar}>
          <div className={styles.nameAvatar}>
            <div className={styles.lucysGeneralSavings}>
              {lucysGeneralSavings}
            </div>
            <img
              className={styles.avatarIcon}
              loading="lazy"
              alt=""
              src={avatar}
            />
          </div>
          <div className={styles.div}>{prop1}</div>
          <div className={styles.autosave50}>Autosave $50</div>
        </div>
      </div>
    </div>
  );
};

export default SavingsInput;
