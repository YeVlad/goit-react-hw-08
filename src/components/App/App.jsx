import "./App.css";
import { Routes, Route } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";

import HomePage from "../../pages/HomePage/HomePage";
import LoginPage from "../../pages/LoginPage/LoginPage";
import RegistrationPage from "../../pages/RegistrationPage/RegistrationPage";
import NotFound from "../../pages/NotFound/NotFound";
import AppBar from "../AppBar/AppBar";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import PublicRoute from "../PublicRoute/PublicRoute";
import { getState, selectAuth } from "../../redux/auth/selectors";
import { refreshUser } from "../../redux/auth/operations";
import ContactsPage from "../../pages/ContactsPage/ContactsPage";

function App() {
  const dispatch = useDispatch();
  dispatch(refreshUser());
  return (
    <>
      <AppBar />
      <Routes>
        <Route element={<PrivateRoute />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/contacts" element={<ContactsPage />} />
        </Route>
        <Route element={<PublicRoute />}>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegistrationPage />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
