import { useCallback } from "react";
import LoginFormContainer from "../components/LoginFormContainer";
import DateOfBirthContainer from "../components/DateOfBirthContainer";
import { useNavigate } from "react-router-dom";
import styles from "./IPhone1415ProEditProf.module.css";

const IPhone1415ProEditProf = () => {
  const navigate = useNavigate();

  const onGroupContainer2Click = useCallback(() => {
    navigate("/iphone-14-15-pro-profile");
  }, [navigate]);

  const onSaveChangesTextClick = useCallback(() => {
    navigate("/iphone-14-15-pro-profile");
  }, [navigate]);

  const onFrameContainerClick = useCallback(() => {
    navigate("/iphone-14-15-pro-profile");
  }, [navigate]);

  return (
    <div className={styles.iphone1415ProEditProf}>
      <div className={styles.nameParent}>
        <b className={styles.name}>Name</b>
        <div className={styles.rectangleWrapper}>
          <div className={styles.groupChild} />
        </div>
        <div className={styles.samantha}>Samantha</div>
      </div>
      <LoginFormContainer inputValue="Email" userEmail="samantha@gmail.com" />
      <LoginFormContainer
        inputValue="Password"
        userEmail="************"
        propTop="515.2px"
        propWidth="79px"
        propColor="#000"
        propWidth1="89px"
      />
      <DateOfBirthContainer
        personalInfo="Date of Birth"
        personalInfoDateOfBirthPe="23/05/1995"
      />
      <DateOfBirthContainer
        personalInfo="Country/Region"
        personalInfoDateOfBirthPe="MALAYSIA"
        propTop="679.2px"
        propWidth="128px"
        propTop1="calc(50% - 6.2px)"
        propWidth1="79px"
      />
      <div className={styles.rectangleParent} onClick={onGroupContainer2Click}>
        <div className={styles.groupItem} />
        <div className={styles.saveChanges} onClick={onSaveChangesTextClick}>
          Save changes
        </div>
      </div>
      <div className={styles.ellipseParent} onClick={onFrameContainerClick}>
        <div className={styles.frameChild} />
        <img className={styles.arrowLeftIcon} alt="" src="/arrowleft.svg" />
      </div>
      <img
        className={styles.iphone1415ProEditProfChild}
        alt=""
        src="/group-22.svg"
      />
      <div className={styles.editProfile}>EDIT PROFILE</div>
      <div className={styles.iphoneStatusBar}>
        <img className={styles.wifiIcon} alt="" src="/wifi1.svg" />
        <img className={styles.batteryIcon} alt="" src="/-battery2.svg" />
        <div className={styles.div}>10:28</div>
      </div>
    </div>
  );
};

export default IPhone1415ProEditProf;
