import React from "react";
import { format } from "date-fns";
import styles from "./styles.module.css";

const FlightDetails = React.memo(({ index, name, date, rocketType }) => {
  return (
    <div className={styles.container}>
      <div className={styles.index}>{`#${index}`}</div>
      <div className={styles.name}>{name}</div>
      <div className={styles.last}>
        <div className={styles.date}>
          {format(new Date(date), "do MMMM yyyy")}
        </div>
        <div className={styles.rocket}>{rocketType}</div>
      </div>
    </div>
  );
});

export default FlightDetails;
