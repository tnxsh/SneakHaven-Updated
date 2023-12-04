import { useMemo } from "react";
import styles from "./Property1Default1.module.css";

const Property1Default1 = ({
  property1DefaultBackgroundColor,
  property1DefaultPosition,
  property1DefaultTop,
  property1DefaultLeft,
}) => {
  const property1DefaultStyle = useMemo(() => {
    return {
      backgroundColor: property1DefaultBackgroundColor,
      position: property1DefaultPosition,
      top: property1DefaultTop,
      left: property1DefaultLeft,
    };
  }, [
    property1DefaultBackgroundColor,
    property1DefaultPosition,
    property1DefaultTop,
    property1DefaultLeft,
  ]);

  return (
    <div className={styles.property1default} style={property1DefaultStyle}>
      <div className={styles.shipOrder}>Ship Order</div>
    </div>
  );
};

export default Property1Default1;
