import { useCallback } from "react";
import CardContainer from "../components/CardContainer";
import { useNavigate } from "react-router-dom";
import styles from "./IPhone1415ProWishlist.module.css";

const IPhone1415ProWishlist = () => {
  const navigate = useNavigate();

  const onGroupIconClick = useCallback(() => {
    navigate("/iphone-14-15-pro-home-page");
  }, [navigate]);

  return (
    <div className={styles.iphone1415ProWishlist}>
      <div className={styles.iphoneStatusBar}>
        <img className={styles.wifiIcon} alt="" src="/wifi1.svg" />
        <img className={styles.batteryIcon} alt="" src="/-battery2.svg" />
        <div className={styles.div}>10:28</div>
      </div>
      <img className={styles.footerIcon} alt="" src="/footer1.svg" />
      <CardContainer price="RM 192.00" productDimensions="/image-83@2x.png" />
      <CardContainer
        price="RM 192.00"
        productDimensions="/image-32@2x.png"
        jordanRetro6Top="35.45%"
        jordanRetro6Bottom="46.71%"
        propHeight="59.7px"
        propTop="3px"
      />
      <CardContainer
        price="RM 455.00"
        productDimensions="/image-71@2x.png"
        jordanRetro6Top="54.46%"
        jordanRetro6Bottom="27.7%"
        propHeight="54.9px"
        propTop="6px"
      />
      <div className={styles.myWishlist}>My Wishlist</div>
      <div className={styles.arrowLeftParent}>
        <img className={styles.arrowLeftIcon} alt="" src="/arrowleft.svg" />
        <img
          className={styles.frameChild}
          alt=""
          src="/group-3.svg"
          onClick={onGroupIconClick}
        />
      </div>
    </div>
  );
};

export default IPhone1415ProWishlist;
