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
import AddComposerScreen from "./screens/admin/AddComposerScreen";
import LabelListScreen from "./screens/admin/LabelListScreen";
import LabelEditScreen from "./screens/admin/LabelEditScreen";
import AddLabelScreen from "./screens/admin/AddLabelScreen";
import MediaListScreen from "./screens/admin/MediaListScreen";
import MediaEditScreen from "./screens/admin/MediaEditScreen";
import AddMediaScreen from "./screens/admin/AddMediaScreen";
import CategoryListScreen from "./screens/admin/CategoryListScreen";
import CategoryEditScreen from "./screens/admin/CategoryEditScreen";
import AddCategoryScreen from "./screens/admin/AddCategoryScreen";
import RecordingListScreen from "./screens/admin/RecordingListScreen";
import RecordingEditScreen from "./screens/admin/RecordingEditScreen";
import AddRecordingScreen from "./screens/admin/AddRecordingScreen";
import PerformanceListScreen from "./screens/admin/PerformanceListScreen";
import PerformanceEditScreen from "./screens/admin/PerformanceEditScreen";
import AddPerformanceScreen from "./screens/admin/AddPerformanceScreen";
import UserListScreen from "./screens/admin/UserListScreen";
import UserEditScreen from "./screens/admin/UserEditScreen";
import CDScreen from "./screens/CDScreen";
import CDRScreen from "./screens/CDRScreen";
import CassettesScreen from "./screens/CassettesScreen";
import LPAlbumsScreen from "./screens/LPAlbumsScreen";
import ReelsScreen from "./screens/ReelsScreen";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} path="/" element={<HomeScreen />} />
      <Route path="/recordings" element={<RecordingsScreen />} />
      <Route
        path="/recordings/page/:pageNumber"
        element={<RecordingsScreen />}
      />
      <Route path="/recording/:id" element={<RecordingScreen />} />

      <Route path="recordings/compactdiscs" element={<CDScreen />} />
      <Route path="recordings/cd-recordables" element={<CDRScreen />} />
      <Route path="recordings/cassettes" element={<CassettesScreen />} />
      <Route path="recordings/lp-albums" element={<LPAlbumsScreen />} />
      <Route path="recordings/reels" element={<ReelsScreen />} />

      <Route path="/performances" element={<PerformancesScreen />} />
      <Route
        path="/performances/page/:pageNumber"
        element={<PerformancesScreen />}
      />
      <Route path="/performance/:id" element={<PerformanceScreen />} />

      <Route path="/login" element={<LoginScreen />} />
      <Route path="/register" element={<RegisterScreen />} />

      <Route path="" element={<PrivateRoute />}>
        <Route path="/profile" element={<ProfileScreen />} />
      </Route>

      <Route path="" element={<AdminRoute />}>
        <Route path="/admin/recordinglist" element={<RecordingListScreen />} />
        <Route
          path="/admin/recordinglist/:pageNumber"
          element={<RecordingListScreen />}
        />
        <Route
          path="/admin/recording/:id/edit"
          element={<RecordingEditScreen />}
        />
        <Route path="/admin/addrecording" element={<AddRecordingScreen />} />
        <Route
          path="/admin/performancelist"
          element={<PerformanceListScreen />}
        />
        <Route
          path="/admin/performancelist/:pageNumber"
          element={<PerformanceListScreen />}
        />
        <Route
          path="/admin/performance/:id/edit"
          element={<PerformanceEditScreen />}
        />
        <Route
          path="/admin/addperformance"
          element={<AddPerformanceScreen />}
        />

        <Route path="/admin/composerlist" element={<ComposerListScreen />} />
        <Route
          path="/admin/composerlist/:pageNumber"
          element={<ComposerListScreen />}
        />
        <Route
          path="/admin/composer/:id/edit"
          element={<ComposerEditScreen />}
        />
        <Route path="/admin/addcomposer" element={<AddComposerScreen />} />

        <Route path="/admin/categorylist" element={<CategoryListScreen />} />
        <Route
          path="/admin/categorylist/:pageNumber"
          element={<CategoryListScreen />}
        />
        <Route
          path="/admin/category/:id/edit"
          element={<CategoryEditScreen />}
        />
        <Route path="/admin/addcategory" element={<AddCategoryScreen />} />

        <Route path="/admin/labellist" element={<LabelListScreen />} />
        <Route
          path="/admin/labellist/:pageNumber"
          element={<LabelListScreen />}
        />
        <Route path="/admin/label/:id/edit" element={<LabelEditScreen />} />
        <Route path="/admin/addlabel" element={<AddLabelScreen />} />

        <Route path="admin/medialist" element={<MediaListScreen />} />
        <Route path="/admin/media/:id/edit" element={<MediaEditScreen />} />
        <Route path="/admin/addmedia" element={<AddMediaScreen />} />

        <Route path="/admin/userlist" element={<UserListScreen />} />
        <Route
          path="/admin/userlist/:pageNumber"
          element={<UserListScreen />}
        />
        <Route path="/admin/user/:id/edit" element={<UserEditScreen />} />
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
