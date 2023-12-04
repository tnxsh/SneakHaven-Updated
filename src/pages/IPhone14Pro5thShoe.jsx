import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./IPhone14Pro5thShoe.module.css";

const IPhone14Pro5thShoe = () => {
  const navigate = useNavigate();

  const onGroupIconClick = useCallback(() => {
    navigate("/iphone-14-15-pro-home-page");
  }, [navigate]);

  const onEllipseClick = useCallback(() => {
    navigate("/iphone-14-15-pro-cart");
  }, [navigate]);

  return (
    <div className={styles.iphone14Pro5thShoe}>
      <div className={styles.sneaker}>{`Sneaker `}</div>
      <div className={styles.rm200Parent}>
        <div className={styles.rm200}>RM200</div>
        <div className={styles.price}>Price</div>
      </div>
      <div className={styles.thereHasNeverContainer}>
        <p className={styles.thereHasNever}>
          There has never been a player like Giannis.
        </p>
        <p className={styles.thereHasNever}>
          His freakishly athletic game combines
        </p>
        <p className={styles.thereHasNever}>massive strides,</p>
      </div>
      <img
        className={styles.iphone14Pro5thShoeChild}
        alt=""
        src="/group-3.svg"
        onClick={onGroupIconClick}
      />
      <img className={styles.icon} alt="" src="/1-1@2x.png" />
      <div className={styles.iphone14Pro5thShoeItem} onClick={onEllipseClick} />
      <img
        className={styles.iphone14Pro5thShoeInner}
        alt=""
        src="/group-5.svg"
      />
      <div className={styles.ellipseDiv} />
      <img className={styles.groupIcon} alt="" src="/group-6.svg" />
      <img className={styles.tenis5Icon} alt="" src="/tenis51@2x.png" />
      <div className={styles.sneakhaven}>SneakHaven</div>
      <img className={styles.wifiIcon} alt="" src="/wifi1.svg" />
      <img className={styles.batteryIcon} alt="" src="/-battery2.svg" />
      <div className={styles.div}>10:28</div>
      <b className={styles.pharrellXNmd}>Pharrell x nmd</b>
    </div>
  );
};

export default IPhone14Pro5thShoe;
