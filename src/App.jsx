import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RegistrationPage from "./pages/Users/RegistrationPage";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/registration" element={<RegistrationPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
