import styles from "./FormContainer.module.css";

const FormContainer = () => {
  return (
    <div className={styles.item1}>
      <div className={styles.item} />
      <div className={styles.pieces}>
        <img className={styles.piecesChild} alt="" src="/group-1.svg" />
        <div className={styles.div}>1</div>
      </div>
      <b className={styles.zoomFreak}>Zoom Freak</b>
      <div className={styles.rm180}>RM 180</div>
      <img className={styles.binIcon} alt="" src="/bin.svg" />
    </div>
  );
};

export default FormContainer;
