import { FunctionComponent } from "react";
import styles from "./KeyboardArea.module.css";

export type KeyboardAreaType = {
  className?: string;
};

const KeyboardArea: FunctionComponent<KeyboardAreaType> = ({
  className = "",
}) => {
  return (
    <section className={[styles.keyboardArea, className].join(" ")}>
      <div className={styles.keyboardIphone}>
        <div className={styles.background} />
        <div className={styles.keyGridWrapper}>
          <div className={styles.keyGrid}>
            <div className={styles.keyRowOne}>
              <div className={styles.button}>
                <div className={styles.key} />
                <div className={styles.keyBackground}>
                  <div className={styles.spacer}>1</div>
                  <div className={styles.keyBorder}>
                    <b className={styles.def}>{` `}</b>
                  </div>
                </div>
              </div>
              <div className={styles.button1}>
                <div className={styles.key1} />
                <div className={styles.keyBackgroundTwo}>
                  <div className={styles.spacerTwo}>2</div>
                  <b className={styles.def1}>ABC</b>
                </div>
              </div>
              <div className={styles.button2}>
                <div className={styles.key2} />
                <div className={styles.keyBackgroundThree}>
                  <div className={styles.spacerThree}>3</div>
                  <b className={styles.def2}>DEF</b>
                </div>
              </div>
            </div>
            <div className={styles.keyRowOne1}>
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
            <div className={styles.keyRowOne2}>
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
            <div className={styles.keyRowOne3}>
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
      <div className={styles.buttonWrapper}>
        <div className={styles.button10}>
          <img className={styles.starIcon} alt="" src="/star1.svg" />
          <b className={styles.button11}>Continue</b>
          <img className={styles.xIcon} alt="" src="/x1.svg" />
        </div>
      </div>
    </section>
  );
};

export default KeyboardArea;
