import { useMemo } from "react";
import styles from "./LoginFormContainer.module.css";

const LoginFormContainer = ({
  inputValue,
  userEmail,
  propTop,
  propWidth,
  propColor,
  propWidth1,
}) => {
  const groupDivStyle = useMemo(() => {
    return {
      top: propTop,
    };
  }, [propTop]);

  const emailStyle = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const samanthagmailcomStyle = useMemo(() => {
    return {
      color: propColor,
      width: propWidth1,
    };
  }, [propColor, propWidth1]);

  return (
    <div className={styles.emailParent} style={groupDivStyle}>
      <b className={styles.email} style={emailStyle}>
        {inputValue}
      </b>
      <div className={styles.rectangleParent}>
        <div className={styles.groupChild} />
        <div className={styles.samanthagmailcom} style={samanthagmailcomStyle}>
          {userEmail}
        </div>
      </div>
    </div>
  );
};

export default LoginFormContainer;
