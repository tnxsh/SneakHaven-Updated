import styles from "./FrameComponent3.module.css";

const FrameComponent3 = () => {
  return (
    <div className={styles.frameParent}>
      <div className={styles.frameGroup}>
        <div className={styles.frameWrapper}>
          <div className={styles.frameContainer}>
            <div className={styles.logosmastercardParent}>
              <img
                className={styles.logosmastercardIcon}
                alt=""
                src="/logosmastercard.svg"
              />
              <div className={styles.rhbBankParent}>
                <div className={styles.rhbBank}>RHB Bank</div>
                <div className={styles.rhbBank}>**** **** **** 2022</div>
              </div>
            </div>
            <img
              className={styles.component10Icon}
              alt=""
              src="/component-10.svg"
            />
          </div>
        </div>
        <div className={styles.frameWrapper}>
          <div className={styles.frameContainer}>
            <div className={styles.logosmastercardParent}>
              <img
                className={styles.logosvisaIcon}
                alt=""
                src="/logosvisa.svg"
              />
              <div className={styles.rhbBankParent}>
                <div className={styles.rhbBank}>HSBC Bank</div>
                <div className={styles.rhbBank}>**** **** **** 6246</div>
              </div>
            </div>
            <img
              className={styles.component10Icon}
              alt=""
              src="/component-10.svg"
            />
          </div>
        </div>
      </div>
      <div className={styles.frameWrapper1}>
        <div className={styles.vuesaxlinearaddParent}>
          <div className={styles.vuesaxlinearadd}>
            <div className={styles.addWrapper}>
              <img className={styles.addIcon} alt="" src="/add.svg" />
            </div>
          </div>
          <div className={styles.rhbBank}>Add New Card</div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent3;
