import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./PopularFormContainer.module.css";

const PopularFormContainer = () => {
  const navigate = useNavigate();

  const onTenis2ContainerClick = useCallback(() => {
    navigate("/iphone-14-pro-2nd-shoe");
  }, [navigate]);

  const onTenis3ContainerClick = useCallback(() => {
    navigate("/iphone-14-pro-3th-shoe");
  }, [navigate]);

  const onTenis4ContainerClick = useCallback(() => {
    navigate("/iphone-14-pro-4th-shoe");
  }, [navigate]);

  const onTenis5ContainerClick = useCallback(() => {
    navigate("/iphone-14-pro-5th-shoe");
  }, [navigate]);

  const onTenis6ContainerClick = useCallback(() => {
    navigate("/iphone-14-pro-6th-shoe");
  }, [navigate]);

  return (
    <div className={styles.secondSection}>
      <b className={styles.morePopular}>More Popular</b>
      <div className={styles.tenis1}>
        <div className={styles.tenis1Child} />
        <b className={styles.nikeGreen}>{`Nike zoom `}</b>
      </div>
      <div className={styles.tenis2} onClick={onTenis2ContainerClick}>
        <div className={styles.tenis2Child} />
        <b className={styles.nikeYeezy}>nike Yeezy</b>
        <img className={styles.image3Icon} alt="" src="/image-3@2x.png" />
      </div>
      <div className={styles.tenis3} onClick={onTenis3ContainerClick}>
        <div className={styles.tenis3Child} />
        <b className={styles.nikeYeezy700}>nike Yeezy 700</b>
        <img className={styles.image2Icon} alt="" src="/image-2@2x.png" />
      </div>
      <div className={styles.tenis4} onClick={onTenis4ContainerClick}>
        <div className={styles.tenis4Child} />
        <b className={styles.adidasBoost}>Adidas BOOsT</b>
        <img className={styles.image5Icon} alt="" src="/image-5@2x.png" />
      </div>
      <div className={styles.tenis5} onClick={onTenis5ContainerClick}>
        <div className={styles.tenis5Child} />
        <b className={styles.pharrellXNmd}>Pharrell x nmd</b>
        <img className={styles.tenis5Icon} alt="" src="/tenis5@2x.png" />
      </div>
      <div className={styles.tenis6} onClick={onTenis6ContainerClick}>
        <div className={styles.tenis6Child} />
        <b className={styles.yeezyDesert}>Yeezy desert</b>
        <img className={styles.image4Icon} alt="" src="/image-4@2x.png" />
      </div>
    </div>
  );
};

export default PopularFormContainer;
