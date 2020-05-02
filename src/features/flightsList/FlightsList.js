import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  loadFlights,
  selectIsLoading,
  selectIsLoadingFailed,
  selectFlightsList,
} from "./flightsSlice";
import FlightDetails from "../../components/FlightDetails/FlightDetails";
import filterIcon from "../../assets/icons/select@3x.png";
import FilterButton from "../../components/FilterButton/FilterButton";
import SortButton from "../../components/SortButton/SortButton";
import styles from "./styles.module.css";

const FlightsList = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const loadingFailed = useSelector(selectIsLoadingFailed);
  const flightsList = useSelector(selectFlightsList);
  const [flights, setFlights] = useState([]);
  const [sorting, setSorting] = useState(1);
  const [years, setYears] = useState([]);
  function rangeArray(start, end) {
    // creates an Array containing values from start to end
    return Array(end - start + 1)
      .fill()
      .map((_, idx) => start + idx);
  }
  useEffect(() => {
    // called only once, initial loading of spacex flights
    dispatch(loadFlights());
  }, []);

  useEffect(() => {
    // dispatched every time filters or sorting change
    setFlights(
      sorting > 0 ? [...flightsList] : [...flightsList.slice().reverse()]
    );
    if (flightsList.length) {
      const firstFlightYear = new Date(flightsList[0].date).getFullYear();
      const lastScheduledFlightYear = new Date(
        flightsList[flightsList.length - 1].date
      ).getFullYear();
      setYears(rangeArray(firstFlightYear, lastScheduledFlightYear));
    }
  }, [flightsList, sorting]);
  return (
    <div>
      <div className={styles.buttonContainer}>
        <FilterButton years={years} />
        <SortButton
          sorting={sorting}
          clickHandler={() => {
            setSorting(sorting * -1);
          }}
        />
      </div>
      <div style={{ margin: "8px 0 0 0" }}>
        {flights.map((flight) => (
          <FlightDetails
            key={flight.index}
            index={flight.index}
            name={flight.name}
            date={flight.date}
            rocketType={flight.rocketType}
          />
        ))}
      </div>
    </div>
  );
};

export default FlightsList;
