import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./TimeHeaderContainer.module.css";

const TimeHeaderContainer = () => {
  const navigate = useNavigate();

  const onEllipseIconClick = useCallback(() => {
    navigate("/iphone-14-15-pro-profile");
  }, [navigate]);

  return (
    <div className={styles.header}>
      <div className={styles.headerChild} />
      <img
        className={styles.headerItem}
        alt=""
        src="/ellipse-3.svg"
        onClick={onEllipseIconClick}
      />
      <img className={styles.wifiIcon} alt="" src="/wifi1.svg" />
      <img className={styles.batteryIcon} alt="" src="/-battery2.svg" />
      <div className={styles.div}>10:28</div>
      <div className={styles.sneakhaven}>SneakHaven</div>
      <img className={styles.vectorIcon} alt="" src="/vector.svg" />
    </div>
  );
};

export default TimeHeaderContainer;
