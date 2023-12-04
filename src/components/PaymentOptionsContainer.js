import styles from "./PaymentOptionsContainer.module.css";

const PaymentOptionsContainer = () => {
  return (
    <div className={styles.iphone1415ProProceedOInner}>
      <div className={styles.frameParent}>
        <div className={styles.frameWrapper}>
          <div className={styles.orderSummaryParent}>
            <b className={styles.orderSummary}>Order Summary</b>
            <div className={styles.zoomFreakParent}>
              <div className={styles.zoomFreak}>Zoom Freak</div>
              <div className={styles.qty1Parent}>
                <div className={styles.size7Uk}>Qty: 1</div>
                <div className={styles.size7Uk}>Size: 7 UK</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.totalAmountParent}>
          <b className={styles.orderSummary}>Total Amount</b>
          <b className={styles.rm18000}>RM 180.00</b>
        </div>
        <div className={styles.wrapper}>
          <img className={styles.icon} alt="" src="/11-21@2x.png" />
        </div>
      </div>
    </div>
  );
};

export default PaymentOptionsContainer;
