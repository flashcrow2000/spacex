import React from "react";
import sortIcon from "../../assets/icons/sort@3x.png";
import styles from "./styles.module.css";

const SortButton = ({ clickHandler, sorting }) => {
  return (
    <div className={styles.container} onClick={clickHandler}>
      <div>Sort {sorting > 0 ? "descending" : "ascending"}</div>
      <img className={styles.icon} src={sortIcon} />
    </div>
  );
};

export default SortButton;
