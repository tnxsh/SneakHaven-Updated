import { useMemo } from "react";
import styles from "./DateOfBirthContainer.module.css";

const DateOfBirthContainer = ({
  personalInfo,
  personalInfoDateOfBirthPe,
  propTop,
  propWidth,
  propTop1,
  propWidth1,
}) => {
  const groupDiv1Style = useMemo(() => {
    return {
      top: propTop,
    };
  }, [propTop]);

  const dateOfBirthStyle = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const divStyle = useMemo(() => {
    return {
      top: propTop1,
      width: propWidth1,
    };
  }, [propTop1, propWidth1]);

  return (
    <div className={styles.dateOfBirthParent} style={groupDiv1Style}>
      <b className={styles.dateOfBirth} style={dateOfBirthStyle}>
        {personalInfo}
      </b>
      <div className={styles.rectangleParent}>
        <div className={styles.groupChild} />
        <img
          className={styles.materialSymbolsarrowBackIoIcon}
          alt=""
          src="/materialsymbolsarrowbackios.svg"
        />
        <div className={styles.div} style={divStyle}>
          {personalInfoDateOfBirthPe}
        </div>
      </div>
    </div>
  );
};

export default DateOfBirthContainer;
