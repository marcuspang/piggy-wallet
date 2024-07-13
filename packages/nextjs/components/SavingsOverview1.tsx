import { FunctionComponent } from "react";
import SavingsProfiles from "./SavingsProfiles";
import styles from "./SavingsOverview1.module.css";

export type SavingsOverview1Type = {
  className?: string;
};

const SavingsOverview1: FunctionComponent<SavingsOverview1Type> = ({
  className = "",
}) => {
  return (
    <div className={[styles.savingsOverview, className].join(" ")}>
      <div className={styles.inputs}>
        <div className={styles.savingsOverviewParent}>
          <b className={styles.savingsOverview1}>Savings Overview</b>
          <div className={styles.savingsValue}>$2,800.10</div>
        </div>
        <div className={styles.savingsDivider} />
        <SavingsProfiles avatar1="/avatar-14@2x.png" />
        <div className={styles.savingsButtons}>
          <button className={styles.button}>
            <img className={styles.starIcon} alt="" src="/star7.svg" />
            <div className={styles.button1}>Add Funds</div>
            <img className={styles.xIcon} alt="" src="/x8.svg" />
          </button>
          <button className={styles.button2}>
            <img className={styles.starIcon1} alt="" src="/star3.svg" />
            <div className={styles.button3}>Withdraw Funds</div>
            <img className={styles.xIcon1} alt="" src="/x4.svg" />
          </button>
        </div>
        <div className={styles.card}>
          <img className={styles.infoIcon} alt="" src="/info.svg" />
          <div className={styles.body}>
            <div className={styles.transferInput}>
              <h3 className={styles.enterAmountTo}>Enter amount to send</h3>
              <div className={styles.recipientInput}>
                <div className={styles.sendToParent}>
                  <div className={styles.sendTo}>Send to:</div>
                  <div className={styles.avatarParent}>
                    <img
                      className={styles.avatarIcon}
                      alt=""
                      src="/avatar1@2x.png"
                    />
                    <div className={styles.mattsSavings}>Matt’s Savings</div>
                  </div>
                </div>
                <div className={styles.balanceInfo}>
                  <div className={styles.balanceAvailable}>
                    Balance available:
                  </div>
                  <div className={styles.availableBalance}>$18,000.50</div>
                </div>
              </div>
              <div className={styles.input}>
                <div className={styles.amountValue}>$50.00</div>
                <div className={styles.button4}>
                  <img className={styles.starIcon2} alt="" src="/star.svg" />
                  <div className={styles.button5}>Max</div>
                  <img className={styles.xIcon2} alt="" src="/x2.svg" />
                </div>
              </div>
            </div>
            <button className={styles.button6}>
              <img className={styles.starIcon3} alt="" src="/star1.svg" />
              <b className={styles.button7}>{`Confirm & Send`}</b>
              <img className={styles.xIcon3} alt="" src="/x1.svg" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SavingsOverview1;
