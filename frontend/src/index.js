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
import PrivateRoute from "./components/PrivateRoute";
import AdminRoute from "./components/AdminRoute";
import HomeScreen from "./screens/HomeScreen";
import RecordingsScreen from "./screens/RecordingsScreen";
import RecordingScreen from "./screens/RecordingScreen";
import PerformancesScreen from "./screens/PerformancesScreen";
import PerformanceScreen from "./screens/PerformanceScreen";
import ProfileScreen from "./screens/ProfileScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import ComposerListScreen from "./screens/admin/ComposerListScreen";
import ComposerEditScreen from "./screens/admin/ComposerEditScreen";
import LabelListScreen from "./screens/admin/LabelListScreen";
import LabelEditScreen from "./screens/admin/LabelEditScreen";
import MediaListScreen from "./screens/admin/MediaListScreen";
import MediaEditScreen from "./screens/admin/MediaEditScreen";
import CategoryListScreen from "./screens/admin/CategoryListScreen";
import CategoryEditScreen from "./screens/admin/CategoryEditScreen";
import RecordingListScreen from "./screens/admin/RecordingListScreen";
import RecordingEditScreen from "./screens/admin/RecordingEditScreen";
import PerformanceListScreen from "./screens/admin/PerformanceListScreen";
import PerformanceEditScreen from "./screens/admin/PerformanceEditScreen";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} path="/" element={<HomeScreen />} />
      <Route path="/recordings" element={<RecordingsScreen />} />
      <Route path="/recording/:id" element={<RecordingScreen />} />
      <Route path="/performances" element={<PerformancesScreen />} />
      <Route path="/performance/:id" element={<PerformanceScreen />} />

      <Route path="/login" element={<LoginScreen />} />
      <Route path="/register" element={<RegisterScreen />} />

      <Route path="" element={<PrivateRoute />}>
        <Route path="/profile" element={<ProfileScreen />} />
      </Route>

      <Route path="" element={<AdminRoute />}>
        <Route path="/admin/recordinglist" element={<RecordingListScreen />} />
        <Route
          path="/admin/recording/:id/edit"
          element={<RecordingEditScreen />}
        />
        <Route
          path="/admin/performancelist"
          element={<PerformanceListScreen />}
        />
        <Route
          path="/admin/performance/:id/edit"
          element={<PerformanceEditScreen />}
        />
        <Route path="/admin/composerlist" element={<ComposerListScreen />} />
        <Route
          path="/admin/composer/:id/edit"
          element={<ComposerEditScreen />}
        />
        <Route path="/admin/categorylist" element={<CategoryListScreen />} />
        <Route
          path="/admin/category/:id/edit"
          element={<CategoryEditScreen />}
        />
        <Route path="/admin/labellist" element={<LabelListScreen />} />
        <Route path="/admin/label/:id/edit" element={<LabelEditScreen />} />
        <Route path="admin/medialist" element={<MediaListScreen />} />
        <Route path="/admin/media/:id/edit" element={<MediaEditScreen />} />
      </Route>
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
