import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./TouchIDIcon.module.css";

const TouchIDIcon = () => {
  const navigate = useNavigate();

  const onTouchIDClick = useCallback(() => {
    navigate("/iphone-14-15-pro-home-page");
  }, [navigate]);

  return (
    <img
      className={styles.touchIdIcon}
      alt=""
      src="/touch-id.svg"
      onClick={onTouchIDClick}
    />
  );
};

export default TouchIDIcon;
