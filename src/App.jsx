import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/Users/LoginPage";
import RegistrationPage from "./pages/Users/RegistrationPage";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/registration" element={<RegistrationPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
