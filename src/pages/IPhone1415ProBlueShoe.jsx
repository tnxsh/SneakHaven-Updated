import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./IPhone1415ProBlueShoe.module.css";

const IPhone1415ProBlueShoe = () => {
  const navigate = useNavigate();

  const onGroupIcon1Click = useCallback(() => {
    navigate("/iphone-14-15-pro-home-page");
  }, [navigate]);

  const onImageClick = useCallback(() => {
    navigate("/iphone-14-pro-green-shoe");
  }, [navigate]);

  const onImage1Click = useCallback(() => {
    navigate("/iphone-14-15-pro-orange-shoe");
  }, [navigate]);

  const onEllipseClick = useCallback(() => {
    navigate("/iphone-14-15-pro-cart");
  }, [navigate]);

  const onGroupIcon2Click = useCallback(() => {
    navigate("/iphone-14-15-pro-cart");
  }, [navigate]);

  return (
    <div className={styles.iphone1415ProBlueShoe}>
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
        className={styles.iphone1415ProBlueShoeChild}
        alt=""
        src="/group-8.svg"
      />
      <img
        className={styles.iphone1415ProBlueShoeItem}
        alt=""
        src="/group-9.svg"
        onClick={onGroupIcon1Click}
      />
      <div className={styles.iphone1415ProBlueShoeInner} />
      <div className={styles.rectangleDiv} />
      <div className={styles.iphone1415ProBlueShoeChild1} />
      <img
        className={styles.icon}
        alt=""
        src="/11-2@2x.png"
        onClick={onImageClick}
      />
      <img
        className={styles.icon1}
        alt=""
        src="/21-1@2x.png"
        onClick={onImage1Click}
      />
      <img className={styles.icon2} alt="" src="/31-1@2x.png" />
      <img className={styles.icon3} alt="" src="/31-2@2x.png" />
      <img className={styles.icon4} alt="" src="/1-1@2x.png" />
      <div className={styles.ellipseDiv} onClick={onEllipseClick} />
      <img
        className={styles.groupIcon}
        alt=""
        src="/group-10.svg"
        onClick={onGroupIcon2Click}
      />
      <div className={styles.iphone1415ProBlueShoeChild2} />
      <img
        className={styles.iphone1415ProBlueShoeChild3}
        alt=""
        src="/group-6.svg"
      />
      <div className={styles.sneakhaven}>SneakHaven</div>
      <img
        className={styles.magnifiyingGlassIcon}
        alt=""
        src="/magnifiying-glass@2x.png"
      />
      <img className={styles.wifiIcon} alt="" src="/wifi1.svg" />
      <img className={styles.batteryIcon} alt="" src="/-battery2.svg" />
      <div className={styles.div}>10:28</div>
    </div>
  );
};

export default IPhone1415ProBlueShoe;
