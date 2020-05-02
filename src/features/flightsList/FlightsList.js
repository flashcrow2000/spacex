import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  loadFlights,
  selectIsLoading,
  selectIsLoadingFailed,
  selectFlightsList,
} from "./flightsSlice";
import FlightDetails from "../../components/FlightDetails/FlightDetails";
import sortIcon from "../../assets/icons/sort@3x.png";
import filterIcon from "../../assets/icons/select@3x.png";

const FlightsList = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const loadingFailed = useSelector(selectIsLoadingFailed);
  const flightsList = useSelector(selectFlightsList);
  const [flights, setFlights] = useState([]);
  const [sorting, setSorting] = useState(1);
  useEffect(() => {
    // called only once, initial loading of spacex flights
    dispatch(loadFlights());
  }, []);

  useEffect(() => {
    // dispatched every time filters or sorting change
    setFlights(
      sorting > 0 ? [...flightsList] : [...flightsList.slice().reverse()]
    );
  }, [flightsList, sorting]);
  return (
    <div>
      <div>
        <div
          onClick={() => {
            setSorting(sorting * -1);
          }}
        >
          <div>Sort {sorting > 0 ? "descending" : "ascending"}</div>
          <img src={sortIcon} />
        </div>
      </div>
      <div>
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
