import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <>
      {/* Header component for the navigation */}
      <Header />
      {/* Outlet to dynamically render child components based on the current route */}
      <Outlet />
      {/* Footer coponent */}
      <Footer />
    </>
  );
}

export default App;
