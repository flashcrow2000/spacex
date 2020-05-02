import React from "react";
import logo from "../../assets/images/spacex-logo.png";
import styles from "./styles.module.css";
import reloadIcon from "../../assets/icons/refresh@3x.png";
import { useDispatch } from "react-redux";
import { loadFlights } from "../flightsList/flightsSlice";

const Header = () => {
  const dispatch = useDispatch();
  return (
    <div className={styles.container}>
      <div className={styles.logoContainer}>
        <img className={styles.image} src={logo} />
        <div className={styles.text}>Launches</div>
      </div>
      <div
        className={styles.buttonContainer}
        onClick={() => {
          dispatch(loadFlights());
        }}
      >
        <div className={styles.buttonText}>Reload data</div>
        <img className={styles.buttonIcon} src={reloadIcon} />
      </div>
    </div>
  );
};

export default Header;
