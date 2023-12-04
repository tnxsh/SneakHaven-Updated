import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./IPhone14Pro6thShoe.module.css";

const IPhone14Pro6thShoe = () => {
  const navigate = useNavigate();

  const onGroupIconClick = useCallback(() => {
    navigate("/iphone-14-15-pro-home-page");
  }, [navigate]);

  const onEllipseClick = useCallback(() => {
    navigate("/iphone-14-15-pro-cart");
  }, [navigate]);

  return (
    <div className={styles.iphone14Pro6thShoe}>
      <b className={styles.yeezyDesert}>Yeezy desert</b>
      <div className={styles.highCutShoe}>High-cut Shoe</div>
      <div className={styles.rm300Parent}>
        <div className={styles.rm300}>RM300</div>
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
        className={styles.iphone14Pro6thShoeChild}
        alt=""
        src="/group-3.svg"
        onClick={onGroupIconClick}
      />
      <div className={styles.iphone14Pro6thShoeItem} onClick={onEllipseClick} />
      <img
        className={styles.iphone14Pro6thShoeInner}
        alt=""
        src="/group-5.svg"
      />
      <div className={styles.ellipseDiv} />
      <img className={styles.groupIcon} alt="" src="/group-6.svg" />
      <div className={styles.sneakhaven}>SneakHaven</div>
      <img className={styles.wifiIcon} alt="" src="/wifi1.svg" />
      <img className={styles.receptionIcon} alt="" src="/reception.svg" />
      <img className={styles.batteryIcon} alt="" src="/-battery2.svg" />
      <div className={styles.div}>10:28</div>
      <img className={styles.image4Icon} alt="" src="/image-41@2x.png" />
    </div>
  );
};

export default IPhone14Pro6thShoe;
