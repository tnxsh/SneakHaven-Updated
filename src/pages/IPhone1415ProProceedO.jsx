import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import FrameComponent3 from "../components/FrameComponent3";
import FrameComponent2 from "../components/FrameComponent2";
import PaymentOptionsContainer from "../components/PaymentOptionsContainer";
import FrameComponent4 from "../components/FrameComponent4";
import Property1Default from "../components/Property1Default";
import styles from "./IPhone1415ProProceedO.module.css";

const IPhone1415ProProceedO = () => {
  const navigate = useNavigate();

  const onFrameContainer3Click = useCallback(() => {
    navigate("/iphone-14-15-pro-ship");
  }, [navigate]);

  const onFrameContainer6Click = useCallback(() => {
    navigate("/iphone-14-15-pro-cart");
  }, [navigate]);

  return (
    <div className={styles.iphone1415ProProceedO}>
      <div className={styles.paymentOptions}>Payment Options</div>
      <div className={styles.iphone1415ProProceedOInner}>
        <div className={styles.frameParent}>
          <div className={styles.vuesaxlinearticketDiscountParent}>
            <img
              className={styles.vuesaxlinearticketDiscountIcon}
              alt=""
              src="/vuesaxlinearticketdiscount1.svg"
            />
            <div className={styles.offers}>Offers</div>
          </div>
          <img
            className={styles.vuesaxlinearticketDiscountIcon}
            alt=""
            src="/vuesaxlineararrowright1.svg"
          />
        </div>
      </div>
      <b className={styles.crediDebit}>{`Credi & Debit Cards`}</b>
      <FrameComponent3 />
      <b className={styles.address}>Address</b>
      <FrameComponent2 />
      <PaymentOptionsContainer />
      <div className={styles.iphoneStatusBar}>
        <img className={styles.wifiIcon} alt="" src="/wifi1.svg" />
        <img className={styles.batteryIcon} alt="" src="/-battery2.svg" />
        <div className={styles.div}>10:28</div>
      </div>
      <b className={styles.morePaymentOptions}>More Payment Options</b>
      <FrameComponent4 />
      <div className={styles.bar}>
        <div className={styles.base} />
      </div>
      <div className={styles.instanceParent}>
        <Property1Default
          getStarted="Buy"
          property1DefaultBackground="unset"
          property1DefaultWidth="159px"
          property1DefaultPosition="absolute"
          property1DefaultTop="16px"
          property1DefaultLeft="213px"
          property1DefaultBackgroundColor="#027fee"
          property1DefaultCursor="pointer"
          getStartedFontFamily="'Inria Sans'"
          getStartedColor="#eaedf4"
          onFrameContainer48Click={onFrameContainer3Click}
        />
        <div className={styles.rm18000Parent}>
          <b className={styles.offers}>RM 180.00</b>
          <div className={styles.viewDetailedBill}>View detailed bill</div>
        </div>
      </div>
      <div className={styles.ellipseParent} onClick={onFrameContainer6Click}>
        <div className={styles.frameChild} />
        <img className={styles.arrowLeftIcon} alt="" src="/arrowleft.svg" />
      </div>
    </div>
  );
};

export default IPhone1415ProProceedO;
