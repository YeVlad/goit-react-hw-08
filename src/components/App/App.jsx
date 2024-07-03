import "./App.css";
import { Routes, Route } from "react-router-dom";

import { useDispatch } from "react-redux";

import ContactsPage from "../../pages/ContactsPage/ContactsPage";
import LoginPage from "../../pages/LoginPage/LoginPage";
import RegisterPage from "../../pages/RegisterPage/RegisterPage";
import NotFound from "../../pages/NotFound/NotFound";
import AppBar from "../AppBar/AppBar";

function App() {
  const dispatch = useDispatch();

  return (
    <>
      <AppBar />
      <Routes>
        <Route path="/" element={<ContactsPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
