import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./IPhone14Pro2ndShoe.module.css";

const IPhone14Pro2ndShoe = () => {
  const navigate = useNavigate();

  const onGroupIconClick = useCallback(() => {
    navigate("/iphone-14-15-pro-home-page");
  }, [navigate]);

  const onEllipseClick = useCallback(() => {
    navigate("/iphone-14-15-pro-cart");
  }, [navigate]);

  const onEllipse1Click = useCallback(() => {
    navigate("/iphone-14-15-pro-cart");
  }, [navigate]);

  return (
    <div className={styles.iphone14Pro2ndShoe}>
      <div className={styles.casualShoes}>Casual Shoes</div>
      <div className={styles.rm180Parent}>
        <div className={styles.rm180}>RM180</div>
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
        className={styles.iphone14Pro2ndShoeChild}
        alt=""
        src="/group-3.svg"
        onClick={onGroupIconClick}
      />
      <img className={styles.icon} alt="" src="/1-1@2x.png" />
      <div className={styles.iphone14Pro2ndShoeItem} onClick={onEllipseClick} />
      <img
        className={styles.iphone14Pro2ndShoeInner}
        alt=""
        src="/group-5.svg"
      />
      <div className={styles.ellipseDiv} onClick={onEllipse1Click} />
      <img className={styles.groupIcon} alt="" src="/group-6.svg" />
      <div className={styles.sneakhaven}>SneakHaven</div>
      <img className={styles.wifiIcon} alt="" src="/wifi1.svg" />
      <img className={styles.batteryIcon} alt="" src="/-battery2.svg" />
      <div className={styles.div}>10:28</div>
      <img className={styles.image3Icon} alt="" src="/image-31@2x.png" />
      <b className={styles.nikeYeezy}>nike Yeezy</b>
    </div>
  );
};

export default IPhone14Pro2ndShoe;
