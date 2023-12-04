import { useMemo } from "react";
import styles from "./Property1Default.module.css";

const Property1Default = ({
  getStarted,
  property1DefaultBackground,
  property1DefaultWidth,
  property1DefaultPosition,
  property1DefaultTop,
  property1DefaultLeft,
  property1DefaultBackgroundColor,
  property1DefaultCursor,
  getStartedFontFamily,
  getStartedColor,
  onFrameContainer48Click,
}) => {
  const property1Default1Style = useMemo(() => {
    return {
      background: property1DefaultBackground,
      width: property1DefaultWidth,
      position: property1DefaultPosition,
      top: property1DefaultTop,
      left: property1DefaultLeft,
      backgroundColor: property1DefaultBackgroundColor,
      cursor: property1DefaultCursor,
    };
  }, [
    property1DefaultBackground,
    property1DefaultWidth,
    property1DefaultPosition,
    property1DefaultTop,
    property1DefaultLeft,
    property1DefaultBackgroundColor,
    property1DefaultCursor,
  ]);

  const getStartedStyle = useMemo(() => {
    return {
      fontFamily: getStartedFontFamily,
      color: getStartedColor,
    };
  }, [getStartedFontFamily, getStartedColor]);

  return (
    <div
      className={styles.property1default}
      style={property1Default1Style}
      onClick={onFrameContainer48Click}
    >
      <b className={styles.getStarted} style={getStartedStyle}>
        {getStarted}
      </b>
    </div>
  );
};

export default Property1Default;
