import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./IPhone14ProGreenShoe.module.css";

const IPhone14ProGreenShoe = () => {
  const navigate = useNavigate();

  const onGroupIconClick = useCallback(() => {
    navigate("/iphone-14-15-pro-home-page");
  }, [navigate]);

  const onImage2Click = useCallback(() => {
    navigate("/iphone-14-15-pro-orange-shoe");
  }, [navigate]);

  const onImage3Click = useCallback(() => {
    navigate("/iphone-14-15-pro-blue-shoe");
  }, [navigate]);

  const onEllipseClick = useCallback(() => {
    navigate("/iphone-14-15-pro-cart");
  }, [navigate]);

  return (
    <div className={styles.iphone14ProGreenShoe}>
      <img className={styles.icon} alt="" src="/11-1@2x.png" />
      <b className={styles.zoomFreak}>Zoom Freak</b>
      <div className={styles.basketballShoes}>Basketball Shoes</div>
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
        className={styles.iphone14ProGreenShoeChild}
        alt=""
        src="/group-3.svg"
        onClick={onGroupIconClick}
      />
      <div className={styles.iphone14ProGreenShoeItem} />
      <div className={styles.iphone14ProGreenShoeInner} />
      <div className={styles.rectangleDiv} />
      <img className={styles.icon1} alt="" src="/11-2@2x.png" />
      <img
        className={styles.icon2}
        alt=""
        src="/21-1@2x.png"
        onClick={onImage2Click}
      />
      <img
        className={styles.icon3}
        alt=""
        src="/31-1@2x.png"
        onClick={onImage3Click}
      />
      <img className={styles.icon4} alt="" src="/1-1@2x.png" />
      <div className={styles.ellipseDiv} onClick={onEllipseClick} />
      <img className={styles.groupIcon} alt="" src="/group-5.svg" />
      <div className={styles.iphone14ProGreenShoeChild1} />
      <img
        className={styles.iphone14ProGreenShoeChild2}
        alt=""
        src="/group-6.svg"
      />
      <div className={styles.sneakhaven}>SneakHaven</div>
      <img className={styles.wifiIcon} alt="" src="/wifi1.svg" />
      <img className={styles.batteryIcon} alt="" src="/-battery2.svg" />
      <div className={styles.div}>10:28</div>
    </div>
  );
};

export default IPhone14ProGreenShoe;
