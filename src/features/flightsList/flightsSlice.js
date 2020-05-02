import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const flightsSlice = createSlice({
  name: "flights",
  initialState: {
    loading: false,
    failed: false,
    list: [],
  },
  reducers: {
    startLoading: (state) => {
      state.loading = true;
      state.failed = false;
    },
    loadingFailed: (state) => {
      state.loading = false;
      state.failed = true;
    },
    loadingSuccess: (state, action) => {
      state.loading = false;
      state.failed = false;
      state.list = [...action.payload.flights];
    },
  },
});

export const {
  startLoading,
  loadingFailed,
  loadingSuccess,
} = flightsSlice.actions;

export const loadFlights = () => (dispatch) => {
  dispatch(startLoading());
  axios
    .get("https://api.spacexdata.com/v3/launches")
    .then((response) => {
      const minimizedFlightsInfo = response.data.map((flightInfo, index) => {
        return {
          index: index + 1,
          name: flightInfo.mission_name,
          date: flightInfo.launch_date_unix * 1000,
          rocketType: flightInfo.rocket?.rocket_name ?? "N/A",
        };
      });
      dispatch(
        loadingSuccess({
          flights: minimizedFlightsInfo,
        })
      );
    })
    .catch((err) => {
      console.log("Error fetching flights:", err);
      dispatch(loadingFailed());
    });
};

export const selectIsLoading = (state) => state.flights.loading;
export const selectIsLoadingFailed = (state) => state.flights.failed;
export const selectFlightsList = (state) => state.flights.list;

export default flightsSlice.reducer;
