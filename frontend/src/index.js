import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
// import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/styles/bootstrap.custom.css";
import "./assets/styles/index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import HomeScreen from "./screens/HomeScreen";
import RecordingsScreen from "./screens/RecordingsScreen";
import RecordingScreen from "./screens/RecordingScreen";
import PerformancesScreen from "./screens/PerformancesScreen";
import PerformanceScreen from "./screens/PerformanceScreen";
import ComposerScreen from "./screens/ComposerScreen";
import LabelScreen from "./screens/LabelScreen";
import MediaScreen from "./screens/MediaScreen";
import LoginScreen from "./screens/LoginScreen";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} path="/" element={<HomeScreen />} />
      <Route path="/recordings" element={<RecordingsScreen />} />
      <Route path="/recording/:id" element={<RecordingScreen />} />
      <Route path="/performances" element={<PerformancesScreen />} />
      <Route path="/performance/:id" element={<PerformanceScreen />} />
      <Route path="/composers" element={<ComposerScreen />} />
      <Route path="/labels" element={<LabelScreen />} />
      <Route path="/media" element={<MediaScreen />} />
      <Route path="/login" element={<LoginScreen />} />
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
