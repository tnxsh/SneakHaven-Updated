import styles from "./FrameComponent2.module.css";

const FrameComponent2 = () => {
  return (
    <div className={styles.frameParent}>
      <div className={styles.frameWrapper}>
        <div className={styles.frameContainer}>
          <div className={styles.no33JalanSkudai23TamanWrapper}>
            <div className={styles.no33Jalan}>
              No 33, Jalan Skudai 23, Taman Skudai
            </div>
          </div>
        </div>
      </div>
      <div className={styles.frameDiv}>
        <div className={styles.frameContainer}>
          <div className={styles.frameChild} />
        </div>
      </div>
      <div className={styles.frameWrapper2}>
        <div className={styles.frameWrapper3}>
          <div className={styles.no33JalanSkudai23TamanWrapper}>
            <div className={styles.johor}>JOHOR</div>
          </div>
        </div>
      </div>
      <div className={styles.frameWrapper4}>
        <div className={styles.wrapper}>
          <div className={styles.div}>80990</div>
        </div>
      </div>
      <div className={styles.frameItem} />
    </div>
  );
};

export default FrameComponent2;
