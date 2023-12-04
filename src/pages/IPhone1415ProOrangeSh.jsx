import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./IPhone1415ProOrangeSh.module.css";

const IPhone1415ProOrangeSh = () => {
  const navigate = useNavigate();

  const onGroupIcon1Click = useCallback(() => {
    navigate("/iphone-14-15-pro-home-page");
  }, [navigate]);

  const onRectangle2Click = useCallback(() => {
    navigate("/iphone-14-15-pro-blue-shoe");
  }, [navigate]);

  const onImageClick = useCallback(() => {
    navigate("/iphone-14-pro-green-shoe");
  }, [navigate]);

  const onImage3Click = useCallback(() => {
    navigate("/iphone-14-15-pro-blue-shoe");
  }, [navigate]);

  const onEllipseClick = useCallback(() => {
    navigate("/iphone-14-15-pro-cart");
  }, [navigate]);

  return (
    <div className={styles.iphone1415ProOrangeSh}>
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
        className={styles.iphone1415ProOrangeShChild}
        alt=""
        src="/group-8.svg"
      />
      <img
        className={styles.iphone1415ProOrangeShItem}
        alt=""
        src="/group-9.svg"
        onClick={onGroupIcon1Click}
      />
      <div className={styles.iphone1415ProOrangeShInner} />
      <div className={styles.rectangleDiv} />
      <div
        className={styles.iphone1415ProOrangeShChild1}
        onClick={onRectangle2Click}
      />
      <img
        className={styles.icon}
        alt=""
        src="/11-2@2x.png"
        onClick={onImageClick}
      />
      <img className={styles.icon1} alt="" src="/21-1@2x.png" />
      <img className={styles.icon2} alt="" src="/21-3@2x.png" />
      <img
        className={styles.icon3}
        alt=""
        src="/31-1@2x.png"
        onClick={onImage3Click}
      />
      <img className={styles.icon4} alt="" src="/1-1@2x.png" />
      <div className={styles.ellipseDiv} onClick={onEllipseClick} />
      <img className={styles.groupIcon} alt="" src="/group-10.svg" />
      <div className={styles.iphone1415ProOrangeShChild2} />
      <img
        className={styles.iphone1415ProOrangeShChild3}
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

export default IPhone1415ProOrangeSh;
