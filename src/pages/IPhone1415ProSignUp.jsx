import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./IPhone1415ProSignUp.module.css";

const IPhone1415ProSignUp = () => {
  const navigate = useNavigate();

  const onSignInTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className={styles.iphone1415ProSignUp}>
      <img className={styles.rectangleIcon} alt="" src="/rectangle@2x.png" />
      <div className={styles.iphone1415ProSignUpChild} />
      <div className={styles.superior}>
        <b className={styles.signup}>SignUp</b>
        <img className={styles.superiorChild} alt="" src="/line-1.svg" />
        <img className={styles.slidersIcon} alt="" src="/sliders.svg" />
        <b className={styles.signin} onClick={onSignInTextClick}>
          SignIn
        </b>
      </div>
      <div className={styles.inputEmail}>
        <div className={styles.inputEmailChild} />
        <b className={styles.email}>Email</b>
      </div>
      <div className={styles.inputSenha}>
        <div className={styles.inputEmailChild} />
        <b className={styles.password}>Password</b>
      </div>
      <div className={styles.inputSenha1}>
        <div className={styles.inputEmailChild} />
        <b className={styles.userName}>User Name</b>
      </div>
      <div className={styles.inputSenha2}>
        <div className={styles.inputEmailChild} />
        <b className={styles.confirmThePassword}>Confirm the password</b>
      </div>
      <div className={styles.submit}>
        <div className={styles.submitChild} />
        <b className={styles.submit1}>Submit</b>
      </div>
      <b className={styles.or}>or</b>
      <img
        className={styles.iphone1415ProSignUpItem}
        alt=""
        src="/line-4.svg"
      />
      <img
        className={styles.iphone1415ProSignUpInner}
        alt=""
        src="/line-5.svg"
      />
      <div className={styles.sneakhaven}>SneakHaven</div>
      <img className={styles.wifiIcon} alt="" src="/wifi.svg" />
      <img className={styles.batteryIcon} alt="" src="/-battery1.svg" />
      <div className={styles.div}>10:28</div>
    </div>
  );
};

export default IPhone1415ProSignUp;
