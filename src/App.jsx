import React from "react";
import { Toaster } from "react-hot-toast";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import FullscreenLoader from "./components/masterLayout/FullscreenLoader";
import { getToken } from "./helper/SessionHelper";

const App = () => {
  <Toaster />;
  if (getToken()) {
    return (
      <>
        <BrowserRouter>
          <Routes></Routes>
        </BrowserRouter>
        <FullscreenLoader />
      </>
    );
  } else {
    return (
      <>
        <BrowserRouter>
          <Routes></Routes>
        </BrowserRouter>
        <FullscreenLoader />
      </>
    );
  }
};
export default App;
