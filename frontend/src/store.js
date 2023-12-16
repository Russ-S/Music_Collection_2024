import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query/react";
import { apiSlice } from "./slices/apiSlice";
import authSliceReducer from "./slices/authSlice";
import recordingReducer from "./redux/recordings/recordingSlice";
import performanceReducer from "./redux/performances/performanceSlice";

const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authSliceReducer,
    recordings: recordingReducer,
    performances: performanceReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: true,
});

setupListeners(store.dispatch);
export default store;
