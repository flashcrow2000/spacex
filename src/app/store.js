import { configureStore } from "@reduxjs/toolkit";
import flightsReducer from "../features/flightsList/flightsSlice";

export default configureStore({
  reducer: {
    flights: flightsReducer,
  },
});
