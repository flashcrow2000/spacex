import React from "react";
import styles from "./styles.module.css";

const Failure = () => {
  return (
    <div className={styles.container}>
      <div className={styles.text}>
        The SpaceX servers are busy communicationg with other galaxies, and did
        not reply to our request.
      </div>
    </div>
  );
};

export default Failure;
