import { FunctionComponent } from "react";
import styles from "./KeyboardIPhone.module.css";

export type KeyboardIPhoneType = {
  className?: string;
};

const KeyboardIPhone: FunctionComponent<KeyboardIPhoneType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.keyboardIphone, className].join(" ")}>
      <div className={styles.background} />
      <div className={styles.keyboardLayout}>
        <div className={styles.keyRows}>
          <div className={styles.keyRowSet}>
            <div className={styles.button}>
              <div className={styles.key} />
              <div className={styles.keyLabelContainers}>
                <div className={styles.spacerRow}>1</div>
                <div className={styles.firstRowKeyNames}>
                  <b className={styles.def}>{` `}</b>
                </div>
              </div>
            </div>
            <div className={styles.button1}>
              <div className={styles.key1} />
              <div className={styles.secondRowKeyContainers}>
                <div className={styles.emptyKeyLabels}>2</div>
                <b className={styles.def1}>ABC</b>
              </div>
            </div>
            <div className={styles.button2}>
              <div className={styles.key2} />
              <div className={styles.thirdRowKeyContainers}>
                <div className={styles.thirdEmptyKey}>3</div>
                <b className={styles.def2}>DEF</b>
              </div>
            </div>
          </div>
          <div className={styles.keyRowSet1}>
            <div className={styles.button3}>
              <div className={styles.key3} />
              <div className={styles.frame}>
                <div className={styles.div}>4</div>
                <b className={styles.def3}>GHI</b>
              </div>
            </div>
            <div className={styles.button4}>
              <div className={styles.key4} />
              <div className={styles.frame1}>
                <div className={styles.div1}>5</div>
                <b className={styles.def4}>JKL</b>
              </div>
            </div>
            <div className={styles.button5}>
              <div className={styles.key5} />
              <div className={styles.frame2}>
                <div className={styles.div2}>6</div>
                <b className={styles.def5}>MNO</b>
              </div>
            </div>
          </div>
          <div className={styles.keyRowSet2}>
            <div className={styles.button6}>
              <div className={styles.key6} />
              <div className={styles.frame3}>
                <div className={styles.div3}>7</div>
                <b className={styles.def6}>PQRS</b>
              </div>
            </div>
            <div className={styles.button7}>
              <div className={styles.key7} />
              <div className={styles.frame4}>
                <div className={styles.div4}>8</div>
                <b className={styles.def7}>TUV</b>
              </div>
            </div>
            <div className={styles.button8}>
              <div className={styles.key8} />
              <div className={styles.frame5}>
                <div className={styles.div5}>9</div>
                <b className={styles.def8}>WXYZ</b>
              </div>
            </div>
          </div>
          <div className={styles.keyRowSet3}>
            <div className={styles.empty} />
            <div className={styles.button9}>
              <div className={styles.key9} />
              <div className={styles.div6}>0</div>
            </div>
            <img
              className={styles.buttonIcon}
              loading="lazy"
              alt=""
              src="/button.svg"
            />
          </div>
        </div>
      </div>
      <div className={styles.homeIndicator}>
        <div className={styles.homeIndicator1} />
      </div>
    </div>
  );
};

export default KeyboardIPhone;
