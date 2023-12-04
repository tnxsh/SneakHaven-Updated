import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./IPhone1415ProProfile.module.css";

const IPhone1415ProProfile = () => {
  const navigate = useNavigate();

  const onCheckoutContainerClick = useCallback(() => {
    navigate("/iphone-14-15-pro-edit-profile");
  }, [navigate]);
  
  const onVectorIconClick = useCallback(() => {
    navigate("/iphone-14-15-pro-home-page");
  }, [navigate]);

  return (
    <div className={styles.iphone1415ProProfile}>
      <img className={styles.footerIcon} alt="" src="/footer2.svg" />
      <img
        className={styles.vectorIcon}
        alt=""
        src="/vector1.svg"
        onClick={onVectorIconClick}
      />
      <div className={styles.iphoneStatusBar}>
        <img className={styles.wifiIcon} alt="" src="/wifi1.svg" />
        <img className={styles.batteryIcon} alt="" src="/-battery2.svg" />
        <div className={styles.div}>10:28</div>
      </div>
      <div className={styles.profile}>Profile</div>
      <img
        className={styles.iphone1415ProProfileChild}
        alt=""
        src="/group-21.svg"
      />
      <b className={styles.samantha}>SAMANTHA</b>
      <div className={styles.rewardsParent}>
        <b className={styles.rewards}>REWARDS</b>
        <div className={styles.available}>2 Available</div>
        <img className={styles.vectorIcon} alt="" src="/vector2.svg" />
      </div>
      <div className={styles.recommendedParent}>
        <b className={styles.recommended}>Recommended</b>
        <img className={styles.vectorIcon1} alt="" src="/vector2.svg" />
      </div>
      <div className={styles.inboxParent}>
        <b className={styles.inbox}>INBOX</b>
        <div className={styles.viewMessages}>View Messages</div>
        <div className={styles.frameChild} />
        <b className={styles.b}>9+</b>
        <img className={styles.vectorIcon2} alt="" src="/vector3.svg" />
      </div>
      <div className={styles.checkout} onClick={onCheckoutContainerClick}>
        <div className={styles.checkoutChild} />
        <b className={styles.editProfile}>EDIT PROFILE</b>
      </div>
    </div>
  );
};

export default IPhone1415ProProfile;
