import { useMemo } from "react";
import styles from "./CardContainer.module.css";

const CardContainer = ({
  price,
  productDimensions,
  jordanRetro6Top,
  jordanRetro6Bottom,
  propHeight,
  propTop,
}) => {
  const frameDivStyle = useMemo(() => {
    return {
      top: jordanRetro6Top,
      bottom: jordanRetro6Bottom,
    };
  }, [jordanRetro6Top, jordanRetro6Bottom]);

  const image83IconStyle = useMemo(() => {
    return {
      height: propHeight,
      top: propTop,
    };
  }, [propHeight, propTop]);

  return (
    <div className={styles.iphone1415ProWishlistInner} style={frameDivStyle}>
      <div className={styles.frameParent}>
        <div className={styles.frameWrapper}>
          <div className={styles.orderSummaryParent}>
            <b className={styles.orderSummary}>Order Summary</b>
            <div className={styles.jordanRetro6GParent}>
              <div className={styles.jordanRetro6}>Jordan Retro 6 G</div>
              <div className={styles.qty1Parent}>
                <div className={styles.size7Uk}>Qty: 1</div>
                <div className={styles.size7Uk}>Size: 7 UK</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.totalAmountParent}>
          <b className={styles.orderSummary}>Total Amount</b>
          <b className={styles.rm19200}>{price}</b>
        </div>
        <img
          className={styles.image83Icon}
          alt=""
          src={productDimensions}
          style={image83IconStyle}
        />
      </div>
    </div>
  );
};

export default CardContainer;
