import Property1Default1 from "../components/Property1Default1";
import styles from "./IPhone1415ProShip.module.css";

const IPhone1415ProShip = () => {
  return (
    <div className={styles.iphone1415ProShip}>
      <img className={styles.bikeIcon} alt="" src="/bike.svg" />
      <Property1Default1
        property1DefaultBackgroundColor="#393e46"
        property1DefaultPosition="absolute"
        property1DefaultTop="340px"
        property1DefaultLeft="calc(50% - 114.5px)"
      />
      <div className={styles.iphoneStatusBar}>
        <img className={styles.wifiIcon} alt="" src="/wifi1.svg" />
        <img className={styles.batteryIcon} alt="" src="/-battery2.svg" />
        <div className={styles.div}>10:28</div>
      </div>
      <img className={styles.footerIcon} alt="" src="/footer2.svg" />
    </div>
  );
};

export default IPhone1415ProShip;
