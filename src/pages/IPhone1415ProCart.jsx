import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import FormContainer from "../components/FormContainer";
import styles from "./IPhone1415ProCart.module.css";

const IPhone1415ProCart = () => {
  const navigate = useNavigate();

  const onCheckoutContainerClick = useCallback(() => {
    navigate("/iphone-14-15-pro-proceed-order");
  }, [navigate]);

  const onGroupIconClick = useCallback(() => {
    navigate("/iphone-14-15-pro-home-page");
  }, [navigate]);

  return (
    <div className={styles.iphone1415ProCart}>
      <div className={styles.checkout} onClick={onCheckoutContainerClick}>
        <div className={styles.checkoutChild} />
        <img className={styles.goBackIcon} alt="" src="/go-back.svg" />
        <div className={styles.checkout1}>Checkout</div>
        <div className={styles.rm180}>RM 180</div>
      </div>
      <FormContainer />
      <div className={styles.quantity}>
        <div className={styles.quantityChild} />
        <i className={styles.youHave1}>You have 1 items in your cart</i>
      </div>
      <img className={styles.headingIcon} alt="" src="/heading.svg" />
      <div className={styles.iphoneStatusBar}>
        <img className={styles.wifiIcon} alt="" src="/wifi1.svg" />
        <img className={styles.batteryIcon} alt="" src="/-battery2.svg" />
        <div className={styles.div}>10:28</div>
      </div>
      <div className={styles.basketballShoes}>Basketball Shoes</div>
      <img className={styles.icon} alt="" src="/11-21@2x.png" />
      <div className={styles.bottomSection}>
        <div className={styles.bottomSectionChild} />
        <div className={styles.bottomSectionItem} />
      </div>
      <div className={styles.shoppingCart}>Shopping cart</div>
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

export default IPhone1415ProCart;
