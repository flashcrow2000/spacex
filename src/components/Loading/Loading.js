import React from "react";
import styles from "./styles.module.css";

const Loading = () => {
  return (
    <div className={styles.container}>
      <div className={styles.text}>Fetching flights from SpaceX servers</div>
    </div>
  );
};

export default Loading;
