import { useCallback } from "react";
import TouchIDIcon from "../components/TouchIDIcon";
import { useNavigate } from "react-router-dom";
import styles from "./IPhone1415Pro1.module.css";

const IPhone1415Pro1 = () => {
  const navigate = useNavigate();

  const onSignUpTextClick = useCallback(() => {
    navigate("/iphone-14-15-pro-signup");
  }, [navigate]);

  const onSubmitContainerClick = useCallback(() => {
    navigate("/iphone-14-15-pro-home-page");
  }, [navigate]);

  const onGuestContainerClick = useCallback(() => {
    navigate("/iphone-14-15-pro-home-page");
  }, [navigate]);

  return (
    <div className={styles.iphone1415Pro1}>
      <img
        className={styles.iphone1415Pro1Child}
        alt=""
        src="/rectangle-8.svg"
      />
      <img className={styles.rectangleIcon} alt="" src="/rectangle@2x.png" />
      <img
        className={styles.iphone1415Pro1Item}
        alt=""
        src="/rectangle-9.svg"
      />
      <TouchIDIcon />
      <div className={styles.superior}>
        <b className={styles.signin}>SignIn</b>
        <b className={styles.signup} onClick={onSignUpTextClick}>
          SignUp
        </b>
        <img className={styles.superiorChild} alt="" src="/line-1.svg" />
        <img className={styles.slidersIcon} alt="" src="/sliders1.svg" />
      </div>
      <div className={styles.inputEmail}>
        <div className={styles.inputEmailChild} />
        <b className={styles.email}>Email</b>
      </div>
      <div className={styles.inputSenha}>
        <div className={styles.inputEmailChild} />
        <b className={styles.password}>Password</b>
      </div>
      <div className={styles.submit} onClick={onSubmitContainerClick}>
        <div className={styles.submitChild} />
        <b className={styles.login}>Login</b>
      </div>
      <b className={styles.or}>or</b>
      <b className={styles.forgotYourPassword}>Forgot your password?</b>
      <img className={styles.iphone1415Pro1Inner} alt="" src="/line-4.svg" />
      <img className={styles.lineIcon} alt="" src="/line-5.svg" />
      <b className={styles.or1}>or</b>
      <img className={styles.iphone1415Pro1Child1} alt="" src="/line-4.svg" />
      <img className={styles.iphone1415Pro1Child2} alt="" src="/line-5.svg" />
      <div className={styles.guest} onClick={onGuestContainerClick}>
        <div className={styles.guestChild} />
        <b className={styles.continueAsGuest}>Continue as Guest</b>
        <div className={styles.image6} />
      </div>
      <div className={styles.sneakhaven}>SneakHaven</div>
      <img className={styles.wifiIcon} alt="" src="/wifi.svg" />
      <img className={styles.batteryIcon} alt="" src="/-battery1.svg" />
      <div className={styles.div}>10:28</div>
    </div>
  );
};

export default IPhone1415Pro1;
