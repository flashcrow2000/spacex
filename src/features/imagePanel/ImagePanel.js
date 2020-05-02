import React from "react";
import rocket from "../../assets/images/launch-home.png";
import styles from "./style.module.css";

const ImagePanel = () => {
  return (
    <div>
      <div className={styles.image}>
        <img src={rocket} />
      </div>
    </div>
  );
};

export default ImagePanel;
